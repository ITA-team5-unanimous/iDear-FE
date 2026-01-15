import {
  ChangeEmailRequest,
  ChangeEmailResponse,
  SendEmailVerificationRequest,
  SendEmailVerificationResponse,
  VerifyEmailCodeRequest,
  VerifyEmailCodeResponse,
} from '@/schemas/email';
import {axiosInstance} from '@/services/config/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

/** 이메일 변경 */
export const changeEmail = async (
  body: ChangeEmailRequest
): Promise<ChangeEmailResponse> => {
  const {data} = await axiosInstance.patch(API_ENDPOINTS.user.email, body);
  return data;
};

/** 이메일 인증 코드 전송 */
export const sendEmailVerification = async (
  body: SendEmailVerificationRequest
): Promise<SendEmailVerificationResponse> => {
  const {data} = await axiosInstance.post(
    API_ENDPOINTS.user.emailVerification,
    body
  );
  return data;
};

/** 이메일 인증 코드 검증 */
export const verifyEmailCode = async (
  body: VerifyEmailCodeRequest
): Promise<VerifyEmailCodeResponse> => {
  const {data} = await axiosInstance.post(API_ENDPOINTS.user.emailVerify, body);
  return data;
};
