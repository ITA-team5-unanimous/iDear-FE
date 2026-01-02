'use client';

import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';
import {AttachmentList} from '@/app/idea/[id]/_components/AttachmentList';
import {IdeaVersionDetail} from '@/schemas/idea';
import {useParams, useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import GlobalButton from '@/components/buttons/GlobalButton';
import {useState} from 'react';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';

import {RegisterCompleteModal} from '@/components/common/modal/RegisterCompleteModal';
import {GlobalAlertModal} from '@/components/common/modal/GlobalAlertModal';

interface IdeaDetailMetaViewProps {
  version: IdeaVersionDetail;
  isEditable?: boolean;
}

export const IdeaDetailMetaView = ({
  version,
  isEditable = false,
}: IdeaDetailMetaViewProps) => {
  const router = useRouter();
  const params = useParams();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isRegisterCompleteModalOpen, setIsRegisterCompleteModalOpen] =
    useState<boolean>(false);

  const imageAttachments = version.images.map((img) => ({
    name: img.fileName,
    url: img.filePath,
  }));

  // 2. 파일 데이터 가공
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

  const handleSave = () => {
    // TODO: 저장 API 호출

    setIsRegisterCompleteModalOpen(true);
  };

  return (
    <section className='border-gray flex w-full flex-col gap-12 rounded-[8px] border p-6'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-row items-center justify-between'>
          <strong className='text-2xl font-bold'>
            ver.{version.versionNumber} : {version.shortDescription}
          </strong>
          <div className='flex flex-row gap-4'>
            {!isEditable && (
              <>
                <GlobalSmallButton text='수정하기' onClick={handleEditMode} />
                <GlobalSmallButton text='삭제하기' onClick={handleDelete} />
              </>
            )}
          </div>
        </div>
        <p>
          등록 날짜 : {version.requestedAt.split('T')[0].replace(/-/g, '.')}
        </p>
      </div>

      <div className='flex flex-col gap-6'>
        <strong className='text-2xl font-bold'>아이디어 설명</strong>
        {isEditable ? (
          <textarea
            className='min-h-[200px] w-full'
            defaultValue={version.description}
          />
        ) : (
          <div className='overflow-auto'>{version.description}</div>
        )}
      </div>
      <div className='flex flex-col gap-6'>
        <strong className='text-2xl font-bold'>이미지</strong>
        <AttachmentList
          attachments={imageAttachments}
          isEditable={isEditable}
        />
      </div>

      <div className='flex flex-col gap-6'>
        <strong className='text-2xl font-bold'>파일</strong>
        <AttachmentList attachments={fileAttachments} isEditable={isEditable} />
        {linkAttachments.length > 0 && (
          <>
            <AttachmentList
              attachments={linkAttachments}
              isEditable={isEditable}
            />
          </>
        )}
      </div>
      <div className='flex w-full justify-center'>
        {isEditable && <GlobalButton text='저장하기' onClick={handleSave} />}
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

      {isRegisterCompleteModalOpen && (
        <ModalWrapper
          isOpen={isRegisterCompleteModalOpen}
          onClose={() => setIsRegisterCompleteModalOpen(false)}>
          <RegisterCompleteModal
            onClose={() => {
              setIsRegisterCompleteModalOpen(false);
              router.push(`${ROUTES.IDEA}/${params.id}`);
            }}
          />
        </ModalWrapper>
      )}
    </section>
  );
};
