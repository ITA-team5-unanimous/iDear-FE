'use client';

import {ContestDetailDescription} from '@/app/contest/[id]/_components/ContestDetailDescription';
import {ContestDetailHeader} from '@/app/contest/[id]/_components/ContestDetailHeader';
import {ContestDetailMeta} from '@/app/contest/[id]/_components/ContestDetailMeta';
import {ContestDetailSkeleton} from '@/app/contest/[id]/_components/skeletons/ContestDetailSkeleton';
import {ROUTES} from '@/constants/routes';
import {
  useAddBookMarkContest,
  useContestDetail,
  useDeleteBookMarkContest,
} from '@/hooks/queries/useContest';
import {useScrollToTop} from '@/hooks/ui/useScrollToTop';
import {useParams, useRouter} from 'next/navigation';

export const ContestDetailClient = () => {
  useScrollToTop();

  const {id} = useParams();
  const {data: contest, isLoading, isError} = useContestDetail(Number(id));
  const router = useRouter();

  const addBookmark = useAddBookMarkContest(Number(id));
  const deleteBookmark = useDeleteBookMarkContest(Number(id));

  if (isLoading) return <ContestDetailSkeleton />;
  if (isError || !contest) return <p>공모전을 찾을 수 없습니다.</p>;

  const handleGoSiteClick = () => {
    if (!contest.homepageUrl) {
      alert('웹사이트 링크가 제공되지 않았습니다.');
      return;
    }
    window.open(contest.homepageUrl, '_blank');
  };

  const handleRegisterClick = () => {
    router.push(`${ROUTES.REGISTER}/${contest.contestId}`);
  };

  const handleShareClick = async () => {
    const currentUrl = window.location.origin + window.location.pathname;

    if (navigator.share) {
      try {
        await navigator.share({
          title: contest.title,
          url: currentUrl,
        });
      } catch {
        alert('공유에 실패했습니다.');
      }
    } else {
      // Web Share API 미지원 클립보드 복사
      try {
        await navigator.clipboard.writeText(currentUrl);
        alert('URL이 클립보드에 복사되었습니다.');
      } catch {
        alert('공유에 실패했습니다.');
      }
    }
  };

  return (
    <div className='relative flex flex-col items-center px-40 py-[54px]'>
      <ContestDetailHeader title={contest.title} />

      <ContestDetailMeta
        contest={contest}
        onToggleBookmark={() =>
          contest.bookmarked ? deleteBookmark.mutate() : addBookmark.mutate()
        }
        onShare={handleShareClick}
        onGoSite={handleGoSiteClick}
        onRegister={handleRegisterClick}
      />

      <ContestDetailDescription description={contest.description} />
    </div>
  );
};
