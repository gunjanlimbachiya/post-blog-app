server.get('/api/products', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'products.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading JSON file:', err);
        return res.status(500).json({ error: 'Error reading JSON file' });
      }
      try {
        const products = JSON.parse(data);
        res.json(products);
      } catch (error) {
        console.error('Error parsing JSON data:', error);
        res.status(500).json({ error: 'Error parsing JSON data' });
      }
    });
  });
