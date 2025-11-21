'use client';

import {
  IDEA_UPLOAD_AGREEMENT,
  IDEA_UPLOAD_AGREEMENT_1,
  IDEA_UPLOAD_AGREEMENT_2,
  IDEA_UPLOAD_AGREEMENT_3_HIGHLIGHT,
  IDEA_UPLOAD_AGREEMENT_3_PREFIX,
  IDEA_UPLOAD_AGREEMENT_3_SUFFIX,
  IDEA_UPLOAD_AGREEMENT_4_HIGHLIGHT,
  IDEA_UPLOAD_AGREEMENT_4_PREFIX,
  IDEA_UPLOAD_AGREEMENT_4_SUFFIX,
  IDEA_UPLOAD_AGREEMENT_5_HIGHLIGHT,
  IDEA_UPLOAD_AGREEMENT_5_PREFIX,
  IDEA_UPLOAD_AGREEMENT_FINAL,
} from '@/constants/idea-agreement';
import GrayCheckBox from '@/assets/idea/checkbox-gray.svg';
import RedCheckBox from '@/assets/idea/checkbox-red.svg';
import DeleteIcon from '@/assets/common/delete.svg';
import {useState} from 'react';
import clsx from 'clsx';

interface IdeaAgreementModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export const IdeaAgreementModal = ({
  onClose,
  onConfirm,
}: IdeaAgreementModalProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  const handleSubmit = () => {
    if (!checked) return;
    onConfirm();
  };

  return (
    <div className='relative flex max-w-[540px] flex-col items-center gap-6 rounded-[8px] bg-white px-12 py-16 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      <button
        onClick={onClose}
        aria-label='모달 창 닫기'
        className='absolute top-6 right-6'>
        <DeleteIcon />
      </button>
      <h1 className='text-primary mb-6 text-2xl font-bold'>사전 확인 사항</h1>
      <p className='text-gray text-[16px] font-medium'>
        {IDEA_UPLOAD_AGREEMENT}
      </p>

      <div className='text-gray border-gray flex flex-col gap-6 border-y py-6 text-[16px]'>
        <p className='font-bold'>{IDEA_UPLOAD_AGREEMENT_1}</p>
        <p className='font-medium'>{IDEA_UPLOAD_AGREEMENT_2}</p>
        <p className='font-medium'>
          {IDEA_UPLOAD_AGREEMENT_3_PREFIX}
          <span className='font-bold'>{IDEA_UPLOAD_AGREEMENT_3_HIGHLIGHT}</span>
          {IDEA_UPLOAD_AGREEMENT_3_SUFFIX}
        </p>
        <p className='font-medium'>
          {IDEA_UPLOAD_AGREEMENT_4_PREFIX}
          <span className='font-bold'>{IDEA_UPLOAD_AGREEMENT_4_HIGHLIGHT}</span>
          {IDEA_UPLOAD_AGREEMENT_4_SUFFIX}
        </p>
        <p className='text-gray text-[16px] font-medium'>
          {IDEA_UPLOAD_AGREEMENT_5_PREFIX}
          <span className='font-bold'>{IDEA_UPLOAD_AGREEMENT_5_HIGHLIGHT}</span>
        </p>
      </div>

      <div className='mb-6 flex flex-row gap-4'>
        <button
          data-auto-focus
          onClick={handleCheck}
          className={clsx('transition-transform', checked && 'scale-105')}>
          {checked ? <RedCheckBox /> : <GrayCheckBox />}
        </button>
        <p className='text-gray text-[16px] font-medium'>
          {IDEA_UPLOAD_AGREEMENT_FINAL}
        </p>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!checked}
        className={clsx(
          'rounded-sm px-[24px] py-[7px] font-bold text-white transition-colors',
          checked ? 'bg-primary' : 'bg-gray-2 cursor-not-allowed'
        )}>
        확인 후 업로드
      </button>
    </div>
  );
};
