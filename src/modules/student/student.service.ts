import { Request } from "express"
import { AppError } from "../../error/AppError"
import { prisma } from "../../lib/prisma"

const updateStudentDataIntoDb = async (req: Request) => {
    const id = req?.user?.id
    const { name, image } = req.body
    const updateData = {
        name,
        image
    }
    console.log(updateData)
    if (!id) {
        throw new Error("User ID not found")
    }

    const isUserExists = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    if (!isUserExists) {
        throw new AppError("The user is not found...", 404)

    }
    const result = await prisma.user.update({
        where: {
            id: isUserExists.id
        },
        data: updateData
    })
    return result
}


const getStudentById = async (studentId: string) => {
    return await prisma.user.findMany({
        where: {
            id: studentId
        }
    })
}



export const StudentService = {
    updateStudentDataIntoDb, getStudentById
}