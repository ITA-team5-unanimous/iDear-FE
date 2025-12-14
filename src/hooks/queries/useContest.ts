import {
  deleteBookMarkedContest,
  getBookmarkedContestList,
  getContestDetail,
  getContestList,
  getPopularContest,
  postBookMarkedContest,
} from '@/services/api/contest/contestApi';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

type SortType = 'latest' | 'popular' | 'deadline';

export const useContestList = (
  mode: 'all' | 'bookmarked',
  sortBy: SortType
) => {
  return useInfiniteQuery({
    queryKey: ['contestList', mode, sortBy],
    queryFn: async ({pageParam = 0}) => {
      if (mode === 'bookmarked') {
        const response = await getBookmarkedContestList({
          page: pageParam,
          size: 10,
          sortBy,
        });
        return response.data;
      }

      const response = await getContestList({
        page: pageParam,
        size: 10,
        sortBy,
      });
      return response.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length;
      return nextPage < lastPage.totalPages ? nextPage : undefined;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const usePopularContests = () =>
  useQuery({
    queryKey: ['popularContests'],
    queryFn: getPopularContest,
    staleTime: 1000 * 60 * 5,
  });

export const useContestDetail = (contestId: number) => {
  return useQuery({
    queryKey: ['contestDetail', contestId],
    queryFn: async () => {
      const response = await getContestDetail(contestId);
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useAddBookMarkContest = (contestId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => postBookMarkedContest(contestId),
    onSuccess: () => {
      queryClient.refetchQueries({queryKey: ['contestDetail', contestId]});
      queryClient.refetchQueries({queryKey: ['contestList']});
    },
  });

  return mutation;
};

export const useDeleteBookMarkContest = (contestId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => deleteBookMarkedContest(contestId),
    onSuccess: () => {
      queryClient.refetchQueries({queryKey: ['contestDetail', contestId]});
      queryClient.refetchQueries({queryKey: ['contestList']});
    },
  });
  return mutation;
};
