import { Request, Response } from "express";
import { StudentService } from "./student.service";

// const getStudent = async (req: Request, res: Response) => {
//     try {
     
//         const result = await StudentService.getStudent()
//         res.status(200).json(result)

//     } catch (e) {
//         res.status(404).json({
//             error: "The post is not available...",
//             details: e
//         })
//     }
// }
const getStudentById = async (req: Request, res: Response) => {
    try {
        const {studentId} = req.params 
        console.log(studentId)
        const result = await StudentService.getStudentById(studentId as string)
        res.status(200).json(result)

    } catch (e) {
        res.status(404).json({
            error: "The post is not available...",
            details: e
        })
    }
}
export const StudentController = {
    getStudentById
}