import {
  postIdeaRegister,
  getIdeas,
  getIdeaDetail,
  postIdeaVersionTag,
  patchIdea,
  deleteIdea,
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

export const useIdeaList = (page: number) => {
  return useQuery({
    queryKey: ['ideasList', page],
    queryFn: () => getIdeas(page),
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

export const useAddIdeaTag = (ideaId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({versionId, tag}: {versionId: number; tag: string}) =>
      postIdeaVersionTag(versionId, tag),

    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['ideaDetail', ideaId]});
    },
  });
};

export const useIdeaUpdate = (ideaId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => patchIdea(ideaId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['ideaDetail', ideaId]});
      queryClient.invalidateQueries({queryKey: ['ideasList']});
    },
  });
};

export const useDeleteIdea = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (ideaId: number) => deleteIdea(ideaId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['ideasList']});
    },
  });
};
