import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import api from "./routes";
import path from "path";
import cors from "cors";

const app = express();

// CORS 설정
app.use(cors());

app.use(express.static(path.join(__dirname, "../")));

/* MONGODB CONNECTION */
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => console.log("Connected to mongodb server"));
mongoose.connect("mongodb://localhost/post");

/* HTTP LOGGING */
app.use(morgan("dev"));

/* API ROUTING */
app.use("/", api);

app.listen(3500, () => console.log("Server is listening on port 3500)"));
