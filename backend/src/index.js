const mongoose = require("mongoose")
const { app, PORT } = require("./server")

app.listen(PORT, () => {
    console.log("Server Started")
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI, () => {
        console.log("Database connected")
    })
})

const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
require("dotenv").config()

const foodblogRouter = require("./controllers/foodblogs/foodblogRoutes")
const userRouter = require("./controllers/users/userRoutes")
const contactRouter = require("./controllers/contact/contactRoutes")

const app = express()

app.use(helmet())

app.use(express.json())

const corsOption = {
    orgin: ["http:localhost:3000", "https://legendary-arithmetic-c1ee45.netlify.app"], 
    optionsSuccessStatus: 200
}

app.get("/", (request, response) => {
    response.json({
        data: "Data Send"
    })
})

app.use(cors(corsOption))

const PORT = process.env.PORT || 5000

app.use("/foodblogs", foodblogRouter)
app.use("/users", userRouter)
app.use("/contact", contactRouter)