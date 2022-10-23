import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authroute from "./routes/auth.js"
import hotelsroute from "./routes/hotels.js"
import roomsroute from "./routes/rooms.js"
import usersroute from "./routes/users.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connect = async () => {
    try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
    } catch (error) {
    throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!")
})

//middlewares
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authroute)
app.use('/api/rooms', roomsroute)
app.use('/api/hotels', hotelsroute)
app.use('/api/users', usersroute)

app.use((err, req, res, next)=>{
    const errStatus = err.status || 500
    const errMessage = err.message || "Something went wrong."

    return res.status(errStatus).json({
            success: false,
            status: errStatus,
            message: errMessage,
            stack: err.stack, 
        });
});

app.listen(5000, ()=>{
    connect()
    console.log("Connection Success")
})