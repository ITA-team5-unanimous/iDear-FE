'use client';

import GlobalButton from '@/components/buttons/GlobalButton';
import {useState} from 'react';
import {useParams, useRouter} from 'next/navigation';
import {BackButton} from '@/components/buttons/BackButton';
import {IdeaFormInput} from '@/app/register/[id]/_components/IdeaFormInput';
import {ImageUploadSection} from '@/app/register/[id]/_components/file/ImageUploadSection';
import {FileUploadSection} from '@/app/register/[id]/_components/file/FileUploadSection';
import {UrlUploadSection} from '@/app/register/[id]/_components/file/UrlUploadSection';
import {RegisterCompleteModal} from '@/components/common/modal/RegisterCompleteModal';
import {IdeaExitModal} from '@/components/common/modal/IdeaExitModal';
import {IdeaAgreementModal} from '@/components/common/modal/IdeaAgreementModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';

export default function IdeaRegisterPage() {
  const params = useParams();
  const router = useRouter();
  const {id} = params;

  const [ideaTitle, setIdeaTitle] = useState<string>('');
  const [ideaDescription, setIdeaDescription] = useState<string>('');
  const [isAgreementModalOpen, setIsAgreementModalOpen] =
    useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState<boolean>(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdeaTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIdeaDescription(e.target.value);
  };

  const handleClickCancel = () => {
    setIsExitModalOpen(true);
  };

  const handleClickSave = () => {
    setIsAgreementModalOpen(true);
    console.log('공모전 ID:', id);
  };

  const handleClickExit = () => {
    setIsExitModalOpen(false);
    router.back();
  };

  const handleClickRegister = () => {
    setIsRegisterModalOpen(false);
    setIsAgreementModalOpen(false);
  };

  return (
    <div className='relative flex justify-center pt-14 pb-14'>
      <BackButton />

      <div className='border-gray flex h-full w-[1400px] flex-col gap-12 rounded-sm border p-12'>
        <h1 className='flex flex-col text-[32px] font-bold'>아이디어 등록</h1>
        <div className='flex'>
          <div>
            <IdeaFormInput
              label='아이디어 제목'
              value={ideaTitle}
              onChange={handleTitleChange}
            />
          </div>
        </div>

        <div>
          <p className='text-2xl font-bold'>아이디어 설명</p>
          <textarea
            className='border-primary mt-6 min-h-[249px] w-full resize-none rounded-lg border p-4 focus:outline-none'
            value={ideaDescription}
            onChange={handleDescriptionChange}
          />
        </div>

        <ImageUploadSection />

        <div className='flex flex-col gap-6'>
          <p className='text-2xl font-bold'>파일 업로드</p>
          <FileUploadSection />
          <UrlUploadSection />
        </div>

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

        {isAgreementModalOpen && (
          <ModalWrapper isOpen={isAgreementModalOpen}>
            <IdeaAgreementModal
              onConfirm={() => setIsRegisterModalOpen(true)}
              onClose={() => setIsAgreementModalOpen(false)}
            />
          </ModalWrapper>
        )}

        {isRegisterModalOpen && (
          <ModalWrapper isOpen={isRegisterModalOpen}>
            <RegisterCompleteModal onClose={() => handleClickRegister()} />
          </ModalWrapper>
        )}

        {isExitModalOpen && (
          <ModalWrapper
            isOpen={isExitModalOpen}
            onClose={() => setIsExitModalOpen(false)}>
            <IdeaExitModal
              onExit={() => handleClickExit()}
              onContinue={() => setIsExitModalOpen(false)}
            />
          </ModalWrapper>
        )}
      </div>
    </div>
  );
}
