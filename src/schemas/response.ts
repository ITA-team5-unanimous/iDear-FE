import z from 'zod';

// --- 공통 Response Wrapper ---
export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    status: z.string(),
    code: z.string(),
    message: z.string(),
    data: dataSchema,
  });
