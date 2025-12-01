import z from 'zod';

export const alarmSchema = z.object({
  id: z.number(),
  date: z.string(),
});

export type Alarm = z.infer<typeof alarmSchema>;
