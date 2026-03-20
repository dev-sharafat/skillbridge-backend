import { Request } from "express"
import { TutorProfileWhereInput } from "../../../generated/prisma/models"
import { AppError } from "../../error/AppError"
import { prisma } from "../../lib/prisma"


const createTutorProfileIntoDb = async (req: Request) => {
    const userId = req?.user?.id

    if (!userId) {
        throw new AppError("Unauthorized: User not found in request", 401)
    }

    const {
        bio,
        skills,
        pricePerHour,
        availability,
        category
    } = req.body

    if (!category) {
        throw new AppError("Category is required", 400)
    }

    const userExists = await prisma.user.findUnique({
        where: { id: userId }
    })

    if (!userExists) {
        throw new AppError("User does not exist in database", 404)
    }

    const existingTutor = await prisma.tutorProfile.findUnique({
        where: { userId }
    })

    if (existingTutor) {
        throw new AppError("Tutor profile already exists", 400)
    }


    const result = await prisma.tutorProfile.create({
        data: {
            bio,
            skills,
            pricePerHour,
            availability,
            user: {
                connect: { id: userId }
            },
            category
        }
    })

    return result
}

const updateTutorProfileIntoDb = async (req: Request) => {
    const userId = req?.user?.id

    if (!userId) {
        throw new AppError("Unauthorized: User not found", 401)
    }

    const {
        bio,
        skills,
        pricePerHour,
        availability,
        category, rating
    } = req.body

    // 1️⃣ Check tutor profile exists
    const existingTutor = await prisma.tutorProfile.findUnique({
        where: { userId }
    })

    if (!existingTutor) {
        throw new AppError("Tutor profile not found", 404)
    }


    const updateData: any = {}

    if (bio !== undefined) updateData.bio = bio
    if (skills !== undefined) updateData.skills = skills
    if (pricePerHour !== undefined) updateData.pricePerHour = pricePerHour
    if (availability !== undefined) updateData.availability = availability

    if (category) {
        updateData.category = category

    }
    if (rating !== undefined) updateData.rating = rating
    // 4️⃣ Update profile
    const result = await prisma.tutorProfile.update({
        where: { userId },
        data: updateData
    })

    return result
}


const getAllTutorProfileIntoDb = async (req: Request) => {
    const { search } = req.query
    const searchTerm = (search as string)?.trim();
    const { rating } = req.query
    const { pricePerHour } = req.query
    const orConditions: TutorProfileWhereInput[] = []

    if (searchTerm) {
        orConditions.push({
            OR: [
                {
                    category: {
                        contains: searchTerm as string,
                        mode: "insensitive"
                    }
                },


            ]
        })
    }
    if (rating) {
        orConditions.push({
            OR: [
                {
                    rating: Number(rating)
                    
                }
            ]
        })
    }
    if (pricePerHour) {
        orConditions.push({
            pricePerHour: Number(pricePerHour) // or equals

        });
    }
    const getPost = await prisma.tutorProfile.findMany({
        where: orConditions.length > 0 ?
            {
                OR: orConditions
            } :
            {}
    })
    return getPost;
}
const getTutorProfileByIdIntoDb = async (req: Request) => {
    const { id } = req.params
    return await prisma.tutorProfile.findFirst({
        where: {
            id: id as string
        }
    })
}




export const TutorService = {
    createTutorProfileIntoDb, getAllTutorProfileIntoDb, getTutorProfileByIdIntoDb, updateTutorProfileIntoDb
}