import { Router } from "express";
import bookingRoute from "./modules/booking/booking.route";
import categoryRoute from "./modules/category/category.route";
import reviewRouter from "./modules/review/review.route";
import studentRouter from "./modules/student/student.route";
import TutorRoute from "./modules/tutor/tutor.route";
const appRouter = Router()
const moduleRoute = [
    { path: "/category", route: categoryRoute },
    { path: "/tutor", route: TutorRoute },
    { path: "/booking", route: bookingRoute },
    { path: "/student", route: studentRouter },
    { path: "/review", route: reviewRouter }
]

moduleRoute.forEach(route => appRouter.use(route.path, route.route))


export default appRouter

