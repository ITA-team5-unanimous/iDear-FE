import {apiResponseSchema} from '@/schemas/response';
import {z} from 'zod';
import {IdeaItem} from '@/app/idea/_components/IdeaItem';

/**
 * 아이디어 api 스키마
 */
export const IdeaImageSchema = z.object({
  ideaImageId: z.number(),
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

export const IdeaVersionTagSchema = z.object({
  ideaVersionTagId: z.number(),
  tag: z.string().max(50),
  addedAt: z.string(),
});

export const IdeaDetailFileSchema = z.object({
  ideaFileId: z.number(),
  fileName: z.string(),
  filePath: z.string(),
});

export const IdeaVersionDetailSchema = z.object({
  ideaVersionId: z.number(),
  versionNumber: z.number(),
  title: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  githubUrl: z.string().nullable(),
  figmaUrl: z.string().nullable(),
  requestedAt: z.string(),
  files: z.array(IdeaDetailFileSchema),
  images: z.array(IdeaImageSchema),
  tags: z.array(IdeaVersionTagSchema),
});

export const IdeaDetailDataSchema = z.object({
  ideaId: z.number(),
  contestId: z.number(),
  contestTitle: z.string(),
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
  contestTitle: z.string(),
  ideaTitle: z.string(),
  host: z.string().nullable(),
  dday: z.number().nullable(),
  contestImageUrl: z.string().nullable(),
  requestedAt: z.string(),
  images: z.array(IdeaImageSchema),
});

export const IdeaPageDataSchema = z.object({
  content: z.array(IdeaItemSchema),
  totalElements: z.number(),
  totalPages: z.number(),
  number: z.number(),
  size: z.number(),
  first: z.boolean(),
  last: z.boolean(),
  numberOfElements: z.number(),
  empty: z.boolean(),
});

export const IdeaUpdateRequestSchema = z.object({
  deleteFileIds: z.array(z.number()).optional(),
  deleteImageIds: z.array(z.number()).optional(),
  title: z.string(),
  shortDescription: z.string(),
  description: z.string().min(1),
  githubUrl: z.string().nullable().optional(),
  figmaUrl: z.string().nullable().optional(),
});

export const IdeaUpdateResponseDataSchema = z.object({
  ideaId: z.number(),
  versionNumber: z.number(),
  updatedAt: z.string(),
  files: z.array(IdeaFileSchema),
});

export const IdeaListResponseSchema = apiResponseSchema(IdeaPageDataSchema);
export const IdeaRegisterResponseSchema = apiResponseSchema(
  IdeaRegisterDataSchema
);
export const IdeaSignatureResponseSchema = apiResponseSchema(
  IdeaSignatureDataSchema
);
export const IdeaDetailResponseSchema = apiResponseSchema(IdeaDetailDataSchema);
export const IdeaUpdateResponseSchema = apiResponseSchema(
  IdeaUpdateResponseDataSchema
);
export const IdeaTagCreateResponseSchema =
  apiResponseSchema(IdeaVersionTagSchema);

export type IdeaListResponse = z.infer<typeof IdeaListResponseSchema>;
export type IdeaFile = z.infer<typeof IdeaFileSchema>;
export type IdeaRegisterResponse = z.infer<typeof IdeaRegisterResponseSchema>;
export type IdeaSignatureResponse = z.infer<typeof IdeaSignatureResponseSchema>;
export type IdeaItem = z.infer<typeof IdeaItemSchema>;
export type IdeaDetail = z.infer<typeof IdeaDetailDataSchema>;
export type IdeaVersionDetail = z.infer<typeof IdeaVersionDetailSchema>;
export type IdeaDetailResponse = z.infer<typeof IdeaDetailResponseSchema>;
export type IdeaVersionTag = z.infer<typeof IdeaVersionTagSchema>;
export type IdeaTagCreateResponse = z.infer<typeof IdeaTagCreateResponseSchema>;
export type IdeaUpdateResponse = z.infer<typeof IdeaUpdateResponseSchema>;

/**
 * 첨부파일 관련 스키마
 */
export const attachmentSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  size: z.number().optional(),
});

export type Attachment = z.infer<typeof attachmentSchema>;
