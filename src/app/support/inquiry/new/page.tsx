'use client';

import {
  InquiryForm,
  InquiryFormData,
} from '@/components/support/inquiry/InquiryForm';
import {BackButton} from '@/components/buttons/BackButton';
import {InquiryCompleteModal} from '@/components/common/modal/InquiryCompleteModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {ROUTES} from '@/constants/routes';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {createInitialFormData} from '@/hooks/inquiry/inquiryFormUtils';

export default function SupportInquiryNewPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const initialData = createInitialFormData(null);

  const handleSubmit = (formData: InquiryFormData) => {
    console.log('새 문의사항 제출 데이터:', formData);
    // API 호출 로직 추가
    setIsModalOpen(true);
  };

  const handleClickCancel = () => {
    router.back();
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
            initialData={initialData}
            isEditMode={true}
            onSubmit={handleSubmit}
            onCancelEdit={handleClickCancel}
          />
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
