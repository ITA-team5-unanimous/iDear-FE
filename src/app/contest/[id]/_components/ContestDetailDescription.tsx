interface ContestDetailDescriptionProps {
  description: string | null | undefined;
}

export const ContestDetailDescription = ({
  description,
}: ContestDetailDescriptionProps) => {
  return (
    <section className='border-gray mt-12 w-full rounded-[8px] border p-9'>
      <div className='text-base whitespace-pre-wrap'>
        {description?.trim()
          ? description
          : '공모전 설명이 아직 제공되지 않았습니다.'}
      </div>
    </section>
  );
};
