const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;


app.use(bodyParser.json());


app.post('/order/:number', async (req, res) => {
    let number = req.params.number;
    try {
        await fs.appendFile(`${number}.json`, JSON.stringify(req.body, null, 2));
        res.sendStatus(200);
    } catch (error) {
        console.error('Error saving data:', error);
        res.sendStatus(500);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
