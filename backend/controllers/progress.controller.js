import Order from '../models/order.model.js'
import CourseProgress from '../models/courseProgress.model.js'
import mongoose from 'mongoose'
import Course from '../models/course.model.js'

export const getProgress = async(req,res)=>{
    const {id} = req.params
    try{
        const products = await CourseProgress.find({userId: id})
        res.status(200).json({success: true, data: products})
    }catch(err){
        console.log("Error in get progress:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const getProgressbyId = async(req,res)=>{
    const {id} = req.params
    try{
        const products = await CourseProgress.findById(id)
        res.status(200).json({success: true, data: products})
    }catch(err){
        console.log("Error in get progress:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const createProgress = async (req,res)=>{
    const product = req.body
    const newProgress = new CourseProgress(product)

    try{
        await newProgress.save()
        res.status(201).json({success: true, data: newProgress})
    }catch(err){
        console.log("Error in create progress:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

//mark current lecture as viewed
export const markCurrentLectureAsViewed = async (req, res) => {
    try {
      const { userId, courseId, lectureId } = req.body;
  
      let progress = await CourseProgress.findOne({ userId, courseId });
      if (!progress) {
        progress = new CourseProgress({
          userId,
          courseId,
          lecturesProgress: [
            {
              lectureId,
              viewed: true,
              dateViewed: new Date(),
            },
          ],
        });
        await progress.save();
      } else {
        const lectureProgress = progress.lecturesProgress.find(
          (item) => item.lectureId === lectureId
        );
  
        if (lectureProgress) {
          lectureProgress.viewed = true;
          lectureProgress.dateViewed = new Date();
        } else {
          progress.lecturesProgress.push({
            lectureId,
            viewed: true,
            dateViewed: new Date(),
          });
        }
        await progress.save();
      }
  
      const course = await Course.findById(courseId);
  
      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found",
        });
      }
  
      //check all the lectures are viewed or not
      const allLecturesViewed =
        progress.lecturesProgress.length === course.curriculum.length &&
        progress.lecturesProgress.every((item) => item.viewed);
  
      if (allLecturesViewed) {
        progress.completed = true;
        progress.completionDate = new Date();
  
        await progress.save();
      }
  
      res.status(200).json({
        success: true,
        message: "Lecture marked as viewed",
        data: progress,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Some error occured!",
      });
    }
  };