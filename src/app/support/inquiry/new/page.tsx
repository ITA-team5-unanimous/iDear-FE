'use client';

import {InquiryForm} from '@/components/support/inquiry/InquiryForm';
import {BackButton} from '@/components/buttons/BackButton';
import GlobalButton from '@/components/buttons/GlobalButton';
import {InquiryCompleteModal} from '@/components/common/modal/InquiryCompleteModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {ROUTES} from '@/constants/routes';
import {FileBoxType} from '@/schemas/support';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export default function SupportInquiryNewPage() {
  const [browser, setBrowser] = useState<string>('');
  const [device, setDevice] = useState<string>('');
  const [occurredAt, setOccurredAt] = useState<string>('');
  const [problemDescription, setProblemDescription] = useState<string>('');
  const [fileBoxes, setFileBoxes] = useState<FileBoxType[]>([
    {id: uuidv4(), files: []},
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleAddBox = () => {
    if (fileBoxes.length >= 4) return;

    setFileBoxes((prev) => [...prev, {id: uuidv4(), files: []}]);
  };

  const handleFilesChange = (id: string, newFiles: File[]) => {
    if (newFiles.length === 0) return;

    setFileBoxes((prev) =>
      prev.map((box) => (box.id === id ? {...box, files: [newFiles[0]]} : box))
    );
  };

  const handleClickCancel = () => {
    router.back();
  };

  const handleClickSave = () => {
    //todo: api post. 실제 API 호출 후 성공 시 모달 열기
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push(`${ROUTES.SUPPORT_INQUIRY}`);
  };

  return (
    <div className='relative flex flex-col px-40 py-[145px]'>
      <BackButton />

      <div className='flex flex-col gap-12'>
        <h1 className='items-center text-center text-4xl font-medium'>
          <p>iDear에게 궁금한 사항을 문의해 주세요.</p>
          <p>최대한 빠른 시일 내에 친절하게 답변해 드리겠습니다.</p>
        </h1>

        <section className='border-gray flex flex-col gap-12 rounded-[8px] border p-12'>
          <strong className='text-[32px] font-bold'>문의사항</strong>

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
            isEditMode={true}
            occurredAt={occurredAt}
            setOccurredAt={setOccurredAt}
          />

          <div className='flex flex-row justify-center gap-6'>
            <GlobalButton
              text='취소하기'
              variant='gray'
              onClick={handleClickCancel}
            />
            <GlobalButton text='저장하기' onClick={handleClickSave} />
          </div>
        </section>
      </div>
      {isModalOpen && (
        <ModalWrapper isOpen={isModalOpen}>
          <InquiryCompleteModal onClose={handleCloseModal} />
        </ModalWrapper>
      )}
    </div>
  );
}
