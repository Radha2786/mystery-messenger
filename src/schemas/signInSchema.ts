import {z} from 'zod'

export const acceptMessageSchema = z.object({
    identifier: z.string(),
    password:z.string(), 
});