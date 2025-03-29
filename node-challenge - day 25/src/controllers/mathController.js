export function add(req, res) {
    const { a, b } = req.body;
  
    if (typeof a !== "number" || typeof b !== "number") {
      return res.status(400).json({ error: "Inputs must be numbers" });
    }
  
    res.json({ result: a + b });
  }
  