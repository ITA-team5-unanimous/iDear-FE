import {
  PublicKeyRequestSchema,
  PublicKeyResponseSchema,
  UserResponse,
  UserResponseSchema,
} from '@/schemas/user';
import {axiosInstance} from '@/services/config/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export const getUsers = async (): Promise<UserResponse> => {
  const {data} = await axiosInstance.get(API_ENDPOINTS.user.users);
  return UserResponseSchema.parse(data);
};

export const postPublicKey = async (publicKey: string): Promise<void> => {
  const body = PublicKeyRequestSchema.parse({publicKey});

  const response = await axiosInstance.post(
    `${API_ENDPOINTS.user.publicKey}`,
    body
  );
  response.data && PublicKeyResponseSchema.parse(response.data);
};

export const deleteUser = async (): Promise<void> => {
  await axiosInstance.delete(API_ENDPOINTS.user.users);
};
