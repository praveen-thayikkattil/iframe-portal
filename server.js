const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'ust1234'
    });
});

app.listen(8080, () => console.log('Authentication API is running on http://localhost:80801/login'));