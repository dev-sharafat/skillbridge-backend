import { Request, Response } from "express";
import { BookingService } from "./booking.service";

const postBooking = async(req:Request,res:Response)=>{
    const result = await BookingService.postBookingIntoDb(req)
}


export const BookingController = {
postBooking
}