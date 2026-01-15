// src/schemas/user-email.ts
import {apiResponseSchema} from '@/schemas/response';
import {z} from 'zod';

/** 이메일 변경 */
export const changeEmailRequestSchema = z.object({
  email: z.string(),
});

export const changeEmailResponseSchema = apiResponseSchema(
  changeEmailRequestSchema
);

/** 인증 코드 전송 */
export const sendEmailVerificationRequestSchema = z.object({
  email: z.string(),
});

export const sendEmailVerificationResponseSchema = apiResponseSchema(
  sendEmailVerificationRequestSchema
);

/** 인증 코드 검증 */
export const verifyEmailCodeRequestSchema = z.object({
  email: z.string(),
  code: z.string(),
});

export const verifyEmailCodeResponseSchema = apiResponseSchema(
  verifyEmailCodeRequestSchema
);

export type VerifyEmailCodeRequest = z.infer<
  typeof verifyEmailCodeRequestSchema
>;
export type VerifyEmailCodeResponse = z.infer<
  typeof verifyEmailCodeResponseSchema
>;
export type SendEmailVerificationRequest = z.infer<
  typeof sendEmailVerificationRequestSchema
>;
export type SendEmailVerificationResponse = z.infer<
  typeof sendEmailVerificationResponseSchema
>;
export type ChangeEmailRequest = z.infer<typeof changeEmailRequestSchema>;
export type ChangeEmailResponse = z.infer<typeof changeEmailResponseSchema>;
