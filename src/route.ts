import { Router } from "express";
import categoryRoute from "./modules/category/category.route";
const appRouter = Router()
const moduleRoute = [
    {path:"/category",route:categoryRoute},
    // {path:"/admin",route:categoryRoute},
]

moduleRoute.forEach(route=>appRouter.use(route.path,route.route))


export default appRouter

