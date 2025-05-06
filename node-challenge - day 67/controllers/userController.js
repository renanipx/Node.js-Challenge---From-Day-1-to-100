exports.register = (req, res) => {
    const { name, email, password } = req.body;
  
    // Simulate saving to database
    res.status(201).json({ message: 'User registered successfully', user: { name, email } });
  };
  