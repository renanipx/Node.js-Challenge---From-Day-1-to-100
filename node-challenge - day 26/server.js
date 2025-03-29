const express = require("express");
const { add } = require("./calculator");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.get("/add", (req, res) => {
    const result = add(5, 3);
    res.send(`The result of the addition is: ${result}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
