'use client';

import {useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {InquiryFormData} from '@/app/support/inquiry/[id]/_components/InquiryForm';
import {InquiryForm} from '@/app/support/inquiry/[id]/_components/InquiryForm';
import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';
import {BackButton} from '@/components/buttons/BackButton';
import {DeleteAlertModal} from '@/components/common/modal/DeleteAlertModal';
import {Inquiry} from '@/schemas/inquiry';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {createInitialFormData} from '@/hooks/inquiry/inquiryFormUtils';

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
  const initialFormData = createInitialFormData(inquiry);

  if (!inquiry) return <p>문의사항을 찾을 수 없습니다.</p>;

  const handleEditMode = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('edit', 'true');
    router.push(`?${params.toString()}`);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleClickCancel = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('edit');
    router.push(`?${params.toString()}`);
  };

  const handleSubmitSave = (formData: InquiryFormData) => {
    console.log('폼 제출 데이터:', formData);
    // 여기에 API 호출 로직 추가
    const params = new URLSearchParams(searchParams.toString());
    params.delete('edit');
    router.push(`?${params.toString()}`);
  };

  return (
    <div className='relative flex flex-col justify-center px-40 py-[145px]'>
      <BackButton />

      <section className='border-gray flex flex-col gap-12 rounded-[8px] border p-12'>
        <div className='flex justify-between'>
          <strong className='text-[32px] font-bold'>문의사항</strong>

          {!isEditMode && (
            <div className='flex flex-row gap-4'>
              <GlobalSmallButton text='수정하기' onClick={handleEditMode} />
              <GlobalSmallButton text='삭제하기' onClick={handleDelete} />
            </div>
          )}
        </div>

        <InquiryForm
          key={isEditMode ? 'edit' : 'view'}
          initialData={initialFormData}
          isEditMode={isEditMode}
          onSubmit={handleSubmitSave}
          onCancelEdit={handleClickCancel}
        />
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
