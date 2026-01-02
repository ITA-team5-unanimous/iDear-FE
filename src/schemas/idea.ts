import {apiResponseSchema} from '@/schemas/response';
import {z} from 'zod';
import {IdeaItem} from '@/app/idea/_components/IdeaItem';

/**
 * 아이디어 api 스키마
 */
export const IdeaImageSchema = z.object({
  fileName: z.string(),
  filePath: z.string(),
});

export const IdeaFileSchema = z.object({
  ideaFileId: z.number(),
  fileName: z.string(),
  fileHash: z.string(),
  timestamp: z.number(),
});

export const IdeaRegisterDataSchema = z.object({
  ideaId: z.number(),
  requestedAt: z.string(),
  files: z.array(IdeaFileSchema),
});

export const RegisteredFilesSchema = z.object({
  ideaFileId: z.number(),
  fileName: z.string(),
  fileHash: z.string(),
  salt: z.string(),
  commit: z.string(),
});

export const IdeaDetailFileSchema = z.object({
  fileName: z.string(),
  filePath: z.string(),
  status: z.string(),
  txHash: z.string().nullable(),
});

export const IdeaVersionDetailSchema = z.object({
  ideaVersionId: z.number(),
  versionNumber: z.number(),
  shortDescription: z.string(),
  description: z.string(),
  githubUrl: z.string().nullable(),
  figmaUrl: z.string().nullable(),
  requestedAt: z.string(),
  files: z.array(IdeaDetailFileSchema),
  images: z.array(IdeaImageSchema),
});

export const IdeaDetailDataSchema = z.object({
  ideaId: z.number(),
  title: z.string(),
  contestId: z.number().nullable(),
  requestedAt: z.string(),
  versions: z.array(IdeaVersionDetailSchema),
});

export const IdeaSignatureDataSchema = z.object({
  ideaId: z.number(),
  registeredFiles: z.array(RegisteredFilesSchema),
  totalFiles: z.number(),
});

export const IdeaItemSchema = z.object({
  ideaId: z.number(),
  ideaVersionId: z.number(),
  versionNumber: z.number(),
  title: z.string(),
  host: z.string(),
  dday: z.number(),
  shortDescription: z.string(),
  requestedAt: z.string(),
  githubUrl: z.string().nullable(),
  figmaUrl: z.string().nullable(),
  images: z.array(IdeaImageSchema),
});

export const IdeaListResponseSchema = apiResponseSchema(
  z.array(IdeaItemSchema)
);
export const IdeaRegisterResponseSchema = apiResponseSchema(
  IdeaRegisterDataSchema
);
export const IdeaSignatureResponseSchema = apiResponseSchema(
  IdeaSignatureDataSchema
);
export const IdeaDetailResponseSchema = apiResponseSchema(IdeaDetailDataSchema);

export type IdeaFile = z.infer<typeof IdeaFileSchema>;
export type IdeaRegisterResponse = z.infer<typeof IdeaRegisterResponseSchema>;
export type IdeaSignatureResponse = z.infer<typeof IdeaSignatureResponseSchema>;
export type IdeaItem = z.infer<typeof IdeaItemSchema>;
export type IdeaListResponse = z.infer<typeof IdeaListResponseSchema>;
export type IdeaDetail = z.infer<typeof IdeaDetailDataSchema>;
export type IdeaVersionDetail = z.infer<typeof IdeaVersionDetailSchema>;
export type IdeaDetailResponse = z.infer<typeof IdeaDetailResponseSchema>;

/**
 * 첨부파일 관련 스키마
 */
export const attachmentSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  size: z.number().optional(),
});

export type Attachment = z.infer<typeof attachmentSchema>;
