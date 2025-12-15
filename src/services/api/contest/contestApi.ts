import {
  ContestDetailResponse,
  ContestDetailResponseSchema,
  ContestListResponseSchema,
  PopularContestResponse,
  PopularContestResponseSchema,
} from '@/schemas/contests';
import {axiosInstance} from '@/services/config/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export const getPopularContest = async (): Promise<PopularContestResponse> => {
  const {data} = await axiosInstance.get(API_ENDPOINTS.contest.popular);
  return PopularContestResponseSchema.parse(data);
};

export const getContestDetail = async (
  contestId: number
): Promise<ContestDetailResponse> => {
  const {data} = await axiosInstance.get(
    API_ENDPOINTS.contest.detail(contestId)
  );
  return ContestDetailResponseSchema.parse(data);
};

export const getBookmarkedContestList = async ({
  page = 0,
  size = 20,
  sortBy = '',
}: {
  page?: number;
  size?: number;
  sortBy?: string;
}) => {
  const {data} = await axiosInstance.get(API_ENDPOINTS.contest.bookmarked, {
    params: {
      pageable: {page, size, sort: [sortBy]},
      sortBy,
    },
  });
  return ContestListResponseSchema.parse(data);
};

export const deleteBookMarkedContest = async (contestId: number) => {
  const {data} = await axiosInstance.delete(
    API_ENDPOINTS.contest.bookmark(contestId)
  );
  return data;
};

export const postBookMarkedContest = async (contestId: number) => {
  const {data} = await axiosInstance.post(
    API_ENDPOINTS.contest.bookmark(contestId)
  );
  return data;
};

export const getContestList = async ({
  page = 0,
  size = 20,
  sortBy = 'latest',
}: {
  page?: number;
  size?: number;
  sortBy?: string;
}) => {
  const {data} = await axiosInstance.get(API_ENDPOINTS.contest.contests, {
    params: {
      pageable: {page, size, sort: [sortBy]},
      sortBy,
    },
  });
  return ContestListResponseSchema.parse(data);
};

export const getContestSearchResult = async ({
  keyword,
  page = 0,
  size = 20,
  sortBy = 'latest',
}: {
  keyword: string;
  page?: number;
  size?: number;
  sortBy?: string;
}) => {
  const {data} = await axiosInstance.get(API_ENDPOINTS.contest.search, {
    params: {
      keyword,
      pageable: {
        page,
        size,
        sort: [sortBy],
      },
    },
  });

  return ContestListResponseSchema.parse(data);
};
