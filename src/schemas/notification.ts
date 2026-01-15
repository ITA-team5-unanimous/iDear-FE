import z from 'zod';

export const UpdateNotificationSettingsRequestSchema = z.object({
  push: z.boolean(),
  email: z.boolean(),
});

export type UpdateNotificationSettingsRequest = z.infer<
  typeof UpdateNotificationSettingsRequestSchema
>;
