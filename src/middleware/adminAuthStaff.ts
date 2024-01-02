import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

type customdata = string | JwtPayload;

interface CustomRequest extends Request {
  user: customdata;
}

const authAdminStaff = async (req: Request, res: Response, next: NextFunction) => {
  // MIDDLEWARE FOR AUTHORIZATION (MAKING SURE THEY ARE LOGGED IN)
  try {
    // check if auth header exists
    if (req.headers.authorization) {
      // parse token from header
      const token = req.headers.authorization.split(" ")[1]; //split the header and get the token
      if (token) {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        if (payload && (payload as JwtPayload).role == "STAFF") {
          // store user data in request object
          (req as CustomRequest).user = payload;
          // console.log(payload)
          next();
        } else {
          res.status(400).json({ error: "Not Authorized" });
        }
      } else {
        res.status(400).json({ error: "malformed auth header" });
      }
    } else {
      res.status(400).json({ error: "No authorization header" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

// export custom middleware
export default authAdminStaff;
