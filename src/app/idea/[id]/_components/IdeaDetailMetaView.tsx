'use client';

import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';
import {AttachmentList} from '@/app/idea/[id]/_components/AttachmentList';
import {Version} from '@/schemas/idea';
import {isImageFile} from '@/utils/isImageFile';
import {useParams, useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import GlobalButton from '@/components/buttons/GlobalButton';
import {useState} from 'react';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {DeleteAlertModal} from '@/components/common/modal/DeleteAlertModal';
import {RegisterCompleteModal} from '@/components/common/modal/RegisterCompleteModal';

interface IdeaDetailMetaViewProps {
  version: Version;
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

  const imageAttachments = version.attachments?.filter((file) =>
    isImageFile(file.name)
  );

  const fileAttachments = version.attachments?.filter(
    (file) => !isImageFile(file.name)
  );

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
            ver.{version.version} : {version.ideaTitle}
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
        <p>등록 날짜 : {version.registerDate}</p>
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
      </div>
      <div className='flex w-full justify-center'>
        {isEditable && <GlobalButton text='저장하기' onClick={handleSave} />}
      </div>

      {isDeleteModalOpen && (
        <ModalWrapper
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}>
          <DeleteAlertModal
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
