import { Request, Response } from "express";
import { StudentService } from "./student.service";

const updateStudentData = async (req: Request, res: Response) => {
    const result = await StudentService.updateStudentDataIntoDb(req)
    res.status(201).json({ success: true, message: "Your Booking is successfully created...", data: result })
}
const getStudentById = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params
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
    getStudentById,updateStudentData
}