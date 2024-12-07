import StudentCourses from "../models/studentCourse.model.js";

export const getCoursePurchaseInfo = async(req,res)=>{
    const {id,studentId} = req.params

    try{
        const studentCourses = await StudentCourses.findOne({
            userId: studentId,
        });
        const ifStudentAlreadyBoughtCurrentCourse =
        studentCourses.courses.findIndex((item) => item.courseId === id) > -1;
            res.status(200).json({
                success: true,
                data: ifStudentAlreadyBoughtCurrentCourse,
        }); 
    }catch(err){
        console.log("Error in get course:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const getCourseDetailsByID = async(req,res)=>{
    const {id} = req.params
    try{
        const courseDetails = await StudentCourses.findById(id);
        res.status(200).json({success: true, data: courseDetails})
    }catch(err){
        console.log("Error in get course:", err.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

