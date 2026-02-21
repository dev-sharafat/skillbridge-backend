import { Request, Response } from "express";
import { CategoryServices } from "./category.service";


const createNewCategory = async (req: Request, res: Response) => {
    const result = await CategoryServices.createNewCategoryIntoDb(req)
    res.status(201).json({
        success: true,
        message: "Category is created..",
        data: result
    })

}
const updateCategory = async (req: Request, res: Response) => {
   
    const result = await CategoryServices.updateCategoryIntoDb(req)
    res.status(201).json({
        success: true,
        message: "Category is created..",
        data: result
    })

}
const getAllCategory = async (req: Request, res: Response) => {
    const result = await CategoryServices.getAllCategoryIntoDb()
    res.status(201).json({
        success: true,
        message: "Fetch all Categories ..",
        data: result
    })
}
const getCategoryById = async (req: Request, res: Response) => {
    const { categoryId } = req.query
    console.log(categoryId)
    const result = await CategoryServices.getCategoryByIdIntoDb(categoryId as string)
    res.status(201).json({
        success: true,
        message: "Fetch all Categories ..",
        data: result
    })
}



export const CategoryController = {
    createNewCategory,
    getAllCategory,
    getCategoryById,
    updateCategory
}