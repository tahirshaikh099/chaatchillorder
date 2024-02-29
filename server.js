const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.json())


app.post('/order', async (req, res) => {
    // let number = req.params.number;
    console.log(req.body);
    try {
        await fs.appendFile('data.json', JSON.stringify(req.body));
        res.status(200).send();
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send();
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
