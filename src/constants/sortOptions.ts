export interface SortOption {
  key: string;
  label: string;
}

export const SORT_OPTIONS: SortOption[] = [
  {key: 'latest', label: '최신순'},
  {key: 'deadline', label: '마감임박순'},
  {key: 'popular', label: '인기순'},
];
