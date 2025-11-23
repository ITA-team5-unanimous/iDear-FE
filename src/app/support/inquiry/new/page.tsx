'use client';

import {BackButton} from '@/components/buttons/BackButton';
import GlobalButton from '@/components/buttons/GlobalButton';
import {PlusButton} from '@/components/buttons/PlusButton';
import {ImageFileBox} from '@/components/common/file/ImageFileBox';
import {InquiryCompleteModal} from '@/components/common/modal/InquiryCompleteModal';
import {RadioGroup} from '@/components/common/radio/RadioGroup';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {ROUTES} from '@/constants/routes';
import {FileBoxType} from '@/schemas/support';
import {useRouter} from 'next/navigation';
import {useState} from 'react';

export default function SupportInquiryNewPage() {
  const [browser, setBrowser] = useState<string>('');
  const [device, setDevice] = useState<string>('');
  const [fileBoxes, setFileBoxes] = useState<FileBoxType[]>([
    {id: Date.now(), files: []},
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();

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
          <div className='flex flex-col gap-6'>
            <p className='text-2xl font-bold'>*발생 시각</p>
            <input
              type='text'
              placeholder='YYYY-MM-DD HH:mm:ss'
              className='border-primary placeholder-gray max-w-[512px] rounded-[8px] border px-6 py-2 outline-none'
            />
          </div>

          <div className='flex flex-col gap-6'>
            <p className='text-2xl font-bold'>사용 브라우저</p>
            <RadioGroup
              value={browser}
              onChange={setBrowser}
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
              options={[
                {label: 'Window PC', value: 'window'},
                {label: 'Mac', value: 'mac'},
                {label: 'Iphone', value: 'ipone'},
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
            <input
              type='text'
              placeholder='ex) 확인증 다운로드가 안 됩니다.'
              className='border-primary placeholder-gray rounded-[8px] border p-6 outline-none'
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
                />
              ))}

              {fileBoxes.length < 4 && <PlusButton onClick={handleAddBox} />}
            </div>
          </div>

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
