import { Request, Response } from "express";
import { TutorService } from "./tutor.service";

const createTutorProfile = async(req:Request,res:Response)=>{
    const result = await TutorService.createTutorProfileIntoDb(req)
    res.status(201).json({success:true,message:"Tutor profile is successfully created...",data:result})
}
const getAllTutorProfile = async(req:Request,res:Response)=>{
    const result = await TutorService.getAllTutorProfileIntoDb(req)
    res.status(201).json({success:true,message:"Tutor profile is successfully fetch...",data:result})
}
const getTutorProfileById = async(req:Request,res:Response)=>{
    const result = await TutorService.getTutorProfileByIdIntoDb(req)
    res.status(201).json({success:true,message:"Tutor profile is founded successfully...",data:result})
}
const updateTutorProfile = async(req:Request,res:Response)=>{
    const result = await TutorService.updateTutorProfileIntoDb(req)
    res.status(201).json({success:true,message:"Tutor profile is founded successfully...",data:result})
}

export const TutorController ={
    createTutorProfile,getAllTutorProfile,getTutorProfileById,updateTutorProfile
}