import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not Authenticated!!!"))
    }

    //if tokens are there then verify
    jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err) return next(createError(403, "You are Authenticated but invalid token."));
            //This is the information we want to display.
        req.user = user;  
        next();
    });
};

export const verifyUser = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "You are not autherized!."));
        }
    })
};

export const verifyAdmin = (req, res, next) =>{
    verifyToken(req, res, next, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
                return next(createError(403, "You are not autherized!."));
        }
    })
};