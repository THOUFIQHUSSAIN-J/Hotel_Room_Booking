import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { createError } from "../utils/error.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

//Update
router.put("/:id",verifyUser, updateUser);

//Delete
router.delete("/:id", verifyUser, deleteUser);

//Get a specific item 
router.get("/:id", verifyUser, getUser); 

//Get all 
router.get("/", verifyAdmin, getAllUser);


export default router;

















// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("Hello user you are logged-in !!!")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//     res.send("Hello user you are logged-in! You can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send("Hello admin you are logged-in! You can delete all accounts")
// })