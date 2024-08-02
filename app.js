import express from "express"
import { config } from "dotenv"
import cors from "cors"


config({
    path:"./config/config.env"
})




export const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

import paymentRoute from "./routes/paymentRoutes.js"
// import { manish } from "./controllers/paymentController.js"


app.use('/api/api', paymentRoute)
// app.use('/api/manish',manish)

app.get("/api/api/getkey", (req, res) => {

    res.status(200).json({
        key:process.env.RAZORPAY_API_KEY
    })
})


