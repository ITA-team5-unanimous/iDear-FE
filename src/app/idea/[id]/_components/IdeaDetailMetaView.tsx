'use client';

import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';
import {AttachmentList} from '@/app/idea/[id]/_components/AttachmentList';
import {IdeaVersionDetail} from '@/schemas/idea';
import {useParams, useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {useState} from 'react';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {GlobalAlertModal} from '@/components/common/modal/GlobalAlertModal';

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

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const imageAttachments = version.images.map((img) => ({
    name: img.fileName,
    url: img.filePath,
  }));

  const fileAttachments = version.files.map((file) => ({
    name: file.fileName,
    url: file.filePath,
    status: file.status,
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

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    // TODO: 삭제 API 호출

    setIsDeleteModalOpen(false);
  };

  return (
    <section className='border-gray flex w-full flex-col gap-12 rounded-[8px] border p-6'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-row items-center justify-between'>
          <strong className='text-2xl font-bold'>
            <span>ver.{version.versionNumber} :</span>
            <span className='ml-3'>{version.shortDescription}</span>
          </strong>
          <div className='flex flex-row gap-4'>
            {isLatestVersion && (
              <GlobalSmallButton text='수정하기' onClick={handleEditMode} />
            )}
            <GlobalSmallButton text='삭제하기' onClick={handleDelete} />
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

      {isDeleteModalOpen && (
        <ModalWrapper
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}>
          <GlobalAlertModal
            withdrawText='계속 작성하기'
            strongText='정말 삭제하시겠습니까?'
            content='한 번 삭제하면 다시 되돌릴 수 없어요.'
            onClose={handleConfirmDelete}
            onContinue={() => setIsDeleteModalOpen(false)}
          />
        </ModalWrapper>
      )}
    </section>
  );
};
