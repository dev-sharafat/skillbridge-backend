import { toNodeHandler } from "better-auth/node";
import express, { Application } from "express";
import cors from "cors"
import { auth } from "./lib/auth";


const app: Application = express()

app.use(cors({
    origin:process.env.APP_URL || "http://localhost:4000",
    credentials:true
}))

app.all('/api/auth/*splat', toNodeHandler(auth));
app.use(express.json());
app.use(express.raw())


app.get("/", (req, res) => {
    res.send("All data fetched")
})



export default app
