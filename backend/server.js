import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './config/db.js'
import authRoutes from './routes/auth.route.js'
import adminRoutes from './routes/admin.route.js'
import path from 'path';
import orderRoutes from './routes/order.route.js'
import courseRoutes from './routes/course.route.js'

import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config()
//TNidmU0rVPWnIaKe

const app = express()
const PORT = process.env.PORT ||  5000
const __dirname = path.resolve()

app.use(express.json({limit: '50mb'}))
app.use(cors({origin: "http://localhost:5173", credentials: true}))
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/order",orderRoutes)
app.use("/api/course",courseRoutes)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, ()=>{
    connectDB()
    console.log(`server start at PORT ${PORT}`)
})

  