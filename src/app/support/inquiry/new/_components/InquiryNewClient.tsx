'use client';

import {
  InquiryForm,
  InquiryFormData,
} from '@/app/support/inquiry/[id]/_components/InquiryForm';
import {useRouter, useSearchParams} from 'next/navigation';
import {useState} from 'react';
import {ROUTES} from '@/constants/routes';
import {BackButton} from '@/components/buttons/BackButton';
import {InquiryCompleteModal} from '@/components/common/modal/InquiryCompleteModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {createInitialFormData} from '@/hooks/inquiry/inquiryFormUtils';
import {useInquiryCreate} from '@/hooks/queries/useInquiry';

export const InquiryNewClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const initialData = createInitialFormData(null);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const {mutate: createInquiry} = useInquiryCreate();

  const handleSubmit = (data: InquiryFormData) => {
    const formData = new FormData();
    const formattedTime = data.occurrenceTime.replace(' ', 'T');

    const inquiryData = {
      category: category,
      occurrenceTime: formattedTime,
      browser: data.browser,
      device: data.device,
      problemDescription: data.problemDescription,
    };

    const jsonBlob = new Blob([JSON.stringify(inquiryData)], {
      type: 'application/json',
    });
    formData.append('request', jsonBlob);

    data.fileBoxes.forEach((box) => {
      box.files.forEach((file) => {
        formData.append('images', file);
      });
    });

    createInquiry(formData);
    createInquiry(formData, {
      onSuccess: () => setIsModalOpen(true),
      onError: (error) => {
        console.error('문의 등록 에러:', error);
        alert('문의 등록 실패');
      },
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push(ROUTES.SUPPORT_INQUIRY);
  };

  const handleCancelEdit = () => {
    router.back();
  };

  return (
    <div className='relative flex flex-col px-40 py-[145px]'>
      <BackButton />

      <section className='flex flex-col gap-12'>
        <h1 className='items-center text-center text-4xl font-medium'>
          <p>iDear에게 궁금한 사항을 문의해 주세요.</p>
          <p>최대한 빠른 시일 내에 친절하게 답변해 드리겠습니다.</p>
        </h1>

        <div className='border-gray flex flex-col gap-12 rounded-[8px] border p-12'>
          <strong className='text-[32px] font-bold'>문의사항</strong>

          <InquiryForm
            initialData={initialData}
            isEditMode={true}
            onSubmit={handleSubmit}
            onCancelEdit={handleCancelEdit}
          />
        </div>
      </section>

      {isModalOpen && (
        <ModalWrapper isOpen={isModalOpen}>
          <InquiryCompleteModal onClose={handleCloseModal} />
        </ModalWrapper>
      )}
    </div>
  );
};
