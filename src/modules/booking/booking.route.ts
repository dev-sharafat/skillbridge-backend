import express from "express"
import { auth } from "../../middleware/auth"
import { UserRole } from "../../../generated/prisma/enums"
import { BookingController } from "./booking.controller"
import RequestValidator from "../../middleware/request_Validetor"
import { BookingValidation } from "./booking.validation"

const bookingRoute = express.Router()
bookingRoute.post(
    "/",
    auth(UserRole.STUDENT),RequestValidator(BookingValidation.create),
    BookingController.postBooking
)
bookingRoute.get(
    "/",
    auth(UserRole.STUDENT),BookingController.getAllBookingByStudentId
)
bookingRoute.get(
    "/:tutorId",
    auth(UserRole.STUDENT),BookingController.getBookingByTutorId
)
// bookingRoute.get(
//     "/admin",
//     auth(UserRole.STUDENT),
//     BookingController.getAllBookings
// )
export default bookingRoute
