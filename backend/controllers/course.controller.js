import Course from "../models/course.model.js";

export const getCourseDetailsByID = async(req,res)=>{
    const {id} = req.params
    try{
        const courseDetails = await Course.findById(id);
        res.status(200).json({success: true, data: courseDetails})
    }catch(err){
        console.log("Error in get course:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const getAllCourses = async(req,res)=>{

    try{
        const coursesList = await Course.find({});
        res.status(200).json({success: true, data: coursesList})
    }catch(err){
        console.log("Error in get course:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const createCourse = async (req,res)=>{
    const courseData = req.body;

    const newlyCreatedCourse = new Course(courseData);

    try{
        await newlyCreatedCourse.save()
        res.status(201).json({success: true, data: newlyCreatedCourse})
    }catch(err){
        console.log("Error in create product:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const updateCourse = async(req,res)=>{
    const {id}= req.params
    const course = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
      return  res.status(404).json({success: false, message:"Invalid Id"})
    }

    try{
       const updatecourse= await User.findByIdAndUpdate(id,course,{new:true})
       res.status(200).json({success:true,data: updatecourse})
    }catch(err){
        res.status(500).json({success: false, message:"Server Error"})
    }
}