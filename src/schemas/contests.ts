import {z} from 'zod';

/**
 * 공모전 관련 스키마
 * 추후 api 응답 데이터에 맞게 리팩토링 필요
 */

export const contestSchema = z.object({
  id: z.number(),
  title: z.string(),
  hostingOrganization: z.string(),
  imageUrl: z.string(),
  d_day: z.number(),
});

export const contestDetailSchema = z.object({
  id: z.number(),
  title: z.string(),
  startPeriod: z.string(),
  endPeriod: z.string(),
  hostingOrganization: z.string(),
  managementOrganization: z.string(),
  firstPrize: z.number(),
  totalPrize: z.string(),
  description: z.string(),
});

export type Contest = z.infer<typeof contestSchema>;
export type ContestDetail = z.infer<typeof contestDetailSchema>;
