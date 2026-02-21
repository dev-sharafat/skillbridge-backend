import { Request } from "express"
import { AppError } from "../../error/AppError"
import { prisma } from "../../lib/prisma"

const createNewCategoryIntoDb = async (req: Request) => {
    const isCategoryExists = await prisma.category.findFirst({
        where: {
            name: req?.body?.name
        }
    })
    if (isCategoryExists) {
        throw new AppError("Category name is already exist..", 400)
    }
    const result = await prisma.category.create({
        data: {
            name: req.body.name
        }
    })
    return result
}
const updateCategoryIntoDb = async (req: Request) => {
    const id = req?.params?.id as string
    const isCategoryExists = await prisma.category.findFirst({
        where: {
            id: id
        }
    })
    if (!isCategoryExists) {
        throw new AppError("Category  is not exist..", 400)
    }
    const result = await prisma.category.update({
        where: {
            id: id
        },
        data: {
            name: req?.body?.name
        }
    })
    return result
}


const getAllCategoryIntoDb = async () => {
    return await prisma.category.findMany()

}
const getCategoryByIdIntoDb = async (categoryId: string) => {
    return await prisma.category.findFirst({
        where: {
            id: categoryId
        }
    })

}

export const CategoryServices = {
    createNewCategoryIntoDb,
    getAllCategoryIntoDb,
    getCategoryByIdIntoDb,
    updateCategoryIntoDb
}