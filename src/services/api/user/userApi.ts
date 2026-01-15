import {UpdateNotificationSettingsRequest} from '@/schemas/notification';
import {
  ProfileImageResponseSchema,
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

export const postProfileImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const {data} = await axiosInstance.post(
    API_ENDPOINTS.user.profileImage,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return ProfileImageResponseSchema.parse(data);
};

export const patchNotificationSettings = async (
  body: UpdateNotificationSettingsRequest
) => {
  const {data} = await axiosInstance.patch(
    API_ENDPOINTS.user.notificationSettings,
    body
  );

  return data;
};
