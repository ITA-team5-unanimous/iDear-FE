'use client';

import {useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {v4 as uuidv4} from 'uuid';
import {ImageFileBox} from '@/components/common/file/ImageFileBox';
import {RadioGroup} from '@/components/common/radio/RadioGroup';
import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';
import GlobalButton from '@/components/buttons/GlobalButton';
import {BackButton} from '@/components/buttons/BackButton';
import {PlusButton} from '@/components/buttons/PlusButton';
import {DeleteAlertModal} from '@/components/common/modal/DeleteAlertModal';
import {Inquiry} from '@/schemas/inquiry';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';

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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [browser, setBrowser] = useState(inquiry?.browser ?? '');
  const [device, setDevice] = useState(inquiry?.device ?? '');
  const [problemDescription, setProblemDescription] = useState(
    inquiry?.problemDescription ?? ''
  );

  const [fileBoxes, setFileBoxes] = useState(
    inquiry?.attachments?.length
      ? inquiry.attachments.map((att) => ({
          ...att,
          files: att.files ?? [],
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
        ? inquiry.attachments.map((att) => ({
            ...att,
            files: att.files ?? [],
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

        <div className='flex flex-col gap-6'>
          <p className='text-2xl font-bold'>*발생 시각</p>
          <input
            type='text'
            value={inquiry.occurredAt}
            readOnly
            placeholder='YYYY-MM-DD HH:mm:ss'
            className='border-primary max-w-[512px] rounded-[8px] border px-6 py-2 outline-none'
          />
        </div>

        <div className='flex flex-col gap-6'>
          <p className='text-2xl font-bold'>사용 브라우저</p>
          <RadioGroup
            value={browser}
            onChange={setBrowser}
            disabled={!isEditMode}
            options={[
              {label: 'Chrome', value: 'chrome'},
              {label: 'Safari', value: 'safari'},
              {label: 'Microsoft Edge', value: 'edge'},
            ]}
          />
        </div>

        <div className='flex flex-col gap-6'>
          <p className='text-2xl font-bold'>사용 기기</p>
          <RadioGroup
            value={device}
            onChange={setDevice}
            disabled={!isEditMode}
            options={[
              {label: 'Window PC', value: 'window'},
              {label: 'Mac', value: 'mac'},
              {label: 'Iphone', value: 'iphone'},
              {label: 'Android Phone', value: 'android'},
            ]}
          />
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-row items-center gap-6'>
            <p className='text-2xl font-bold'>*문제 상황</p>
            <p className='text-primary text-xl font-medium'>
              최대한 자세하게 작성해 주세요!
            </p>
          </div>

          <textarea
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            readOnly={!isEditMode}
            placeholder='ex) 확인증 다운로드가 안 됩니다.'
            className='border-primary h-[72px] resize-none rounded-[8px] border p-6 outline-none'
          />
        </div>

        <div className='flex flex-col gap-6'>
          <p className='text-2xl font-bold'>에러 화면 캡처(최대 4장)</p>

          <div className='flex flex-wrap items-center gap-10'>
            {fileBoxes.map((box) => (
              <ImageFileBox
                key={box.id}
                box={box}
                onFilesChange={handleFilesChange}
                disabled={!isEditMode}
              />
            ))}

            {isEditMode && fileBoxes.length < 4 && (
              <PlusButton onClick={handleAddBox} />
            )}
          </div>
        </div>

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
