import { Request, Response } from "express";
import { ReviewService } from "./review.service";

const getAllReviews = async (req: Request, res: Response) => {
    const result = await ReviewService.getAllReviewsIntoDb(req)
    res.status(201).json({ success: true, message: "Your reviews are successfully fetched...", data: result })
}

export const ReviewController = {
    getAllReviews
}