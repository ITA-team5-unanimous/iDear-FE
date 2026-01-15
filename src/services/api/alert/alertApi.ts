import {
  GetUnreadAlertsResponse,
  GetUnreadAlertsResponseSchema,
} from '@/schemas/alert';
import {axiosInstance} from '@/services/config/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export const getUnreadAlerts = async (): Promise<GetUnreadAlertsResponse> => {
  const {data} = await axiosInstance.get(API_ENDPOINTS.alert.unread);
  return GetUnreadAlertsResponseSchema.parse(data);
};

export const postAlertRead = async (alertId: number) => {
  const {data} = await axiosInstance.post(API_ENDPOINTS.alert.read(alertId));
  return data;
};
