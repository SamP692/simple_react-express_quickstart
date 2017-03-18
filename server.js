require('dotenv').config();

process.env.ENV = process.env.ENV || 'dev';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
/*
<!-- [1] Use for server-side session storage --!>
const session = require('express-session');
onst cookieParser = require('cookie-parser');
<!-- Find [1] for more required code --!>
*/

/*
<!-- [2] Use for server-side authentication --!>
const authentication = require('./api/middleware/authentication');
<!-- Find [2] for more required code --!>
*/

/*
<!-- [3] API routes for signup/login/logout --!>
const userRouter = require('./api/routers/userRouter');
<!-- Find [3] for more required code --!>
*/

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*
<!-- [1] Use for server-side session storage --!>
app.use(cookieParser()); // <!-- Use for server-side session storage --!>

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: true,
  saveUninitialized: true,
}));
<!-- Find [1] for more required code --!>
*/

app.use(morgan('dev'));

if (process.env.ENV === 'dev') {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    stats: {
      colors: true,
      chunks: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, '/dist')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

/*
<!-- [2] Use for server-side authentication --!>
app.use('/api', authentication);
<!-- Find [2] for more required code --!>
*/

/*
<!-- [3] API routes for signup/login/logout --!>
app.use('/api/user', userRouter);
<!-- Find [3] for more required code --!>
*/

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`LISTENING on Port ${port}`);
});
