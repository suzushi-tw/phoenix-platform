import { z } from "zod";

export const UsernameValidator = z.object({
    name: z.string().min(3).max(32).regex(/^[\u4e00-\u9fa5_a-za-z0-9]+$/),
})

export type UsernameRequest = z.infer<typeof UsernameValidator>