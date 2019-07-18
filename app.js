const express = require('express');
const app = express();

app.get('/Views/homepage.ejs', function (req, res) {
    res.render('homepage')
    console.log(err)
  })

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);