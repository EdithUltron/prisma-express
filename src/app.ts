// Global dependencies
import express, { Request, Response, NextFunction, Application } from "express";
// import createHttpError from "http-errors";
import { config } from "dotenv";

// Project dependencies
import userrouter from "./routes/index.js";
import Auth from "./middleware/auth.js"
import { errorHandler } from "./middleware/errors.js";
import helmet from "helmet";
import loginrouter from "./routes/login.js"

// Express App
const app: Application = express();
app.set('secret', process.env.JWT_SECRET);



// Middlewares
config()
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/auth",loginrouter);
// app.use(Auth)

// import errors from "./utils/error-handler.js"


// Routes
app.use("/api",userrouter);
app.get("/", async (req: Request, res: Response, next: NextFunction) => {
    res.json({message:"Hello World"})
});

// Error handling
app.use(errorHandler);

export default app;