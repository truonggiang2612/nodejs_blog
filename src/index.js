const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { log } = require('console');

// EXPRESS JS
const express = require('express');
const app = express();
const port = 3000;

const route = require('./resources/routes');
const db = require('./config/db/index');

// Connect to DB
db.connect();


// Cấu hình static file
app.use(express.static(path.join(__dirname, 'public')));


app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());


// Sử dụng middleware Morgan để ghi log các yêu cầu HTTP đến máy chủ
app.use(morgan('combined'));


// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
