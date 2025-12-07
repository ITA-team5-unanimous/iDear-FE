'use client';

import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Inquiry} from '@/schemas/inquiry';
import {RadioGroup} from '@/components/common/radio/RadioGroup';
import {ImageFileBox} from '@/components/common/file/ImageFileBox';
import {PlusButton} from '@/components/buttons/PlusButton';
import {FileBoxType} from '@/schemas/support';
import {OccurredAtInput} from '@/components/support/inquiry/form/OccurredAtInput';
import {TextAreaField} from '@/components/support/inquiry/form/TextAreaField';
import GlobalButton from '@/components/buttons/GlobalButton';

type InquiryFormFields = Pick<
  Inquiry,
  'browser' | 'device' | 'problemDescription' | 'occurredAt'
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

const getInitialFileBoxes = (attachments?: FileBoxType[]) => {
  return attachments?.length
    ? attachments.map((box) => ({...box, files: box.files ?? []}))
    : [{id: uuidv4(), files: []}];
};

export const InquiryForm = ({
  initialData,
  isEditMode,
  onSubmit,
  onCancelEdit,
}: InquiryFormProps) => {
  const [browser, setBrowser] = useState(initialData.browser);
  const [device, setDevice] = useState(initialData.device);
  const [problemDescription, setProblemDescription] = useState(
    initialData.problemDescription
  );
  const [occurredAt, setOccurredAt] = useState(initialData.occurredAt);
  const [fileBoxes, setFileBoxes] = useState(
    getInitialFileBoxes(initialData.fileBoxes)
  );

  useEffect(() => {
    if (!isEditMode) {
      setBrowser(initialData.browser);
      setDevice(initialData.device);
      setProblemDescription(initialData.problemDescription);
      setOccurredAt(initialData.occurredAt);
      setFileBoxes(getInitialFileBoxes(initialData.fileBoxes));
    }
  }, [isEditMode, initialData]);

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

    const formData: InquiryFormData = {
      browser,
      device,
      problemDescription,
      occurredAt,
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
        value={occurredAt}
        readOnly={!isEditMode}
        onChange={setOccurredAt}
      />

      <div className='flex flex-col gap-6'>
        <p className='text-2xl font-bold'>사용 브라우저</p>
        <RadioGroup
          value={browser}
          onChange={(value) => setBrowser(value as typeof browser)}
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
          onChange={(value) => setDevice(value as typeof device)}
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
