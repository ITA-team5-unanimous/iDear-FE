import {z} from 'zod';

/**
 * 공모전 관련 스키마
 * 추후 api 응답 데이터에 맞게 리팩토링 필요
 */

// --- 공통 Response Wrapper ---
export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    status: z.string(),
    code: z.string(),
    message: z.string(),
    data: dataSchema,
  });

export const PopularContestSchema = z.object({
  contestId: z.number(),
  title: z.string(),
  imageUrl: z.string().nullish(),
});

export const PopularContestResponseSchema = apiResponseSchema(
  z.array(PopularContestSchema)
);

export const ContestDetailSchema = z.object({
  contestId: z.number().int(),
  title: z.string(),
  host: z.string(),
  category: z.string(),
  imageUrl: z.string().nullish(),
  startDate: z.string(),
  deadline: z.string(),
  reward: z.string(),
  description: z.string().nullish(),
  homepageUrl: z.string().nullish(),
  bookmarked: z.boolean(),
  dday: z.number().int(),
});

export const ContestDetailResponseSchema =
  apiResponseSchema(ContestDetailSchema);

export const ContestCardSchema = z.object({
  contestId: z.number(),
  title: z.string(),
  category: z.string(),
  host: z.string(),
  imageUrl: z.string().nullish(),
  bookmarked: z.boolean(),
  dday: z.number(),
});

export const ContestListSchema = z.object({
  totalElements: z.number(),
  totalPages: z.number(),
  content: z.array(ContestCardSchema),
});

export const ContestListResponseSchema = apiResponseSchema(ContestListSchema);

export type PopularContestType = z.infer<typeof PopularContestSchema>;
export type PopularContestResponse = z.infer<
  typeof PopularContestResponseSchema
>;
export type ContestDetailType = z.infer<typeof ContestDetailSchema>;
export type ContestDetailResponse = z.infer<typeof ContestDetailResponseSchema>;
export type ContestCardType = z.infer<typeof ContestCardSchema>;
export type ContestListResponse = z.infer<typeof ContestListResponseSchema>;
