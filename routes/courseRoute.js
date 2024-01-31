const express = require('express')
const courseController = require('../controllers/courseController')

const router = express.Router();


router.route('/').get(courseController.getAllCourses); 
router.route('/').post(courseController.createCourse); 
// https://localhost:3000/courses

//router.route('/yeni').post(courseController.createCourse);
// https://localhost:3000/courses/yeni

module.exports = router;
