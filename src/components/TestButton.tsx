export const TestButton = () => {
  const handleClickButton = () => {
    console.log('버튼 클릭');
  };
  return (
    <button
      onClick={handleClickButton}
      className='p-3s cursor-pointer rounded-2xl bg-blue-500 p-3 text-xs font-bold text-white shadow-xl hover:bg-blue-400'>
      버튼
    </button>
  );
};
