// require các module cần thiết
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { log } = require('console');

// Khởi tạo ứng dụng Express
const app = express();
const port = 3000;
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

// Định nghĩa những router chính, nếu khớp với path thì callback được handler, thực thi
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('');
});

// Bắt đầu lắng nghe trên cổng đã xác định và in ra thông báo
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
