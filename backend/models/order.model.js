import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  userEmail: String,
  orderStatus: String,
  paymentMethod: String,
  paymentStatus: String,
  orderDate: Date,
  instructorName: String,
  courseImage: String,
  courseTitle: String,
  courseId: String,
  coursePricing: String,
});


const Order = mongoose.model("Order", OrderSchema);

export default Order