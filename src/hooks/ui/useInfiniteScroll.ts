import {useEffect, useRef} from 'react';

interface UseInfiniteScrollParams<TPage, TItem> {
  data: {pages: TPage[]} | undefined;
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
  selectItems: (page: TPage) => TItem[];
  threshold?: number;
}

export const useInfiniteScroll = <TPage, TItem>({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  selectItems,
  threshold = 1,
}: UseInfiniteScrollParams<TPage, TItem>) => {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const items = data?.pages.flatMap((page) => selectItems(page)) ?? [];

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      },
      {threshold}
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, threshold]);

  return {
    items,
    loadMoreRef,
  };
};
