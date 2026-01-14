'use client';

import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {InquiryDetail} from '@/schemas/inquiry';
import {RadioGroup} from '@/components/common/radio/RadioGroup';
import {ImageFileBox} from '@/components/common/file/ImageFileBox';
import {PlusButton} from '@/components/buttons/PlusButton';
import {FileBoxType} from '@/schemas/support';
import {OccurredAtInput} from '@/app/support/inquiry/[id]/_components/form/OccurredAtInput';
import {TextAreaField} from '@/app/support/inquiry/[id]/_components/form/TextAreaField';
import GlobalButton from '@/components/buttons/GlobalButton';

type InquiryFormFields = Pick<
  InquiryDetail,
  'browser' | 'device' | 'problemDescription' | 'occurrenceTime'
>;

export interface InquiryFormData extends InquiryFormFields {
  fileBoxes: FileBoxType[];
}

interface InquiryFormProps {
  initialData: InquiryFormData;
  isEditMode: boolean;
  onSubmit: (formData: InquiryFormData) => void;
  onCancelEdit: () => void;
}

export const InquiryForm = ({
  initialData,
  isEditMode,
  onSubmit,
  onCancelEdit,
}: InquiryFormProps) => {
  const [browser, setBrowser] = useState<InquiryDetail['browser']>(
    initialData.browser
  );
  const [device, setDevice] = useState<InquiryDetail['device']>(
    initialData.device
  );
  const [problemDescription, setProblemDescription] = useState<string>(
    initialData.problemDescription
  );
  const [occurrenceTime, setOccurrenceTime] = useState<string>(
    initialData.occurrenceTime
  );
  const [fileBoxes, setFileBoxes] = useState<FileBoxType[]>([]);

  // 초기 파일 박스 세팅
  useEffect(() => {
    setFileBoxes(initialData.fileBoxes.map((box) => ({...box})));
  }, [initialData]);

  // edit 모드가 바뀌면 폼 초기화
  useEffect(() => {
    if (!isEditMode) {
      setBrowser(initialData.browser);
      setDevice(initialData.device);
      setProblemDescription(initialData.problemDescription);
      setOccurrenceTime(initialData.occurrenceTime);
      setFileBoxes(initialData.fileBoxes.map((box) => ({...box})));
    }
  }, [isEditMode, initialData]);

  const isValidDateTime = (value: string) => {
    const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
    return regex.test(value);
  };

  const handleFilesChange = (id: string, newFiles: File[]) => {
    setFileBoxes((prev) =>
      prev.map((box) => (box.id === id ? {...box, files: newFiles} : box))
    );
  };

  const handleAddBox = () => {
    if (fileBoxes.length >= 4) return;
    setFileBoxes((prev) => [...prev, {id: uuidv4(), files: []}]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

    const formData: InquiryFormData = {
      browser,
      device,
      problemDescription,
      occurrenceTime,
      fileBoxes,
    };
    onSubmit(formData);
  };

  const handleCancel = () => {
    onCancelEdit();
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-12'>
      <OccurredAtInput
        value={occurrenceTime}
        readOnly={!isEditMode}
        onChange={setOccurrenceTime}
      />

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

      <TextAreaField
        value={problemDescription}
        onChange={setProblemDescription}
        readOnly={!isEditMode}
      />

      <div className='flex flex-col gap-6'>
        <p className='text-2xl font-bold'>에러 화면 캡처(최대 4장)</p>
        <div className='flex flex-wrap items-center gap-10'>
          {fileBoxes.map((box) => (
            <ImageFileBox
              key={box.id}
              box={box}
              onFilesChange={handleFilesChange}
              disabled={!isEditMode}
            />
          ))}

          {isEditMode && fileBoxes.length < 4 && (
            <PlusButton onClick={handleAddBox} />
          )}
        </div>
      </div>

      {isEditMode && (
        <div className='flex flex-row justify-center gap-6'>
          <GlobalButton
            type='button'
            aria-label='취소하기 버튼'
            text='취소하기'
            variant='gray'
            onClick={handleCancel}
          />
          <GlobalButton
            type='submit'
            aria-label='저장하기 버튼'
            text='저장하기'
          />
        </div>
      )}
    </form>
  );
};
