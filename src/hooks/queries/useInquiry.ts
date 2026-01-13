import {postInquiry} from '@/services/api/inquiry/inquiryApi';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useInquiryCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => postInquiry(formData),

    onSuccess: () => {},
  });
};
