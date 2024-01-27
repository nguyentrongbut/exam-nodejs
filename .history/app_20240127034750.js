const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Apply middleware
app.use(bodyParser.json());

// Define your routes
app.use('/api', productRoutes);

// ... (other configurations)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
