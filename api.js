const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

const PORT = 8463;

app.use(cors());
app.use(express.json());

const data = [];

const fileName = `data-${new Date().toISOString().replace(/[^0-9]/g, '')}.json`;

app.post('/savedata', async (req, res) => {
    data.push(req.body);
    await fs.promises.writeFile(fileName, JSON.stringify(data, null, 4));
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/savedata`);
});
