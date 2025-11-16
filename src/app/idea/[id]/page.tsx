'use client';

import ChevronLeft from '@/assets/chevrons/chevron-left.svg';
import GlobalButton from '@/components/buttons/GlobalButton';
import {mockIdeaData} from '@/mocks/data/mockIdeaData';
import Download from '@/assets/idea/download.svg';
import {useParams, useRouter} from 'next/navigation';
import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';
import {AttachmentList} from '@/components/idea/AttachmentList';
import {useState} from 'react';
import {RegisterCompleteModal} from '@/components/common/modal/RegisterCompleteModal';
import {DeleteAlertModal} from '@/components/common/modal/DeleteAlertModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';

export default function IdeaDetailPage() {
  const router = useRouter();
  const params = useParams();
  const {id} = params;

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  // 추후 API 응답 데이터로 변경
  const idea = mockIdeaData.find((item) => item.id === Number(id));

  const [ideaTitle, setIdeaTitle] = useState<string | undefined>(
    idea?.ideaTitle
  );
  const [ideaShortDescription, setIdeaShortDescription] = useState<
    string | undefined
  >(idea?.ideaShortDescription);
  const [ideaDescription, setIdeaDescription] = useState<string | undefined>(
    idea?.description
  );

  // 아이디어 예외처리
  if (!idea) return <p>존재하지 않는 아이디어입니다.</p>;

  const handleDownloadCertificate = () => {
    alert('확인증 다운로드!');
    // 추후 기능 확장
  };

  const handleEditMode = () => {
    setIsEditMode(true);
    // 수정 내용 post 필요
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
    // api post
  };

  const handleSave = () => {
    setIsRegisterModalOpen(true);
    // api post
  };

  return (
    <section className='flex flex-col gap-6 px-[164px] py-[47px]'>
      <header className='mb-10 flex flex-row items-center gap-[77px]'>
        <button
          aria-label='뒤로 가기 버튼'
          onClick={() => router.back()}
          className='absolute top-[143px] left-9'>
          <ChevronLeft />
        </button>
        <h2 className='text-[32px] font-bold'>아이디어 기록함</h2>
      </header>
      <strong className='border-b-primary border-b pb-4 text-[32px] font-bold'>
        {idea.title}
      </strong>
      <div className='flex justify-end'>
        <GlobalButton
          onClick={handleDownloadCertificate}
          text='확인증 다운받기'
          icon={<Download />}
        />
      </div>
      <div className='border-gray flex flex-col gap-6 rounded-[8px] border p-6'>
        <div className='mb-10 flex flex-row items-center justify-between'>
          <strong className='text-2xl font-bold'>{idea.timeStamp}</strong>
          {!isEditMode && (
            <div className='flex flex-row gap-4'>
              <GlobalSmallButton text='수정하기' onClick={handleEditMode} />
              <GlobalSmallButton text='삭제하기' onClick={handleDelete} />
            </div>
          )}
        </div>

        <div className='flex flex-col gap-6'>
          <strong className='text-2xl font-bold'>아이디어 제목</strong>
          {isEditMode ? (
            <input
              className='border-b-gray border-b py-2 outline-none'
              value={ideaTitle}
              onChange={(e) => setIdeaTitle(e.target.value)}
            />
          ) : (
            idea.ideaTitle
          )}
        </div>

        <div className='flex flex-col gap-6'>
          <strong className='text-2xl font-bold'>아이디어 한 줄 소개</strong>
          {isEditMode ? (
            <input
              className='border-b-gray border-b py-2 outline-none'
              value={ideaShortDescription}
              onChange={(e) => setIdeaShortDescription(e.target.value)}
            />
          ) : (
            idea.ideaShortDescription
          )}
        </div>
        <div className='flex flex-col gap-6'>
          <strong className='text-2xl font-bold'>이미지</strong>
          <AttachmentList
            attachments={idea.attachments}
            isEditable={isEditMode}
          />
        </div>

        <div className='flex flex-col gap-6'>
          <strong className='text-2xl font-bold'>첨부된 파일</strong>
          <AttachmentList
            attachments={idea.attachments}
            isEditable={isEditMode}
          />
        </div>
        <div className='flex flex-col gap-6'>
          <strong className='text-2xl font-bold'>아이디어 설명</strong>
          {isEditMode ? (
            <textarea
              className='border-b-gray h-[304px] overflow-auto border-b outline-none'
              value={ideaDescription?.trimStart()}
              onChange={(e) => setIdeaDescription(e.target.value)}
            />
          ) : (
            <div className='h-[304px] overflow-auto'>{idea.description}</div>
          )}
        </div>
      </div>
      {isEditMode && (
        <div className='mt-6 flex w-full justify-center'>
          <GlobalButton text='저장하기' onClick={handleSave} />
        </div>
      )}
      {isRegisterModalOpen && (
        <ModalWrapper isOpen={isRegisterModalOpen}>
          <RegisterCompleteModal
            onClose={() => setIsRegisterModalOpen(false)}
          />
        </ModalWrapper>
      )}
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
    </section>
  );
}
