require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const router = require('./app/routes/api')
const mongoose = require('mongoose')
const vhost = require('vhost')
const web = require('./app/routes/web')

const flash = require('connect-flash');
const passport = require('passport')
const session = require('express-session')
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);

const configDB = require('./config/database.js');

mongoose.Promise = global.Promise
mongoose.connect(configDB.url);

const app = express()

require('./config/passport')(passport);


app.set('views', './views')
app.set('view engine', 'ejs')


app.use(express.static('public'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
  secret: 'md5',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



app.use(router)
app.use(web)

app.post('/login', function(req, res, next){
    passport.authenticate('local-login', function(err, user, info){
        if (err)
            return next(err)

        if (!user)
            return res.status(401).json({ success : false, message : 'authentication failed' });

        req.login(user, function(err){
          if(err){
            return next(err);
          }
          return res.status(200).json({ success : true, message : 'authentication succeeded.' });
        });
    })(req, res, next)
});

app.listen(3000, function() {
	console.log("Server on port 3000")
})
