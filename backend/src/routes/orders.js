const express = require('express');
const router = express.Router();
const { runQuery, runInsert, getDB } = require('../db/init');

// Create order
router.post('/', (req, res) => {
  try {
    const { customer_name, customer_address, customer_phone, customer_postal_code, items, total_amount } = req.body;

    if (!customer_name || !customer_address || !items || items.length === 0) {
      return res.status(400).json({ error: 'Customer info and items are required' });
    }

    const db = getDB();
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    db.exec('BEGIN');
    try {
      const orderId = runInsert(
        `INSERT INTO orders (order_number, customer_name, customer_address, customer_phone, customer_postal_code, total_amount)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [orderNumber, customer_name, customer_address, customer_phone, customer_postal_code, total_amount]
      );

      for (const item of items) {
        const customParams = JSON.stringify({
          custom1: item.custom_param1,
          custom2: item.custom_param2,
          custom3: item.custom_param3,
          notes: item.notes
        });
        runInsert(
          `INSERT INTO order_items 
           (order_id, product_name, variant_sku, color, size, specification, material, custom_params, quantity, unit_price, subtotal)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [orderId, item.product_name, item.variant_sku, item.color, item.size,
           item.specification, item.material, customParams, item.quantity, item.unit_price, item.subtotal]
        );
      }

      db.exec('COMMIT');
      res.json({ order_id: orderId, order_number: orderNumber, message: 'Order created successfully' });
    } catch (err) {
      db.exec('ROLLBACK');
      throw err;
    }
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Get all orders
router.get('/', (req, res) => {
  try {
    const orders = runQuery(`
      SELECT o.*, 
        (SELECT COUNT(*) FROM order_items WHERE order_id = o.id) as item_count
      FROM orders o
      ORDER BY o.created_at DESC
    `);
    res.json(orders || []);
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// Get order details
router.get('/:id', (req, res) => {
  try {
    const order = runQuery('SELECT * FROM orders WHERE id = ?', [req.params.id]);
    if (!order || order.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const items = runQuery('SELECT * FROM order_items WHERE order_id = ?', [req.params.id]);
    const orderItems = (items || []).map(item => ({
      ...item,
      custom_params: (() => { try { return JSON.parse(item.custom_params || '{}'); } catch { return {}; } })()
    }));

    res.json({ ...order[0], items: orderItems });
  } catch (err) {
    console.error('Error fetching order:', err);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

module.exports = router;
