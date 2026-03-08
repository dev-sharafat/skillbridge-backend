import z from "zod";

const create = z.object({
    scheduledDate:z.string(),
    status:z.string(),
    tutorId:z.string()
})

const update = z.object({
    scheduleDate: z.string(),
    status:z.string,

})

export const BookingValidation = {
    create,update
}