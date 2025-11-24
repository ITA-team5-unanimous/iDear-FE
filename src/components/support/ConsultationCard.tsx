import clsx from 'clsx';

interface ConsultationCardProps {
  title: string;
  icon: React.ReactNode;
  content: {text: string; variant?: 'default' | 'small'}[];
}

export const ConsultationCard = ({
  title,
  icon,
  content,
}: ConsultationCardProps) => {
  return (
    <div className='relative w-80'>
      <strong className='bg-primary absolute top-0 left-1/2 min-w-[215px] -translate-x-1/2 -translate-y-1/3 rounded-sm py-[14px] text-center text-2xl text-white'>
        {title}
      </strong>
      <div className='border-gray flex min-h-80 flex-col items-center gap-6 rounded-[8px] border bg-white pt-16'>
        {icon}
        <div>
          {content.map((line, idx) => (
            <p
              key={idx}
              className={clsx(
                'text-center font-medium',
                line.variant === 'small'
                  ? idx > 0 && content[idx - 1].variant === 'small'
                    ? 'text-[16px]'
                    : 'mt-3 text-[16px]'
                  : 'text-xl'
              )}>
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
