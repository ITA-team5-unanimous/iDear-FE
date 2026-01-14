import {
  postInquiry,
  getInquiryList,
  getInquiryDetail,
} from '@/services/api/inquiry/inquiryApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
export const useInquiryCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => postInquiry(formData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['inquiry', 'list'],
      });
    },
  });
};

export const useInquiryList = () => {
  return useQuery({
    queryKey: ['inquiry', 'list'],
    queryFn: getInquiryList,
    select: (response) => response.data,
  });
};

export const useInquiryDetail = (inquiryId: number) => {
  return useQuery({
    queryKey: ['inquiry', 'detail', inquiryId],
    queryFn: () => getInquiryDetail(inquiryId),
    select: (response) => response.data,
  });
};
