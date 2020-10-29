const express = require('express');
const app = express();


app.get('/', async (req, res) => {
  res.send("Built with Nodejs and deployed using Cloud Build and Cloud Run v1");
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));