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

app.get('/SignUp', function (req, res) {
  res.render('SignUp');
});

app.get('/home', function (req, res) {
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

 database.sequelize.sync().then(function(){
    app.listen(3000, function(err){
        if (err)
            console.log(err)
        console.log('Server is live on port: ' + 3000)
    })
});