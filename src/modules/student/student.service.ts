import { prisma } from "../../lib/prisma"

const getStudentById = async (studentId:string) => {
    return await prisma.user.findMany({
        where:{
            id:studentId
        }
    })
}



export const StudentService = {
    getStudentById
}