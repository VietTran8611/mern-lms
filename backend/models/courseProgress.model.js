import mongoose from 'mongoose'

const LectureProgressSchema = new mongoose.Schema({
  lectureId: String,
  viewed: Boolean,
  dateViewed: Date,
});

const CourseProgressSchema = new mongoose.Schema({
  instructorName: String,
  courseImage: String,
  courseTitle: String,
  userId: String,
  courseId: String,
  completed: Boolean,
  completionDate: Date,
  lecturesProgress: [LectureProgressSchema],
});

const CourseProgress = mongoose.model("Progress", CourseProgressSchema);

export default CourseProgress