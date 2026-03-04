import { Request } from "express"

const postBookingIntoDb = async (req: Request) => {
    console.log(req.body)
}


export const BookingService = {
    postBookingIntoDb
}