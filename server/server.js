const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('../client/dist'));
app.use(express.json());

// app.get('/something', (req, res) => {
// 		res.status(200).send('The server is taking requests from something');
// });

app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});