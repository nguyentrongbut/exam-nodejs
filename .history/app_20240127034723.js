// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', productRoutes);

app.set('view engine', 'ejs');
app.set('views', './views');

// mongoose.connect('mongodb://localhost:27017/productDB', { useNewUrlParser: true, useUnifiedTopology: true });

// ... (Add routes for web interface, handle errors, etc.)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
