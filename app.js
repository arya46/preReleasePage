const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.set('port', process.env.PORT || 8888);

const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});