import {
  InquiryCreateResponse,
  InquiryCreateResponseSchema,
} from '@/schemas/inquiry';
import {axiosInstance} from '@/services/config/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export const postInquiry = async (
  formData: FormData
): Promise<InquiryCreateResponse> => {
  const {data} = await axiosInstance.post(
    API_ENDPOINTS.inquiry.inquiry,
    formData,
    {
      headers: {
        'Content-Type': undefined,
      },
    }
  );

  return InquiryCreateResponseSchema.parse(data);
};
