import mongoose from 'mongoose'

const LectureSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
});

const CourseSchema = new mongoose.Schema({
  instructorName: String,
  date: Date,
  title: String,
  category: String,
  level: String,
  primaryLanguage: String,
  subtitle: String,
  description: String,
  image: String,
  welcomeMessage: String,
  pricing: Number,
  students: [
    {
      studentId: String,
      studentName: String,
      studentEmail: String,
      paidAmount: String,
    },
  ],
  curriculum: [LectureSchema],
  isPublised: Boolean,
});

const Course = mongoose.model("Course", CourseSchema);

export default Course

