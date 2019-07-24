const express = require('express');
const app = express();
const database = require('./models');

app.set("view engine", "ejs");

app.use(express.static('./public'));

app.get('/login', function (req, res) {
  res.render('Login');
});

app.get('/forgotPass', function (req, res) {
  res.render('ForgotPass');
});

app.get('/signup', function (req, res) {
  res.render('SignUp');
});

<<<<<<< HEAD
app.get('/views/homepage.ejs', function (req, res) {
=======
app.get('/homepage', function (req, res) {
>>>>>>> 5ce0f4e5013cfa5ca7aa555d86b0875eed05ffd0
    res.render('homepage')
    console.log(err)
  })

app.get('/toa', function (req, res) {
    res.render('toa');
  });

app.get('/singlejob', function (req, res) {
    res.render('singlejob');
});

app.get('/CreatingJob', function (req, res) {
    res.render('CreatingJob')
})
  
app.get('/Chat', function (req, res) {
  res.render('Chat')
})

app.get('/profile', function (req, res) {
  res.render('profile')
})

database.sequelize.sync().then(function(){
    app.listen(3000, function(err){
        if (err)
            console.log(err)
        console.log('Server is live on port: ' + 3000)
    })
});