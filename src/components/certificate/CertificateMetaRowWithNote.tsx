import {CertificateMetaRow} from '@/components/certificate/CertificateMetaRow';

interface CertificateMetaRowWithNoteProps {
  label: string;
  subLabel: string;
  value: React.ReactNode;
  note: string;
}

export const CertificateMetaRowWithNote = ({
  label,
  subLabel,
  value,
  note,
}: CertificateMetaRowWithNoteProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <CertificateMetaRow label={label} subLabel={subLabel} value={value} />
      <p className='text-[8px] font-medium'>※ {note}</p>
    </div>
  );
};
