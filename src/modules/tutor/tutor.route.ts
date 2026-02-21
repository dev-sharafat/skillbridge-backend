import express from "express"
import { UserRole } from "../../../generated/prisma/enums"
import { auth } from "../../middleware/auth"
import RequestValidator from "../../middleware/request_Validetor"
import { TutorController } from "./tutor.controller"
import { TutorValidation } from "./tutor.validation"
const TutorRoute = express.Router()

TutorRoute.post(
    "/", auth(UserRole.TUTOR),
    RequestValidator(TutorValidation.create),
    TutorController.createTutorProfile

)
TutorRoute.patch(
    "/:id", auth(UserRole.TUTOR),
    RequestValidator(TutorValidation.create),
    TutorController.updateTutorProfile

)
TutorRoute.get(
    "/", auth(UserRole.TUTOR),
    TutorController.getAllTutorProfile

)
TutorRoute.get(
    "/:id", auth(UserRole.TUTOR),
    TutorController.getTutorProfileById

)

export default TutorRoute