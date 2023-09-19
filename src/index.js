// require các module cần thiết
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { log } = require('console');
const app = express();
const port = 3000;

const route = require('./resources/routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//app.use(morgan('combined')); // Sử dụng middleware Morgan để ghi log các yêu cầu HTTP đến máy chủ

app.engine('hbs', handlebars({
    extname: '.hbs'
})); // Cấu hình Handlebars làm engine template

app.set('view engine', 'hbs'); // Xác định Handlebars làm view engine mặc định
app.set('views', path.join(__dirname, 'resources/views')); // Xác định thư mục chứa các template view


// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
