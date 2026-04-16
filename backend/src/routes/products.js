const express = require('express');
const router = express.Router();
const db = require('../db/memory');

// Get all products
router.get('/', (req, res) => {
  try {
    const products = db.getAllProducts();
    // Wrap in success format for frontend compatibility
    res.json({
      success: true,
      data: products
    });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch products' });
  }
});

// Get single product
router.get('/:id', (req, res) => {
  try {
    const product = db.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    const variants = db.getVariantsByProductId(req.params.id);
    res.json({
      success: true,
      data: { ...product, variants }
    });
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch product' });
  }
});

// Create product
router.post('/', (req, res) => {
  try {
    const { name, nameEn, brand, description, descriptionEn, price, image, category } = req.body;

    if (!name || !price) {
      return res.status(400).json({ success: false, error: 'Name and price are required' });
    }

    const newProduct = db.addProduct({
      name, nameEn, brand, description, descriptionEn, price, image, category,
      colors: req.body.colors || [],
      sizes: req.body.sizes || [],
      specifications: req.body.specifications || [],
      materials: req.body.materials || [],
      sku: req.body.sku || '',
      stock: req.body.stock || 100
    });

    res.json({ success: true, data: newProduct, message: 'Product created successfully' });
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ success: false, error: 'Failed to create product' });
  }
});

// Update product
router.put('/:id', (req, res) => {
  try {
    const updated = db.updateProduct(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.json({ success: true, data: updated, message: 'Product updated successfully' });
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ success: false, error: 'Failed to update product' });
  }
});

// Delete product
router.delete('/:id', (req, res) => {
  try {
    const deleted = db.deleteProduct(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.json({ success: true, message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ success: false, error: 'Failed to delete product' });
  }
});

module.exports = router;
