const Course = require('../models/Course');
const { mutipleMongooseToOject } = require('../../util/mongoose');

class MeController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then(courses => res.render('me/stored-courses', {
        courses: mutipleMongooseToOject(courses)
      }))
      .catch(next);
  }
}

module.exports = new MeController();
