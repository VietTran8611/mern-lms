import express from 'express'


import { updateCourse, getCourseDetailsByID, getAllCourses, createCourse } from '../controllers/course.controller.js';
const router = express.Router();



router.get("/:id",getCourseDetailsByID)
router.get("/",getAllCourses)
router.post("/",createCourse)
router.put("/:id", updateCourse)





export default router