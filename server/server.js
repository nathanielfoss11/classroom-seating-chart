const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('../client/dist'));
app.use(express.json());

// app.get('/something', (req, res) => {
// 		res.status(200).send('The server is taking requests from something');
// });

app.listen(port, () => {
    console.log('Serving up now at '+ JSON.stringify(port))
});