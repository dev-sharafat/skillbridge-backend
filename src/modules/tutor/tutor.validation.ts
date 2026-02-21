import z from "zod";

const create = z.object({
    bio: z.string().optional(),
    skills: z.array(z.string()),
    pricePerHour: z.number(),
    rating: z.number(),
    availability: z.any(),
    // userId:z.string()

})
const update = z.object({
    bio: z.string().optional(),
    skills: z.array(z.string()).optional(),
    pricePerHour: z.number().optional(),
    rating: z.number().optional(),
    availability: z.any().optional()

})

export const TutorValidation ={
    create,update
}