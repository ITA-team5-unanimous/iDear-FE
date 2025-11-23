import {z} from 'zod';

export const fileBoxSchema = z.object({
  id: z.number(),
  files: z.array(z.instanceof(File)),
});

export type FileBoxType = z.infer<typeof fileBoxSchema>;
