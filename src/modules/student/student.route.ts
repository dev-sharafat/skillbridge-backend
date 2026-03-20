import express from "express"
import { UserRole } from "../../../generated/prisma/enums"
import { auth } from "../../middleware/auth"
import RequestValidator from "../../middleware/request_Validetor"
import { StudentController } from "./student.controller"
import { StudentValidation } from "./student.validation"
const studentRouter = express.Router()



studentRouter.get(
    "/:studentId",
    auth(UserRole.STUDENT),
    StudentController.getStudentById
)

studentRouter.patch(
    "/",
    auth(UserRole.STUDENT), RequestValidator(StudentValidation.update),
    StudentController.updateStudentData

)


export default studentRouter;