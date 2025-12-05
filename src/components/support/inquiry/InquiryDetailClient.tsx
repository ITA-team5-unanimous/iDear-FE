'use client';

import {useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {v4 as uuidv4} from 'uuid';
import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';
import GlobalButton from '@/components/buttons/GlobalButton';
import {BackButton} from '@/components/buttons/BackButton';
import {DeleteAlertModal} from '@/components/common/modal/DeleteAlertModal';
import {Inquiry} from '@/schemas/inquiry';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {InquiryForm} from '@/components/support/inquiry/InquiryForm';

interface InquiryDetailClientProps {
  inquiry: Inquiry | null;
  isEditMode: boolean;
}
export default function InquiryDetailClient({
  inquiry,
  isEditMode,
}: InquiryDetailClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [browser, setBrowser] = useState(inquiry?.browser ?? '');
  const [device, setDevice] = useState(inquiry?.device ?? '');
  const [problemDescription, setProblemDescription] = useState(
    inquiry?.problemDescription ?? ''
  );
  const [occurredAt, setOccurredAt] = useState(inquiry?.occurredAt ?? '');

  const [fileBoxes, setFileBoxes] = useState(
    inquiry?.attachments?.length
      ? inquiry.attachments.map((attachment) => ({
          ...attachment,
          files: attachment.files ?? [],
        }))
      : [{id: uuidv4(), files: []}]
  );

  if (!inquiry) return <p>문의사항을 찾을 수 없습니다.</p>;

  const resetState = () => {
    setBrowser(inquiry?.browser ?? '');
    setDevice(inquiry?.device ?? '');
    setProblemDescription(inquiry?.problemDescription ?? '');
    setFileBoxes(
      inquiry?.attachments?.length
        ? inquiry.attachments.map((attachment) => ({
            ...attachment,
            files: attachment.files ?? [],
          }))
        : [{id: uuidv4(), files: []}]
    );
  };

  const handleEditMode = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('edit', 'true');
    router.push(`?${params.toString()}`);
  };

  const handleAddBox = () => {
    if (fileBoxes.length >= 4) return;
    setFileBoxes((prev) => [...prev, {id: uuidv4(), files: []}]);
  };

  const handleFilesChange = (id: string, newFiles: File[]) => {
    setFileBoxes((prev) =>
      prev.map((box) => (box.id === id ? {...box, files: newFiles} : box))
    );
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleClickCancel = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('edit');
    router.push(`?${params.toString()}`);
    resetState();
  };

  const handleClickSave = () => {
    router.back();
  };

  return (
    <div className='relative flex flex-col justify-center px-40 py-[145px]'>
      <BackButton />

      <section className='border-gray flex flex-col gap-12 rounded-[8px] border p-12'>
        <div className='flex justify-between'>
          <strong className='text-[32px] font-bold'>문의사항</strong>
          <div className='flex flex-row gap-4'>
            <GlobalSmallButton text='수정하기' onClick={handleEditMode} />
            <GlobalSmallButton text='삭제하기' onClick={handleDelete} />
          </div>
        </div>

        <InquiryForm
          browser={browser}
          setBrowser={setBrowser}
          device={device}
          setDevice={setDevice}
          problemDescription={problemDescription}
          setProblemDescription={setProblemDescription}
          fileBoxes={fileBoxes}
          handleFilesChange={handleFilesChange}
          handleAddBox={handleAddBox}
          isEditMode={isEditMode}
          occurredAt={occurredAt}
          setOccurredAt={setOccurredAt}
        />

        {isEditMode && (
          <div className='flex flex-row justify-center gap-6'>
            <GlobalButton
              aria-label='취소하기 버튼'
              text='취소하기'
              variant='gray'
              onClick={handleClickCancel}
            />
            <GlobalButton
              aria-label='저장하기 버튼'
              text='저장하기'
              onClick={handleClickSave}
            />
          </div>
        )}
      </section>

      {isDeleteModalOpen && (
        <ModalWrapper
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}>
          <DeleteAlertModal
            onClose={() => setIsDeleteModalOpen(false)}
            onContinue={() => setIsDeleteModalOpen(false)}
          />
        </ModalWrapper>
      )}
    </div>
  );
}
