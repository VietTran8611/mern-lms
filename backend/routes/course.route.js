import express from 'express'


import { updateCourse, getCourseDetailsByID, getAllCourses, createCourse, getAllStudentViewCourses } from '../controllers/course.controller.js';
const router = express.Router();

router.get("/:id",getCourseDetailsByID)
router.get("/",getAllStudentViewCourses)
router.post("/",createCourse)
router.put("/:id", updateCourse)






export default router