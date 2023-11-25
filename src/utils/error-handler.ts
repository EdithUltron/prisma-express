import createHttpError from "http-errors";

const errors = {
    "BAD_REQUEST": (msg) => (new createHttpError.BadRequest(msg) ),
    "UNAUTHORIZED_REQUEST": (msg)=>( new createHttpError.Unauthorized(msg)),
    "FORBIDDEN": (msg)=>( new createHttpError.Forbidden(msg)),
    "NOT_FOUND": (msg)=>( new createHttpError.NotFound(msg)),
    "INTERNAL_SERVER": (msg)=>( new createHttpError.InternalServerError(msg))
}

export default errors;