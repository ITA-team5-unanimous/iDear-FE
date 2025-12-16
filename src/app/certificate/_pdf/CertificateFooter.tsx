import {CERTIFICATE_FOOTER_TEXT} from '@/constants/certificate-text';
import {certificateType} from '@/schemas/certificate';

interface CertificateFooterProps {
  data: certificateType;
}

export const CertificateFooter = ({data}: CertificateFooterProps) => {
  return (
    <footer className='flex flex-col gap-3'>
      <p className='text-[12px] font-medium whitespace-pre-line'>
        {CERTIFICATE_FOOTER_TEXT.VERIFY_HASH}
      </p>

      <p className='text-[12px] font-medium whitespace-pre-line'>
        {CERTIFICATE_FOOTER_TEXT.GUARANTEE}
      </p>

      <strong className='mt-3 text-center text-[14px] font-bold whitespace-pre-line'>
        {CERTIFICATE_FOOTER_TEXT.OFFICIAL_CONFIRM}
      </strong>

      <div className='mt-[10px] text-right text-[12px] font-medium'>
        <div>발급 기관 : iDear</div>
        <div>발급 일시 : {data.certificateTime}</div>
        <div>문서 번호 : {data.certificateId}</div>
      </div>
    </footer>
  );
};
