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
       const updatecourse= await Course.findByIdAndUpdate(id,course,{new:true})
       res.status(200).json({success:true,data: updatecourse})
    }catch(err){
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const updateStudent = async(req,res)=>{
  const {id}= req.params
  const stu = req.body

  try{
     const updatecourse= await Course.updateOne({_id: id},{$push: {students: stu}})
     res.status(200).json({success:true,data: updatecourse})
  }catch(err){
      res.status(500).json({success: false, message:"Server Error 2"})
  }
}

export const getAllViewCourses = async (req, res) => {
    const {
      category = [],
      level = [],
      primaryLanguage = [],
      student ='',
      sortBy = "price-lowtohigh",
    } = req.query;


    try {
      let filters = {};
      if(student.length){
        filters={"students.studentId":   { $ne: student} }
      }
      if (category.length) {
        filters.category = { $in: category.split(",") };
      }
      if (level.length) {
        filters.level = { $in: level.split(",") };
      }
      if (primaryLanguage.length) {
        filters.primaryLanguage = { $in: primaryLanguage.split(",") };
      }
      console.log(filters, "filter");
      let sortParam = {};
      switch (sortBy) {
        case "price-lowtohigh":
          sortParam.pricing = 1;
  
          break;
        case "price-hightolow":
          sortParam.pricing = -1;
  
          break;
        case "title-atoz":
          sortParam.title = 1;
  
          break;
        case "title-ztoa":
          sortParam.title = -1;
  
          break;
  
        default:
          sortParam.pricing = 1;
          break;
      }
      const coursesList = await Course.find(filters).sort(sortParam);
      //const coursesList = await Course.find(filters)
  
      res.status(200).json({
        success: true,
        data: coursesList,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  };


  export const getAllStudentViewCourses = async (req, res) => {
    
    const {id} = req.params
    console.log(id)
    try{
      const coursesList = await Course.find({"students.studentId": id });
      res.status(200).json({success: true, data: coursesList})
  }catch(err){
      console.log("Error in get course:", err.message)
      res.status(500).json({success: false, message:"Server Error"})
  }
  };