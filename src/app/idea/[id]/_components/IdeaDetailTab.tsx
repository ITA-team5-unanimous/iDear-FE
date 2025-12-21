'use client';

import {IdeaCategoryButton} from '@/app/idea/[id]/_components/IdeaCategoryButton';
import GlobalButton from '@/components/buttons/GlobalButton';
import {ROUTES} from '@/constants/routes';
import {useParams, useRouter, useSearchParams} from 'next/navigation';
import Download from '@/assets/idea/download.svg';

type IdeaDetailTab = 'version' | 'timeline';

export const IdeaDetailTab = () => {
  const {id} = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get('tab');

  const currentTab: IdeaDetailTab =
    tabParam === 'timeline' ? 'timeline' : 'version';

  const handleChangeTab = (tab: IdeaDetailTab) => {
    if (tab === 'version') {
      router.push(`${ROUTES.IDEA}/${id}`);
    } else {
      router.push(`${ROUTES.IDEA}/${id}?tab=timeline`);
    }
  };
  const handleDownloadCertificate = () => {};

  return (
    <div className='flex justify-between'>
      <div className='flex flex-row gap-6'>
        <IdeaCategoryButton
          text='버전 히스토리'
          isSelected={currentTab === 'version'}
          onClick={() => handleChangeTab('version')}
        />
        <IdeaCategoryButton
          text='타임라인'
          isSelected={currentTab === 'timeline'}
          onClick={() => handleChangeTab('timeline')}
        />
      </div>
      <GlobalButton
        onClick={handleDownloadCertificate}
        text='확인증 다운받기'
        icon={<Download />}
      />
    </div>
  );
};
