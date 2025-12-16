export const SORT_OPTIONS = [
  {key: 'latest', label: '최신순'},
  {key: 'deadline', label: '마감임박순'},
  {key: 'popular', label: '인기순'},
] as const;

export type SortType = (typeof SORT_OPTIONS)[number]['key'];
