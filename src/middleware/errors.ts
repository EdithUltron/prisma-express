import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import httpErrors,{HttpError} from "http-errors";

export const errorHandler:ErrorRequestHandler = async (err: HttpError, req: Request, res: Response, next: NextFunction) => {
 
  console.log(`${err.name} : ${err.message} - ${err.statusCode} : HTTPMethod: ${req.method} Url: ${req.url}`)
  if (err instanceof httpErrors.HttpError) {
    res.status(err.status).json({
      status:err.status,
      name: err.name,
      message: err.message
    });
  } else {
    res.status(500).json({
      status:500,
      name: "Internal Server Error",
      message: "Its Not Your Problem, Its Ours"
    });
  }
  
};

// console.log(err.name);
// console.log(err.message);
// console.log(err.headers);
// console.log(err.statusCode);
// console.log(err.status);
// console.log(err.stack);