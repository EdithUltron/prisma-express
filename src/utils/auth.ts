import jwt from "jsonwebtoken"

interface payload {
  id: String;
  role: String;
  dataId?: String;
  email:String
}

const sendToken = async(data:payload) => {
    
    const token = jwt.sign(
      data,
        process.env.JWT_SECRET,
      {expiresIn:86400}
    );
  return token;
}

export {sendToken};