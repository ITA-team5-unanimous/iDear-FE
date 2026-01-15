import {CERTIFICATE_HEADER_TEXT} from '@/constants/certificate-text';

export const CertificateHeader = () => {
  return (
    <header className='flex flex-col gap-2'>
      <h1 className='text-2xl font-bold'>아이디어 블록체인 등록 확인증</h1>
      <h2 className='text-[14px] font-bold'>Verification Certificate</h2>
      <p className='mt-1 text-[12px] font-medium'>
        {CERTIFICATE_HEADER_TEXT.DESCRIPTION}
      </p>
    </header>
  );
};
