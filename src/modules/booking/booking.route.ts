import express from "express"
import { auth } from "../../middleware/auth"
import { UserRole } from "../../../generated/prisma/enums"
import { BookingController } from "./booking.controller"

const bookingRoute = express.Router()
bookingRoute.post(
    "/",
    auth(UserRole.STUDENT),
    BookingController.postBooking
)

export default bookingRoute