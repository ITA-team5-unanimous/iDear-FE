interface CertificateMetaRowProps {
  label: string;
  subLabel: string;
  value: React.ReactNode;
}

export const CertificateMetaRow = ({
  label,
  subLabel,
  value,
}: CertificateMetaRowProps) => {
  return (
    <div className='grid grid-cols-[140px_1fr] gap-x-4'>
      <div className='flex flex-col'>
        <p className='text-[12px] font-medium'>{label}</p>
        <p className='text-[8px] font-medium'>{subLabel}</p>
      </div>
      <p className='text-[12px] font-bold break-all'>{value}</p>
    </div>
  );
};
