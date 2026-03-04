import { Router } from "express";
import categoryRoute from "./modules/category/category.route";
import TutorRoute from "./modules/tutor/tutor.route";
import bookingRoute from "./modules/booking/booking.route";
const appRouter = Router()
const moduleRoute = [
    {path:"/category",route:categoryRoute},
    {path:"/tutor",route:TutorRoute},
    {path:"/booking",route:bookingRoute},
]

moduleRoute.forEach(route=>appRouter.use(route.path,route.route))


export default appRouter

