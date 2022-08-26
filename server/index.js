import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoutes from "./router/todos.js"

const app = express();
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("Connected to DB");
    }).catch(err => {
        throw err;
    });
};

app.use("/api", todoRoutes);

app.listen(8800, () => {
    connect()
    console.log("Connected to server!");
});