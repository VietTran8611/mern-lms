import express from 'express'


import { createOrder, deleteOrder, getOrder, updateOrder } from '../controllers/order.controller.js';
const router = express.Router();



router.get("/:id",getOrder)

router.post("/",createOrder)
router.post("/update/:id",updateOrder)

router.delete("/:id", deleteOrder)


export default router