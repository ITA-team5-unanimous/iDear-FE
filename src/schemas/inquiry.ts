import {apiResponseSchema} from '@/schemas/response';
import {z} from 'zod';
import {INQUIRY_STATUS} from '@/constants/inquiry';

/**
 * 문의사항 api 스키마
 */

export type InquiryStatus = keyof typeof INQUIRY_STATUS;

export const InquiryStatusSchema = z.enum(
  Object.keys(INQUIRY_STATUS) as [InquiryStatus, ...InquiryStatus[]]
);

export const InquiryRegisterDataSchema = z.object({
  id: z.number(),
  category: z.string(),
  problemDescription: z.string(),
  status: InquiryStatusSchema,
  createdAt: z.string(),
});

export const InquirySchema = z.object({
  id: z.number(),
  category: z.string(),
  occurrenceTime: z.string(),
  browser: z.string(),
  device: z.string(),
  problemDescription: z.string(),
  status: InquiryStatusSchema,
  imageUrls: z.array(z.string().optional()),
  answer: z.string().nullable().optional(),
  answeredAt: z.string().nullable().optional(),
  createdAt: z.string(),
});

export const InquiryCreateResponseSchema = apiResponseSchema(z.null());
export const InquiryListResponseSchema = apiResponseSchema(
  z.array(InquiryRegisterDataSchema)
);
export const InquiryDetailResponseSchema = apiResponseSchema(InquirySchema);

export type InquiryDetail = z.infer<typeof InquirySchema>;
export type InquiryForm = z.infer<typeof InquiryRegisterDataSchema>;
export type InquiryCreateResponse = z.infer<typeof InquiryCreateResponseSchema>;
export type InquiryListResponse = z.infer<typeof InquiryListResponseSchema>;
export type InquiryDetailResponse = z.infer<typeof InquiryDetailResponseSchema>;
