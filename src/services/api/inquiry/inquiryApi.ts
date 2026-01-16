import {
  InquiryCreateResponse,
  InquiryCreateResponseSchema,
  InquiryListResponse,
  InquiryListResponseSchema,
  InquiryDetailResponse,
  InquiryDetailResponseSchema,
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

export const getInquiryList = async (): Promise<InquiryListResponse> => {
  const {data} = await axiosInstance.get(API_ENDPOINTS.inquiry.inquiry);

  return InquiryListResponseSchema.parse(data);
};

export const getInquiryDetail = async (
  inquiryId: number
): Promise<InquiryDetailResponse> => {
  const {data} = await axiosInstance.get(
    API_ENDPOINTS.inquiry.detail(inquiryId)
  );

  return InquiryDetailResponseSchema.parse(data);
};

export const patchInquiry = async (
  inquiryId: number,
  formData: FormData
): Promise<InquiryCreateResponse> => {
  const {data} = await axiosInstance.patch(
    API_ENDPOINTS.inquiry.detail(inquiryId),
    formData,
    {
      headers: {
        'Content-Type': undefined,
      },
    }
  );

  return InquiryCreateResponseSchema.parse(data);
};

export const deleteInquiry = async (
  inquiryId: number
): Promise<InquiryCreateResponse> => {
  const {data} = await axiosInstance.delete(
    API_ENDPOINTS.inquiry.detail(inquiryId)
  );

  return InquiryCreateResponseSchema.parse(data);
};
