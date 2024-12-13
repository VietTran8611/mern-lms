import express from 'express'


import { updateCourse, getCourseDetailsByID, getAllCourses, createCourse, getAllStudentViewCourses,updateStudent,getAllViewCourses } from '../controllers/course.controller.js';
const router = express.Router();

router.get("/:id",getCourseDetailsByID)
router.get("/student/:id",getAllStudentViewCourses)
router.get("/",getAllViewCourses)
router.post("/",createCourse)
router.put("/:id", updateCourse)
router.put("/student/:id", updateStudent)





export default router