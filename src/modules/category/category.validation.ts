import z from "zod";

const create = z.object({
    name:z.string({error:"Category name is required"})
})
const update = z.object({
    name:z.string().optional()
})
export const CategoryValidation = {
    create,update
}