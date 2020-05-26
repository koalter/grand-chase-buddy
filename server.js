const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/grand-chase-buddy'));

app.listen(process.env.PORT || 3000);

// PathLocationStrategy

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/grand-chase-buddy/index.html'));
});

console.log("Console listening!");