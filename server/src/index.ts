import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute";
import friendsRoute from "./routes/friendsRoute";
import chatRoute from "./routes/chatRoute";
import cors from "cors";
import { Server } from "./mqtt/Server";
dotenv.config();

// mongodb connection
const mongo_url = process.env.MONGODB_URI || "";
mongoose.set('strictQuery', false)
mongoose.connect(mongo_url)
.then(() => console.log("Connected to the Database"))
.catch((err) => console.error(err));

// Server mqtt that needs to be traposrted to controllers
const temp = new Server();
temp.start();
export const SERVER = temp;

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/friends", friendsRoute);
app.use("/chat", chatRoute);

app.get("/", (req, res) => {
    res.send('<h1>Chat-app api</h1>');
});

app.listen(PORT, () => console.log("Listening on port "+PORT));