import express from 'express'


import { createProgress, getProgress, getProgressbyId, markCurrentLectureAsViewed } from '../controllers/progress.controller.js';
const router = express.Router();



router.get("/:id",getProgress)
router.get("/get/:id",getProgressbyId)
router.post("/",createProgress)
router.put("/mark",markCurrentLectureAsViewed)


export default router