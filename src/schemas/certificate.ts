import z from 'zod';

export const certificateSchema = z.object({
  submission: z.string(),
  title: z.string(),
  submissionTime: z.string(),
  hash: z.string(),

  network: z.string(),
  contractAddress: z.string(),
  transactionHash: z.string(),
  blockNumber: z.number(),
  onChainTimeStamp: z.string(),

  certificateId: z.number(),
  certificateTime: z.string(),
});

export type certificateType = z.infer<typeof certificateSchema>;
