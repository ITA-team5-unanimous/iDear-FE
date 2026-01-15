import {
  postInquiry,
  getInquiryList,
  getInquiryDetail,
  patchInquiry,
  deleteInquiry,
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

export const useInquiryUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      inquiryId,
      formData,
    }: {
      inquiryId: number;
      formData: FormData;
    }) => patchInquiry(inquiryId, formData),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['inquiry', 'list'],
      });

      queryClient.invalidateQueries({
        queryKey: ['inquiry', 'detail', variables.inquiryId],
      });
    },
  });
};

export const useInquiryDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (inquiryId: number) => deleteInquiry(inquiryId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['inquiry', 'list'],
      });
    },
  });
};
