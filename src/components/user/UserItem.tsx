interface UserItemProps {
  text: string;
  onClick: () => void;
}

export const UserItem = ({text, onClick}: UserItemProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={text}
      className='bg-gray w-[221px] p-6 text-left text-2xl text-white hover:bg-black'>
      {text}
    </button>
  );
};
