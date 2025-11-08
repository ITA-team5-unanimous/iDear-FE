import React from 'react';

interface IdeaRegisterButtonProps {
  onClickRegister: () => void;
}

export default function IdeaRegisterButton({
  onClickRegister,
}: IdeaRegisterButtonProps) {
  return (
    <button
      aria-label='아이디어 등록하기 버튼'
      onClick={onClickRegister}
      className='bg-primary rounded-sm pt-3 pr-6 pb-3 pl-6 text-lg text-white'>
      아이디어 등록하기
    </button>
  );
}
