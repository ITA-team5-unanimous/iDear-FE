'use client';

import {IdeaVersionHistory} from '@/app/idea/[id]/_components/IdeaVersionHistory';
import {IdeaDetail} from '@/schemas/idea';
import {IdeaDetailHeader} from '@/app/idea/[id]/_components/IdeaDetailHeader';
import {IdeaDetailTab} from '@/app/idea/[id]/_components/IdeaDetailTab';
import GlobalButton from '@/components/buttons/GlobalButton';
import {useIdeaDetailStore} from '@/hooks/stores/useIdeaDetailStore';
import {IdeaDetailMetaView} from '@/app/idea/[id]/_components/IdeaDetailMetaView';
import {usePathname, useSearchParams} from 'next/navigation';
import {IdeaTimeline} from '@/app/idea/[id]/_components/IdeaTimeline';

interface IdeaDetailClientProps {
  ideaDetail: IdeaDetail;
}

export const IdeaDetailClient = ({ideaDetail}: IdeaDetailClientProps) => {
  const searchParams = useSearchParams();
  const {idea, versions} = ideaDetail;
  const {currentVersion} = useIdeaDetailStore();
  const currentTab =
    searchParams.get('tab') === 'timeline' ? 'timeline' : 'version';
  const pathname = usePathname();
  const isEditable = pathname.endsWith('/edit');

  const sortedVersions = [...versions].sort((a, b) => b.version - a.version);

  const current =
    sortedVersions.find((v) => v.version === currentVersion) ??
    sortedVersions[0];

  return (
    <div className='relative flex flex-col gap-6 px-[164px] py-[54px]'>
      <IdeaDetailHeader idea={idea} />
      <IdeaDetailTab />

      {currentTab === 'version' && (
        <div className='flex gap-6'>
          <div className='flex flex-col items-center gap-6'>
            <IdeaVersionHistory
              versions={sortedVersions.map(({version, registerDate, tags}) => ({
                version,
                registerDate,
                tags: tags ?? [],
              }))}
            />
            <GlobalButton text='아이디어 등록하기' />
          </div>
          <IdeaDetailMetaView version={current} isEditable={isEditable} />
        </div>
      )}

      {currentTab === 'timeline' && <IdeaTimeline versions={versions} />}
    </div>
  );
};
