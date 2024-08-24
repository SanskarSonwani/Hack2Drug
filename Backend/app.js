const express = require('express');
const app = express();

app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`IP address: ${ip}`);
    next();
});

app.listen(3000, () => console.log('Server running on port 3000'));
