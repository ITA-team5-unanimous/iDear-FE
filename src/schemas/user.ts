import {apiResponseSchema} from '@/schemas/response';
import z from 'zod';

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  provider: z.enum(['kakao', 'google', 'naver', 'local']),
  publicKey: z.string().nullable(),
});

export const UserResponseSchema = apiResponseSchema(UserSchema);

export const PublicKeyRequestSchema = z.object({
  publicKey: z.string(),
});
export const PublicKeyResponseSchema = z.object({}).passthrough();

export type UserType = z.infer<typeof UserSchema>;
export type UserResponse = z.infer<typeof UserResponseSchema>;
export type RegisterPublicKeyRequest = z.infer<typeof PublicKeyRequestSchema>;
