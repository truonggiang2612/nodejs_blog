const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { log } = require('console');
const app = express();
const port = 3000;

const route = require('./resources/routes');
const db = require('./config/db/index')

// Connect to DB
db.connect();


app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//app.use(morgan('combined')); // Sử dụng middleware Morgan để ghi log các yêu cầu HTTP đến máy chủ

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
