const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs').promises;

const app = express();
const PORT = 3000;


app.use(bodyParser.json());


app.post('/order', async (req, res) => {
    let number = req.params.number;
    try {
        await fs.appendFile('data.json', JSON.stringify(req.body, null, 2));
        res.sendStatus(200);
    } catch (error) {
        console.error('Error saving data:', error);
        res.sendStatus(500);
    }
});

app.get('/data', async (req, res) => {
    try {
        // await fs.readFile('data.json', JSON.stringify(req.body, null, 2));
        res.sendFile(path.join(__dirname, '/', 'data.json'));
    } catch (error) {
        console.error('Error saving data:', error);
        res.sendStatus(500);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
