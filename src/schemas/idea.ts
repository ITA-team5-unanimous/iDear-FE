import z from 'zod';

/**
 * 첨부파일 관련 스키마
 */
export const attachmentSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  size: z.number().optional(),
});

/**
 * 아이디어 관련 스키마
 */
export const ideaSchema = z.object({
  id: z.number(),
  title: z.string(),
  subtitle: z.string(),
  hostingOrganization: z.string(),
  d_day: z.number(),
  startPeriod: z.string(),
  endPeriod: z.string(),
  registerDate: z.string(),
  description: z.string(),
  imageUrl: z.string().url().nullable(),
  attachments: z.array(attachmentSchema).optional(),
});
export type Idea = z.infer<typeof ideaSchema>;
