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

export const VersionSchema = z.object({
  version: z.number(),
  tags: z.array(z.string()).optional(),
  ideaTitle: z.string(),
  registerDate: z.string(),
  description: z.string(),
  imageUrl: z.string().url().nullable(),
  attachments: z.array(attachmentSchema).optional(),
});

export const ideaSchema = z.object({
  id: z.number(),
  title: z.string(),
  host: z.string(),
  d_day: z.number(),
  registerDate: z.string(),
});

export const ideaDetailSchema = z.object({
  idea: ideaSchema,
  versions: z.array(VersionSchema),
});

export type Version = z.infer<typeof VersionSchema>;
export type Idea = z.infer<typeof ideaSchema>;
export type IdeaDetail = z.infer<typeof ideaDetailSchema>;
