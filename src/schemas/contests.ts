import {z} from 'zod';

/**
 * 공모전 관련 스키마
 */
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

export type ContestDetail = z.infer<typeof contestDetailSchema>;
