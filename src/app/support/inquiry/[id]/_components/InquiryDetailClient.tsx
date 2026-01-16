'use client';

import Image from 'next/image';
import {useState, useEffect} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {RadioGroup} from '@/components/common/radio/RadioGroup';
import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';
import GlobalButton from '@/components/buttons/GlobalButton';
import {BackButton} from '@/components/buttons/BackButton';
import {PlusButton} from '@/components/buttons/PlusButton';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {GlobalAlertModal} from '@/components/common/modal/GlobalAlertModal';
import {
  useInquiryDetail,
  useInquiryUpdate,
  useInquiryDelete,
} from '@/hooks/queries/useInquiry';
import {FileBoxType} from '@/schemas/support';
import {v4 as uuidv4} from 'uuid';
import {ImageFileBox} from '@/components/common/file/ImageFileBox';
import {Spinner} from '@/components/common/ui/Spinner';
import {ROUTES} from '@/constants/routes';
import {isValidDateTime} from '@/utils/inquiry/dateValidators';

interface InquiryDetailClientProps {
  inquiryId: number;
  isEditMode: boolean;
}
export default function InquiryDetailClient({
  inquiryId,
  isEditMode,
}: InquiryDetailClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {data: inquiry, isLoading} = useInquiryDetail(inquiryId);
  const {mutate: updateInquiry, isPending} = useInquiryUpdate();
  const {mutate: deleteInquiry} = useInquiryDelete();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [occurrenceTime, setOccurrenceTime] = useState<string>('');
  const [browser, setBrowser] = useState<string>('');
  const [device, setDevice] = useState<string>('');
  const [problemDescription, setProblemDescription] = useState<string>('');
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [fileBoxes, setFileBoxes] = useState<FileBoxType[]>([]);
  const isDeletable = inquiry?.status === 'RECEIVED';

  useEffect(() => {
    if (!inquiry) return;

    setOccurrenceTime(inquiry.occurrenceTime.replace('T', ' '));
    setBrowser(inquiry.browser);
    setDevice(inquiry.device);
    setProblemDescription(inquiry.problemDescription);
    setImageUrls(
      inquiry.imageUrls.filter((url): url is string => Boolean(url))
    );
  }, [inquiry]);

  useEffect(() => {
    if (isEditMode) {
      setFileBoxes([{id: uuidv4(), files: []}]);
    }
  }, [isEditMode]);

  if (isLoading) return <Spinner />;

  const resetState = () => {
    if (!inquiry) return;

    setOccurrenceTime(inquiry.occurrenceTime.replace('T', ' '));
    setBrowser(inquiry.browser);
    setDevice(inquiry.device);
    setProblemDescription(inquiry.problemDescription);
    setFileBoxes([]);
  };

  const handleEditMode = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('edit', 'true');
    router.push(`?${params.toString()}`);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteInquiry(inquiryId, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
        router.push(`${ROUTES.SUPPORT_INQUIRY}`);
      },
    });
  };

  const handleClickCancel = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('edit');
    router.push(`?${params.toString()}`);
    resetState();
  };

  const handleClickSave = () => {
    if (!occurrenceTime.trim()) {
      alert('발생 시각은 필수 입력입니다.');
      return;
    }

    if (!isValidDateTime(occurrenceTime)) {
      alert(
        '발생 시각이 올바른 형식이 아닙니다. YYYY-MM-DD HH:mm:ss 형식으로 입력해주세요.'
      );
      return;
    }

    if (!problemDescription.trim()) {
      alert('문제 상황은 필수 입력입니다.');
      return;
    }

    const formData = new FormData();
    const formattedTime = occurrenceTime.replace(' ', 'T');

    const inquiryUpdateRequest = {
      occurrenceTime: formattedTime,
      browser,
      device,
      problemDescription,
    };

    const jsonBlob = new Blob([JSON.stringify(inquiryUpdateRequest)], {
      type: 'application/json',
    });
    formData.append('request', jsonBlob);

    fileBoxes.forEach((box) => {
      box.files.forEach((file) => {
        formData.append('images', file);
      });
    });

    updateInquiry(
      {inquiryId, formData},
      {
        onSuccess: () => {
          router.back();
        },
        onError: (error) => {
          console.error('문의 수정 실패:', error);
          alert('문의 수정 실패');
        },
      }
    );
  };

  const handleFilesChange = (id: string, files: File[]) => {
    setFileBoxes((prev) =>
      prev.map((box) => (box.id === id ? {...box, files} : box))
    );
  };

  const handleAddBox = () => {
    const totalImages = imageUrls.length + fileBoxes.length;
    if (totalImages >= 4) return;
    setFileBoxes((prev) => [...prev, {id: uuidv4(), files: []}]);
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
              <GlobalSmallButton
                text='삭제하기'
                onClick={handleDelete}
                disabled={!isDeletable}
              />
            </div>
          )}
        </div>

        <div className='flex flex-col gap-6'>
          <p className='text-2xl font-bold'>*발생 시각</p>
          <input
            type='text'
            value={occurrenceTime}
            onChange={(e) => setOccurrenceTime(e.target.value)}
            readOnly={!isEditMode}
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
            {imageUrls.map((url, idx) => (
              <div
                key={url}
                className='border-primary h-[317px] w-[564px] overflow-hidden rounded-[8px] border'>
                <Image
                  src={url}
                  alt={`inquiry-simage-${idx}`}
                  className='h-full w-full object-cover'
                  width={282}
                  height={158}
                />
              </div>
            ))}

            {isEditMode &&
              imageUrls.length < 4 &&
              fileBoxes.map((box) => (
                <ImageFileBox
                  key={box.id}
                  box={box}
                  onFilesChange={handleFilesChange}
                />
              ))}
            {isEditMode && imageUrls.length + fileBoxes.length < 4 && (
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
              disabled={isPending}
            />
          </div>
        )}
      </section>

      {isDeleteModalOpen && (
        <ModalWrapper
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}>
          <GlobalAlertModal
            withdrawText='계속 작성하기'
            strongText='정말 삭제하시겠습니까?'
            content='한 번 삭제하면 다시 되돌릴 수 없어요.'
            onContinue={() => setIsDeleteModalOpen(false)}
            onClose={handleConfirmDelete}
          />
        </ModalWrapper>
      )}
    </div>
  );
}
