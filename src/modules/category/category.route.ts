import express from "express"
import RequestValidator from "../../middleware/request_Validetor"
import { CategoryController } from "./category.controller"
import { CategoryValidation } from "./category.validation"
const categoryRoute = express.Router()

categoryRoute.get(
    "/",
    CategoryController.getAllCategory
)
categoryRoute.get(
    "/:categoryId",
    CategoryController.getCategoryById
)

categoryRoute.post(
    "/",
    RequestValidator(CategoryValidation.create),
    CategoryController.createNewCategory
)
categoryRoute.patch(
    "/:id",
    CategoryController.updateCategory
)

export default categoryRoute