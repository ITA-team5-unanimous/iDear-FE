import {
  postIdeaRegister,
  getIdeas,
  getIdeaDetail,
} from '@/services/api/idea/ideaApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export const useIdeaRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => postIdeaRegister(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['ideasList']});
    },
  });
};

export const useIdeaList = () => {
  return useQuery({
    queryKey: ['ideasList'],
    queryFn: getIdeas,
    select: (response) => response.data,
    staleTime: 1000 * 60 * 5,
  });
};

export const useIdeaDetail = (ideaId: number) => {
  return useQuery({
    queryKey: ['ideaDetail', ideaId],
    queryFn: () => getIdeaDetail(ideaId),
    select: (response) => response.data,
    staleTime: 1000 * 60 * 5,
  });
};
