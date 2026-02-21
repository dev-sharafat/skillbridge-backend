import express from "express"
import { auth } from "../../middleware/auth"
import { UserRole } from "../../../generated/prisma/enums"
import { StudentController } from "./student.controller"
const router = express.Router()

router.get(
    "/student/:studentId",
    auth(UserRole.STUDENT),
    StudentController.getStudentById
)



export const StudentRoute = router