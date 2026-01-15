'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {v4 as uuidv4} from 'uuid';
import {InquiryDetail} from '@/schemas/inquiry';
import {RadioGroup} from '@/components/common/radio/RadioGroup';
import {ImageFileBox} from '@/components/common/file/ImageFileBox';
import {PlusButton} from '@/components/buttons/PlusButton';
import {FileBoxType} from '@/schemas/support';
import {OccurredAtInput} from '@/app/support/inquiry/new/_components/form/OccurredAtInput';
import {TextAreaField} from '@/app/support/inquiry/new/_components/form/TextAreaField';
import {isValidDateTime} from '@/utils/inquiry/dateValidators';
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
  onSubmit: (formData: InquiryFormData) => void;
}

export const InquiryForm = ({initialData, onSubmit}: InquiryFormProps) => {
  const router = useRouter();
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
  const [fileBoxes, setFileBoxes] = useState<FileBoxType[]>(() =>
    initialData.fileBoxes.map((box) => ({...box}))
  );

  const handleFilesChange = (id: string, newFiles: File[]) => {
    setFileBoxes((prev) =>
      prev.map((box) => (box.id === id ? {...box, files: newFiles} : box))
    );
  };

  const handleCancel = () => {
    router.back();
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

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-12'>
      <OccurredAtInput value={occurrenceTime} onChange={setOccurrenceTime} />

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
            {label: 'Iphone', value: 'iphone'},
            {label: 'Android Phone', value: 'android'},
          ]}
        />
      </div>

      <TextAreaField
        value={problemDescription}
        onChange={setProblemDescription}
      />

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
    </form>
  );
};
