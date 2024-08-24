const axios = require('axios');

const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';
const tag = 'drugtrading'; // Example tag

axios.get(`https://graph.instagram.com/v12.0/tags/${tag}/media?access_token=${accessToken}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
