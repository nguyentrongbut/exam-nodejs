// app.js
// ... (Existing code)

// Sử dụng EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes cho trang chủ
app.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ... (Remaining code)
