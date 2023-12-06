import { z } from "zod";

export const subredditValidator = z.object({
  name: z.string().min(3).max(21).regex(/^[\u4e00-\u9fa5_a-za-z0-9]+$/),
});

export const subredditSubscriptionValidator = z.object({
  subredditId: z.string(),
});

export type CreateSubredditPayload = z.infer<typeof subredditValidator>;
export type SubscribeToSubredditPayload = z.infer<
  typeof subredditSubscriptionValidator
>;
