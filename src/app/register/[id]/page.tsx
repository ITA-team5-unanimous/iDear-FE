'use client';
import clsx from 'clsx';
import GlobalButton from '@/components/buttons/GlobalButton';
import {useState} from 'react';
import {BackButton} from '@/components/buttons/BackButton';
import {IdeaFormInput} from '@/components/register/IdeaFormInput';
import {PlusButton} from '@/components/buttons/PlusButton';
import {ImageFileBox} from '@/components/common/file/ImageFileBox';
import {SingleFileBox} from '@/components/common/file/SingleFileBox';
import {FileBoxType} from '@/schemas/support';
import {RegisterCompleteModal} from '@/components/common/modal/RegisterCompleteModal';
import {IdeaExitModal} from '@/components/common/modal/IdeaExitModal';
import {IdeaAgreementModal} from '@/components/common/modal/IdeaAgreementModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {useParams, useRouter} from 'next/navigation';

export default function IdeaRegisterPage() {
  const params = useParams();
  const router = useRouter();
  const {id} = params;

  const [ideaTitle, setIdeaTitle] = useState<string>('');
  const [ideaShortDescription, setIdeaShortDescription] = useState<string>('');
  const [ideaDescription, setIdeaDescription] = useState<string>('');
  const [isAgreementModalOpen, setIsAgreementModalOpen] =
    useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState<boolean>(false);
  const [fileBoxes, setFileBoxes] = useState<FileBoxType[]>([
    {id: Date.now(), files: []},
  ]);
  const [singleFileBox, setSingleFileBox] = useState<FileBoxType>({
    id: Date.now() + 1,
    files: [],
  });
  const isSingleImage = fileBoxes.length === 1;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdeaTitle(e.target.value);
  };

  const handleShortDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIdeaShortDescription(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIdeaDescription(e.target.value);
  };

  const handleAddBox = () => {
    if (fileBoxes.length >= 4) return;

    setFileBoxes((prev) => [...prev, {id: Date.now(), files: []}]);
  };

  const handleFilesChange = (id: number, newFiles: File[]) => {
    if (newFiles.length === 0) return;

    setFileBoxes((prev) =>
      prev.map((box) => (box.id === id ? {...box, files: [newFiles[0]]} : box))
    );
  };

  const handleSingleFilesChange = (id: number, newFiles: File | null) => {
    setSingleFileBox((prev) => ({
      ...prev,
      files: newFiles ? [newFiles] : [],
    }));
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
    <div className='relative flex'>
      <BackButton />
      <div className='border-gray mt-14 mb-14 ml-41 flex h-full w-[1400px] flex-col rounded-[4px] border p-12'>
        <p className='flex flex-col text-[32px] font-bold'>아이디어 등록</p>
        <div className='mt-9 flex'>
          <div>
            <IdeaFormInput
              label='아이디어 제목'
              value={ideaTitle}
              onChange={handleTitleChange}
            />
          </div>
          <div className='ml-36'>
            <IdeaFormInput
              onChange={handleShortDescriptionChange}
              label='아이디어 한줄 소개'
              value={ideaShortDescription}
            />
          </div>
        </div>
        <div
          className={clsx('mt-12 flex', {
            'items-start gap-13': isSingleImage,
            'flex-col gap-12': !isSingleImage,
          })}>
          <div className='flex flex-col'>
            <p className='mb-4 text-2xl font-bold'>이미지 파일(최대 4장)</p>
            <div className='flex flex-wrap items-center gap-10'>
              {fileBoxes.map((box) => (
                <ImageFileBox
                  key={box.id}
                  box={box}
                  onFilesChange={handleFilesChange}
                />
              ))}
              {fileBoxes.length < 4 && (
                <PlusButton onClick={handleAddBox} />
              )}{' '}
            </div>
          </div>

          <div className='flex flex-col'>
            <p className='mb-4 text-2xl font-bold'>파일 업로드</p>
            <SingleFileBox
              box={singleFileBox}
              onFilesChange={handleSingleFilesChange}
            />
          </div>
        </div>
        <div>
          <p className='mt-12 text-2xl font-bold'>아이디어 설명</p>
          <textarea
            className='border-primary mt-6 min-h-[249px] w-[1304px] resize-none rounded-lg border p-4 focus:outline-none'
            value={ideaDescription}
            onChange={handleDescriptionChange}
          />
        </div>

        <div className='mt-12 flex flex-row justify-center gap-6'>
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
