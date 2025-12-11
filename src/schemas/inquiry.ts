import z from 'zod';
import {INQUIRY_STATUS} from '@/constants/inquiry';

const validStatuses = Object.values(INQUIRY_STATUS);

export const attachmentSchema = z.object({
  id: z.string(),
  files: z.array(z.instanceof(File)).optional(),
});

/**
 * 문의사항 관련 스키마
 */
export const inquirySchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.enum([validStatuses[0], ...validStatuses.slice(1)]),
  occurredAt: z.string(),
  browser: z.enum(['chrome', 'safari', 'edge']).or(z.literal('')),
  device: z.enum(['window', 'mac', 'iphone', 'android']).or(z.literal('')),
  problemDescription: z.string(),
  attachments: z.array(attachmentSchema).optional(),
});

export type Inquiry = z.infer<typeof inquirySchema>;
export type attachmentSchema = z.infer<typeof attachmentSchema>;
