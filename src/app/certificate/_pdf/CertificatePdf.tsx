'use client';

import {certificateType} from '@/schemas/certificate';
import WaterMark from '@/assets/certificate/watermark.svg';
import SmallLogo from '@/assets/logo/small-logo.svg';
import {CertificateHeader} from '@/app/certificate/_pdf/CertificateHeader';
import {CertificateMeta} from '@/app/certificate/_pdf/CertificateMeta';
import {CertificateFooter} from '@/app/certificate/_pdf/CertificateFooter';
import {downloadCertificatePdf} from '@/app/certificate/_pdf/downloadCertificatePdf';

interface CertificatePdfProps {
  data: certificateType;
}

export const CertificatePdf = ({data}: CertificatePdfProps) => {
  return (
    <>
      <div
        id='pdf-target'
        className='relative flex min-h-[842px] w-[595px] flex-col gap-6 bg-white p-12 text-black'
        style={{
          fontFamily: 'Pretendard, sans-serif',
        }}>
        <div className='pointer-events-none absolute inset-0 z-0 flex items-center justify-center'>
          <WaterMark className='h-full w-full object-contain' />
        </div>

        <CertificateHeader />

        <CertificateMeta data={data} />

        <CertificateFooter data={data} />

        <div className='absolute bottom-[48px] left-[48px] z-10'>
          <SmallLogo className='w-full' />
        </div>
      </div>
      <button
        onClick={downloadCertificatePdf}
        className='rounded bg-black px-4 py-2 text-white'>
        PDF 다운로드(테스트용)
      </button>
    </>
  );
};
