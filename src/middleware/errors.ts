import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import httpErrors,{HttpError} from "http-errors";

export const errorHandler:ErrorRequestHandler = async (err: HttpError, req: Request, res: Response, next: NextFunction) => {
 
  console.log(`${err.name} : ${err.message} - ${err.statusCode} : HTTPMethod: ${req.method} Url: ${req.url}`)
  // console.log(err)
  if (err instanceof httpErrors.HttpError) {
    res.status(err.status).json({
      status:err.status,
      name: err.name,
      message: err.message
    });
  } else {
  res.status(err.statusCode || 401).json({
    status: err.statusCode || 401,
    name: err.name,
    message: err.message,
  });
  }
  
};

// console.log(err.name);
// console.log(err.message);
// console.log(err.headers);
// console.log(err.statusCode);
// console.log(err.status);
// console.log(err.stack);