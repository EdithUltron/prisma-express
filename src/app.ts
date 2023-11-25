// Global dependencies
import express, { Request, Response, NextFunction, Application } from "express";
import createHttpError from "http-errors";
import { config } from "dotenv";

// Project dependencies
import userrouter from "./routes/index.js";
import Auth from "./middleware/auth.js"
import { errorHandler } from "./middleware/errors.js";
import helmet from "helmet";

// Express App
const app: Application = express();
app.set('secret', process.env.JWT_SECRET);



// Middlewares
config()
app.use(helmet())
// app.use(Auth)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// import errors from "./utils/error-handler.js"


// Routes
app.use(userrouter);
app.get("/", async (req: Request, res: Response, next: NextFunction) => {
        // next(createHttpError(404,"Not found",{expose:false}))
        // next(errors.BAD_REQUEST("Its a bad request"))
    next(createHttpError[400])
    // createHttpError[400]
    // res.json({message:"Home"})
});

// Error handling
app.use(errorHandler);

export default app;