const express = require('express');
const routes  = require('./routes');
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

// setting up all middleware
app.use(express.static('./public'));
app.use(bodyParser);
app.use(session({ secret: "Were only 15 years old!!!!!", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// // app.get('/login', function (req, res) {
// //   res.render('Login');
// // });

// // app.post( '/user/signup', userController.signup );

// // app.get('/forgotPass', function (req, res) {
// //   res.render('ForgotPass');
// // });

// // // app.get('/signup', function (req, res) {
// // //   res.render('SignUp');
// // // });

// // app.get('/home', function (req, res) {
// //     res.render('homepage')
// //     console.log(err)
// //   })

// // app.get('/toa', function (req, res) {
// //     res.render('toa');
// //   });

app.get('/singlejob', function (req, res) {
    res.render('singlejob');
});

// // app.get('/creatingjob', function (req, res) {
// //     res.render('CreatingJob')
// // })
  
app.get('/chat', function (req, res) {
  res.render('Chat')
})

// // app.get('/profile', function (req, res) {
// //   res.render('profile')
// // })

// routing manager
app.use(routes);



database.sequelize.sync().then(function(){
  app.listen(3000, function(err){
      if (err)
          console.log(err)
      console.log('Server is live on port: 3000' )
  })
});