import { Request } from "express";
import { prisma } from "../../lib/prisma";

const getAllReviewsIntoDb = async(req:Request)=>{
    return await prisma.review.findMany()
    console.log(req)
}



export const ReviewService ={
    getAllReviewsIntoDb
}