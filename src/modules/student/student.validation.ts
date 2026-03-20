import z from "zod";

const update = z.object({
    name: z.string(),
    image: z.string(),

})

export const StudentValidation = {
    update
}