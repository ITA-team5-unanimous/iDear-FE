'use client';

import {useState} from 'react';
import {useParams, useRouter} from 'next/navigation';
import GlobalButton from '@/components/buttons/GlobalButton';
import {BackButton} from '@/components/buttons/BackButton';
import {IdeaFormInput} from '@/app/register/[id]/_components/IdeaFormInput';
import {ImageUploadSection} from '@/app/register/[id]/_components/file/ImageUploadSection';
import {FileUploadSection} from '@/app/register/[id]/_components/file/FileUploadSection';
import {UrlUploadSection} from '@/app/register/[id]/_components/file/UrlUploadSection';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {IdeaAgreementModal} from '@/components/common/modal/IdeaAgreementModal';
import {RegisterCompleteModal} from '@/components/common/modal/RegisterCompleteModal';
import {IdeaExitModal} from '@/components/common/modal/IdeaExitModal';
import {FileBoxType} from '@/schemas/support';
import {useIdeaRegister} from '@/hooks/queries/useIdea';
import {signIdeaFiles} from '@/services/crypto/signIdeaFiles';
import {ROUTES} from '@/constants/routes';

export const IdeaRegisterClient = () => {
  const {id} = useParams();
  const router = useRouter();

  const [ideaTitle, setIdeaTitle] = useState<string>('');
  const [ideaDescription, setIdeaDescription] = useState<string>('');
  const [images, setImages] = useState<FileBoxType[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [githubUrl, setGithubUrl] = useState<string | undefined>();
  const [figmaUrl, setFigmaUrl] = useState<string | undefined>();
  const [isAgreementModalOpen, setIsAgreementModalOpen] =
    useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState<boolean>(false);

  const {mutateAsync: registerIdea, isPending} = useIdeaRegister();

  const handleSubmit = async () => {
    const formData = new FormData();

    const ideaData = {
      contestId: Number(id),
      title: ideaTitle,
      shortDescription: ideaDescription.slice(0, 50),
      description: ideaDescription,
      githubUrl: githubUrl,
      figmaUrl: figmaUrl,
    };

    formData.append(
      'ideaData',
      new Blob([JSON.stringify(ideaData)], {
        type: 'application/json',
      })
    );

    if (file) {
      formData.append('files', file);
    }

    images.forEach((imageBox) => {
      imageBox.files.forEach((file) => {
        formData.append('images', file);
      });
    });

    try {
      const registerResponse = await registerIdea(formData);

      if (registerResponse.status === 'success' && registerResponse.data) {
        const {ideaId, files} = registerResponse.data;

        const signatureResult = await signIdeaFiles(ideaId, files);

        if (signatureResult.status === 'success') {
          setIsRegisterModalOpen(true);
        } else {
          alert('전자서명 제출에 실패했습니다.');
        }
      }
    } catch (error) {
      console.error('Registration/Signature Error:', error);
      alert('등록 중 오류가 발생했습니다.');
    }
  };

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
    if (!id) return {};
    if (!ideaTitle.trim()) {
      alert('아이디어 제목을 입력해주세요.');
      return;
    }
    if (!ideaDescription.trim()) {
      alert('아이디어 설명을 입력해주세요.');
      return;
    }
    if (!file) {
      alert('파일을 첨부해주세요.');
      return;
    }

    setIsAgreementModalOpen(true);
  };

  const handleClickExit = () => {
    setIsExitModalOpen(false);
    router.back();
  };

  const handleClickRegister = () => {
    setIsRegisterModalOpen(false);
    setIsAgreementModalOpen(false);
    router.push(`${ROUTES.IDEA}`);
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

        <ImageUploadSection images={images} setImages={setImages} />

        <div className='flex flex-col gap-6'>
          <p className='text-2xl font-bold'>파일 업로드</p>
          <FileUploadSection file={file} setFile={setFile} />
          <UrlUploadSection
            githubUrl={githubUrl}
            setGithubUrl={setGithubUrl}
            figmaUrl={figmaUrl}
            setFigmaUrl={setFigmaUrl}
          />
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
            disabled={isPending}
          />
        </div>

        {isAgreementModalOpen && (
          <ModalWrapper isOpen={isAgreementModalOpen}>
            <IdeaAgreementModal
              onConfirm={() => handleSubmit()}
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
};
