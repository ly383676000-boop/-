const express = require('express');
const cors = require('cors');
const path = require('path');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS - allow all origins for development
app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Routes
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Smoke Shop API is running', version: '1.0.0' });
});

app.get('/', (req, res) => {
  res.json({ 
    name: 'Smoke Shop API',
    version: '1.0.0',
    endpoints: ['/api/products', '/api/orders', '/api/health']
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// For local development
if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

module.exports = app;
