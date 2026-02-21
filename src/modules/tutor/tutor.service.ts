import { Request } from "express"
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
        categoryId
    } = req.body

    if (!categoryId) {
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
            category: {
                connect: { id: categoryId }
            }
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
        categoryId
    } = req.body

    // 1️⃣ Check tutor profile exists
    const existingTutor = await prisma.tutorProfile.findUnique({
        where: { userId }
    })

    if (!existingTutor) {
        throw new AppError("Tutor profile not found", 404)
    }

    // 2️⃣ If category change requested → check exists
    if (categoryId) {
        const categoryExists = await prisma.category.findUnique({
            where: { id: categoryId }
        })

        if (!categoryExists) {
            throw new AppError("Category not found", 404)
        }
    }

    // 3️⃣ Prepare update payload (only provided fields)
    const updateData: any = {}

    if (bio !== undefined) updateData.bio = bio
    if (skills !== undefined) updateData.skills = skills
    if (pricePerHour !== undefined) updateData.pricePerHour = pricePerHour
    if (availability !== undefined) updateData.availability = availability

    if (categoryId) {
        updateData.category = {
            connect: { id: categoryId }
        }
    }

    // 4️⃣ Update profile
    const result = await prisma.tutorProfile.update({
        where: { userId },
        data: updateData
    })

    return result
}


const getAllTutorProfileIntoDb = async () => {
    return await prisma.tutorProfile.findMany()
}
const getTutorProfileByIdIntoDb = async (req: Request) => {
    return await prisma.tutorProfile.findFirst({
        where: {
            id: req?.body?.id
        }
    })
}




export const TutorService = {
    createTutorProfileIntoDb, getAllTutorProfileIntoDb, getTutorProfileByIdIntoDb,updateTutorProfileIntoDb
}