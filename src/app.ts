// Global dependencies
import express, { Request, Response, NextFunction, Application } from "express";
import { config } from "dotenv";
import cors from "cors";


// Project dependencies
import apirouter from "./routes/index.js";
import { errorHandler } from "./middleware/errors.js";
import helmet from "helmet";
import loginrouter from "./routes/login.js"


// Express App
const app: Application = express();
app.set('secret', process.env.JWT_SECRET);
app.use(
  cors({
    allowedHeaders: ["Authorization", "Content-Type"], // you can change the headers
    exposedHeaders: ["Authorization"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",      
  })
);


// Middlewares
config()
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/auth",loginrouter);

// Routes
app.use("/api",apirouter);
app.get("/", async (req: Request, res: Response, next: NextFunction) => {
    res.json({message:"Hello World"})
});

// Error handling
app.use(errorHandler);

export default app;