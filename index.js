const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});