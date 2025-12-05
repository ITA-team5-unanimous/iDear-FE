'use client';

import {RadioGroup} from '@/components/common/radio/RadioGroup';
import {ImageFileBox} from '@/components/common/file/ImageFileBox';
import {PlusButton} from '@/components/buttons/PlusButton';
import {FileBoxType} from '@/schemas/support';
import {OccurredAtInput} from '@/components/support/inquiry/form/OccurredAtInput';
import {TextAreaField} from '@/components/support/inquiry/form/TextAreaField';

interface InquiryFormProps {
  browser: string;
  setBrowser: (value: string) => void;
  device: string;
  setDevice: (value: string) => void;
  problemDescription: string;
  setProblemDescription: (value: string) => void;
  fileBoxes: FileBoxType[];
  handleFilesChange: (id: string, newFiles: File[]) => void;
  handleAddBox: () => void;
  isEditMode: boolean;
  occurredAt: string;
  setOccurredAt?: (value: string) => void;
}

export const InquiryForm = ({
  browser,
  setBrowser,
  device,
  setDevice,
  problemDescription,
  setProblemDescription,
  fileBoxes,
  handleFilesChange,
  handleAddBox,
  isEditMode,
  occurredAt,
  setOccurredAt,
}: InquiryFormProps) => {
  const isInputReadOnly = !isEditMode;

  return (
    <>
      <OccurredAtInput
        value={occurredAt}
        readOnly={isInputReadOnly}
        onChange={setOccurredAt}
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
    </>
  );
};
