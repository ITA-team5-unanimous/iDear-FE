import {getUnreadAlerts, postAlertRead} from '@/services/api/alert/alertApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export const useUnreadAlerts = () =>
  useQuery({
    queryKey: ['alerts', 'unread'],
    queryFn: async () => {
      const res = await getUnreadAlerts();
      return res;
    },
  });

export const useReadAlert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (alertId: number) => postAlertRead(alertId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['alerts', 'unread'],
      });
    },
  });
};
