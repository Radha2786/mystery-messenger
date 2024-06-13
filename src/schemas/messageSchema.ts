import {z} from 'zod'

export const acceptMessageSchema = z.object({
    content : z.string().min(10,{message:'Content must be atleast 10 characters'}).max(300,{message:'Content must be at most 300 characters'}),
});