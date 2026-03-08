import { Request } from "express"
import { AppError } from "../../error/AppError"
import { prisma } from "../../lib/prisma"

const postBookingIntoDb = async (req: Request) => {
    const userId = req.user?.id
    const {
        scheduledDate, status, tutorId
    } = req.body
    const tutorExists = await prisma.tutorProfile.findUnique({
        where: { id: tutorId }
    });

    if (!tutorExists) {
        throw new AppError("The tutor is not found!", 404);
    }
    if (!scheduledDate) {
        throw new AppError("ScheduledDate is required", 400)
    }
    const result = await prisma.booking.create({
        data: {
            scheduledDate: new Date(scheduledDate),
            status: status || "CONFIRMED",
            student: {
                connect: { id: userId as string }
            },
            tutor: {
                connect: { id: tutorId }
            }


        }
    });
    return result
}

const getAllBookingByStudentIdIntoDb = async (req: Request) => {
    const userId = req.user?.id
    const result = prisma.booking.findMany({
        where:{
            studentId:userId as string
        }
    })
    return result
}

export const BookingService = {
    postBookingIntoDb, getAllBookingByStudentIdIntoDb
}