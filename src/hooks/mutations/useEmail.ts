import {
  changeEmail,
  sendEmailVerification,
  verifyEmailCode,
} from '@/services/api/user/emailApi';
import {useMutation} from '@tanstack/react-query';

export const useSendEmailVerification = () =>
  useMutation({
    mutationFn: sendEmailVerification,
  });

export const useVerifyEmailCode = () =>
  useMutation({
    mutationFn: verifyEmailCode,
  });

export const useChangeEmail = () =>
  useMutation({
    mutationFn: changeEmail,
  });
