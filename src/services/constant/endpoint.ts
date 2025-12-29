export const API_ENDPOINTS = {
  auth: {
    reissue: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/reissue`,
  },
  contest: {
    contests: `/contests`,
    popular: `/contests/popular`,
    detail: (contestId: number) => `/contests/${contestId}`,
    bookmark: (contestId: number) => `/contests/${contestId}/bookmark`,
    bookmarked: `/contests/bookmarks`,
    search: `contests/search`,
  },
  user: {
    users: `/users`,
    userName: `/users/name`,
    publicKey: `/users/public-key`,
  },
};
