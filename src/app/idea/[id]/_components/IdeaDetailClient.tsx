'use client';

import {IdeaVersionHistory} from '@/app/idea/[id]/_components/IdeaVersionHistory';
import {IdeaDetailHeader} from '@/app/idea/[id]/_components/IdeaDetailHeader';
import {IdeaDetailTab} from '@/app/idea/[id]/_components/IdeaDetailTab';
import {useIdeaDetailStore} from '@/hooks/stores/useIdeaDetailStore';
import {IdeaDetailMetaView} from '@/app/idea/[id]/_components/IdeaDetailMetaView';
import {useParams, usePathname, useSearchParams} from 'next/navigation';
import {IdeaTimeline} from '@/app/idea/[id]/_components/IdeaTimeline';
import {useIdeaDetail} from '@/hooks/queries/useIdea';

export const IdeaDetailClient = () => {
  const {id} = useParams();
  const ideaId = Number(id);
  const {data: ideaDetail, isLoading, isError} = useIdeaDetail(ideaId);
  const searchParams = useSearchParams();
  const {currentVersion} = useIdeaDetailStore();
  const currentTab =
    searchParams.get('tab') === 'timeline' ? 'timeline' : 'version';
  const pathname = usePathname();
  const isEditable = pathname.endsWith('/edit');

  if (isLoading) return;
  if (isError || !ideaDetail) return <p>아이디어를 찾을 수 없습니다.</p>;

  const {ideaId: _id, title, versions} = ideaDetail;

  const sortedVersions = [...versions].sort(
    (a, b) => b.versionNumber - a.versionNumber
  );

  if (sortedVersions.length === 0) {
    return <p>등록된 버전이 없습니다.</p>;
  }

  const current =
    sortedVersions.find((v) => v.versionNumber === currentVersion) ??
    sortedVersions[0];

  return (
    <div className='relative flex flex-col gap-6 px-[164px] py-[54px]'>
      <IdeaDetailHeader idea={{id: ideaId, title: title}} />
      <IdeaDetailTab />

      {currentTab === 'version' && (
        <div className='flex gap-6'>
          <div className='flex flex-col items-center gap-6'>
            <IdeaVersionHistory
              versions={sortedVersions.map(({versionNumber, requestedAt}) => ({
                version: versionNumber,
                registerDate: requestedAt,
              }))}
            />
          </div>
          <IdeaDetailMetaView version={current} isEditable={isEditable} />
        </div>
      )}

      {currentTab === 'timeline' && <IdeaTimeline versions={sortedVersions} />}
    </div>
  );
};
