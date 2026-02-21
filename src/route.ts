import { Router } from "express";
import categoryRoute from "./modules/category/category.route";
import TutorRoute from "./modules/tutor/tutor.route";
const appRouter = Router()
const moduleRoute = [
    {path:"/category",route:categoryRoute},
    {path:"/tutor",route:TutorRoute},
]

moduleRoute.forEach(route=>appRouter.use(route.path,route.route))


export default appRouter

