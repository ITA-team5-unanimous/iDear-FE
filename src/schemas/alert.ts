import {z} from 'zod';

export const AlertSchema = z.object({
  alertId: z.number(),
  alertType: z.string(),
  content: z.string(),
  ideaId: z.number().nullable().optional(),
  ideaFileId: z.number().nullable().optional(),
  createdAt: z.string(),
});

export const GetUnreadAlertsResponseSchema = z.object({
  status: z.string(),
  code: z.string(),
  message: z.string(),
  data: z.array(AlertSchema),
});

export type GetUnreadAlertsResponse = z.infer<
  typeof GetUnreadAlertsResponseSchema
>;
