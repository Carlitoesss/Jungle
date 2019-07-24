const express = require('express');
const app = express();
const database = require('./models');
const bodyParser = require('body-parser').urlencoded({extended: false})
var session = require("express-session");

// requiring passport as weve configured it
var passport = require("./config/passport");

// setting up all middleware
app.use(bodyParser);
app.use(session({ public: true, secret:"password", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



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

app.get('/homepage', function (req, res) {
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
      console.log('Server is live on port: 3000' )
  })
});