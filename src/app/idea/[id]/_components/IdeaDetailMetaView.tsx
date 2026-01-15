'use client';

import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';
import {AttachmentList} from '@/app/idea/[id]/_components/AttachmentList';
import {IdeaVersionDetail} from '@/schemas/idea';
import {useParams, useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';

interface IdeaDetailMetaViewProps {
  version: IdeaVersionDetail;
  isLatestVersion: boolean;
}

export const IdeaDetailMetaView = ({
  version,
  isLatestVersion,
}: IdeaDetailMetaViewProps) => {
  const router = useRouter();
  const params = useParams();

  const imageAttachments = version.images.map((img) => ({
    name: img.fileName,
    url: img.filePath,
  }));

  const fileAttachments = version.files.map((file) => ({
    name: file.fileName,
    url: file.filePath,
  }));

  const linkAttachments = [
    ...(version.githubUrl
      ? [{name: version.githubUrl, url: version.githubUrl}]
      : []),
    ...(version.figmaUrl
      ? [{name: version.figmaUrl, url: version.figmaUrl}]
      : []),
  ];

  const handleEditMode = () => {
    router.push(`${ROUTES.IDEA}/${params.id}/edit`);
  };

  return (
    <section className='border-gray flex w-full flex-col gap-12 rounded-[8px] border p-6'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-row items-center justify-between'>
          <strong className='text-2xl font-bold'>
            <span>ver.{version.versionNumber} :</span>
            <span className='ml-3'>{version.title}</span>
          </strong>
          <div className='flex flex-row gap-4'>
            {isLatestVersion && (
              <GlobalSmallButton text='수정하기' onClick={handleEditMode} />
            )}
          </div>
        </div>
        <p>
          등록 날짜 : {version.requestedAt.split('T')[0].replace(/-/g, '.')}
        </p>
      </div>

      <div className='flex flex-col gap-6'>
        <strong className='text-2xl font-bold'>아이디어 설명</strong>
        <div className='overflow-auto'>{version.description}</div>
      </div>
      <div className='flex flex-col gap-6'>
        <strong className='text-2xl font-bold'>이미지</strong>
        <AttachmentList attachments={imageAttachments} />
      </div>

      <div className='flex flex-col gap-6'>
        <strong className='text-2xl font-bold'>파일</strong>
        <AttachmentList attachments={fileAttachments} />
        <span className='text-primary text-base'>
          ※ 문서 파일 변경시에만 새로운 버전이 생성됩니다.
        </span>
        {linkAttachments.length > 0 && (
          <AttachmentList attachments={linkAttachments} />
        )}
      </div>
    </section>
  );
};
