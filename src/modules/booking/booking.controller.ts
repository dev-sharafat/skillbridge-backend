import { Request, Response } from "express";
import { BookingService } from "./booking.service";

const postBooking = async (req: Request, res: Response) => {
    const result = await BookingService.postBookingIntoDb(req)
    res.status(201).json({ success: true, message: "Your Booking is successfully created...", data: result })
}

const getAllBookingByStudentId = async (req: Request, res: Response) => {
    const result = await BookingService.getAllBookingByStudentIdIntoDb(req)
    res.status(200).json({ success: true, message: "Booking are fetched...", data: result })
}

const getBookingByTutorId = async (req: Request, res: Response) => {
    const result = await BookingService.getAllBookingByTutorIdIntoDb(req)
    res.status(200).json({ success: true, message: "Booking are fetched...", data: result })

}
export const BookingController = {
    postBooking, getAllBookingByStudentId, getBookingByTutorId
}