// setting template engine
app.set("view engine","ejs");

// setting up all middleware
app.use(express.static('./public'));
app.use(bodyParser);
app.use(session({ secret: "This is our first website!!!", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// routing manager
app.use(routes);


database.sequelize.sync().then(function(){
    app.listen(port, function(err){
        if (err)
            console.log(err)
        console.log('Server is live on port: ' + port)
    })
});