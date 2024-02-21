const express = require('express')
const courseController = require('../controllers/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware');


const router = express.Router();


// https://localhost:3000/courses
// router.route('/yeni').post(courseController.createCourse); --> https://localhost:3000/courses/yeni


router.route('/').post(roleMiddleware(["teacher","admin"]),courseController.createCourse); 
router.route('/').get(courseController.getAllCourses); 
router.route('/:slug').get(courseController.getCourse); 
router.route('/enroll').post(courseController.enrollCourse); 
router.route('/release').post(courseController.releaseCourse); 


module.exports = router;
