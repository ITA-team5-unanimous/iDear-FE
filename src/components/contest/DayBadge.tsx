interface DayBadgeProps {
  date: string;
}

export const DayBadge = ({date}: DayBadgeProps) => {
  return (
    <div className='bg-primary rounded-3xl px-[19px] py-[5px] text-xl font-bold text-white'>
      D - {date}
    </div>
  );
};
