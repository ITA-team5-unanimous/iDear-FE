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
    profileImage: '/users/profile-image',
  },
  idea: {
    register: `/ideas`,
    getIdeas: `/ideas`,
    signatures: (ideaId: number) => `/ideas/${ideaId}/signatures`,
    detail: (ideaId: number) => `/ideas/${ideaId}`,
    tags: (versionId: number) => `/idea-versions/${versionId}/tags`,
    edit: (ideaId: number) => `/ideas/${ideaId}`,
    certificate: (ideaId: number) => `/ideas/${ideaId}/certificate`,
  },
  alert: {
    read: (alertId: number) => `/alerts/${alertId}/read`,
    unread: '/alerts/unread',
  },
};
