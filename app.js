const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.use(express.static('./public'));

app.get('/login', function (req, res) {
  res.render('Login');
});

app.get('/forgotPass', function (req, res) {
  res.render('ForgotPass');
});

app.get('/SignUp', function (req, res) {
  res.render('SignUp');
});

app.get('/Views/homepage.ejs', function (req, res) {
    res.render('homepage')
    console.log(err)
  })


  app.listen(3000, function(err){
    if (err){
    console.log(err)
    }
    console.log('server is live on port 3000!!')
})