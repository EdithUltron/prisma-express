import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

type customdata = string | JwtPayload ;

interface CustomRequest extends Request {
  user: customdata;
}

const auth = async (req, res: Response, next: NextFunction) => {
  // MIDDLEWARE FOR AUTHORIZATION (MAKING SURE THEY ARE LOGGED IN)
  try {
    // check if auth header exists
    if (req.headers.authorization) {
      // parse token from header
      const token = req.headers.authorization.split(" ")[1]; //split the header and get the token
      if (token) {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        if (payload && (payload as JwtPayload).role == "STUDENT") {
          // store user data in request object
          req.user = payload;
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
export default auth;

// import { Request,Response,NextFunction } from "express"
// import jwt,{JwtPayload} from "jsonwebtoken"

// type customdata = string | JwtPayload;

// interface CustomRequest extends Request {
//  userid: customdata;
//  userrole: customdata;
//  userbranch: customdata;
// }

// const auth = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         let token = req.headers.authorization;

//         if (token) {
//             token = token.split(" ")[1];
//             let userdata= jwt.verify(token, process.env.JWT_SECRET);
//             (req as CustomRequest).userid = (userdata as JwtPayload).id;
//             (req as CustomRequest).userrole = (userdata as JwtPayload).role;
//             (req as CustomRequest).userbranch = (userdata as JwtPayload).branch;
//             console.log(userdata)
//             next()
//         }
//         else {
//             res.status(401).json({message:"Unauthorized request"})
//         }

//     } catch (error) {
//         console.log(error)
//         res.status(401).json({message:"Unauthorized request"})
//     }
// }

// export default auth;
