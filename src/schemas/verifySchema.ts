import {z} from 'zod'

export const acceptMessageSchema = z.object({
    code : z.string().length(6,{message:'Verification Code must be 6 digits long'}),
})