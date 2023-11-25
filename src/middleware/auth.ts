import { Request,Response,NextFunction } from "express"
import jwt,{JwtPayload} from "jsonwebtoken"

type customdata = string | JwtPayload;

interface CustomRequest extends Request {
 userid: customdata;
}

const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        let token = req.headers.authorization;

        if (token) {
            token = token.split(" ")[1];
            let userdata= jwt.verify(token, process.env.JWT_SECRET);
            (req as CustomRequest).userid = (userdata as JwtPayload).userid;
            next()
        }
        else {
            res.status(401).json({message:"Unauthorized request"})
        }

    } catch (error) {
        console.log(error)
        res.status(401).json({message:"Unauthorized request"})
    }
}

export default auth;