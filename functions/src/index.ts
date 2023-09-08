import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import shoutoutRouter from "./routes/shoutoutRouter";
const app = express();
app.use(cors());
app.use("/", shoutoutRouter);
app.use(express.json());
export const api = functions.https.onRequest(app);
