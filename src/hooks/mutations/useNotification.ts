import {patchNotificationSettings} from '@/services/api/user/userApi';
import {useMutation} from '@tanstack/react-query';

export const useUpdateNotificationSettings = () => {
  return useMutation({
    mutationFn: patchNotificationSettings,
  });
};
