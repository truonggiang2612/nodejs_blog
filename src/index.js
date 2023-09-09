// require các module cần thiết
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

// Khởi tạo ứng dụng Express
const app = express();
const port = 3000;


app.use(morgan('combined')); // Sử dụng middleware Morgan để ghi log các yêu cầu HTTP đến máy chủ

app.engine('hbs', handlebars({
    extname: '.hbs'
})); // Cấu hình Handlebars làm engine template

app.set('view engine', 'hbs'); // Xác định Handlebars làm view engine mặc định
app.set('views', path.join(__dirname, 'resources/views')); // Xác định thư mục chứa các template view

// Định nghĩa route chính cho trang chính ("/")
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

// Bắt đầu lắng nghe trên cổng đã xác định và in ra thông báo
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
