'use client';

import WaterMark from '@/assets/certificate/watermark.svg';
import SmallLogo from '@/assets/logo/small-logo.svg';
import {CertificateHeader} from '@/components/certificate/CertificateHeader';
import {CertificateMeta} from '@/components/certificate/CertificateMeta';
import {CertificateFooter} from '@/components/certificate/CertificateFooter';
import {downloadCertificatePdf} from '@/utils/downloadCertificatePdf';
import {IdeaCertificateType} from '@/schemas/idea';
import {useEffect} from 'react';

interface CertificatePdfProps {
  data: IdeaCertificateType;
  onDownloaded?: () => void;
}

export const CertificatePdf = ({data, onDownloaded}: CertificatePdfProps) => {
  useEffect(() => {
    const generatePdf = async () => {
      // 렌더링 직후 바로 다운로드
      await downloadCertificatePdf();
      onDownloaded?.();
    };

    generatePdf();
  }, [onDownloaded]);

  return (
    <div
      style={{
        position: 'fixed',
        top: -9999,
        left: -9999,
      }}>
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
    </div>
  );
};
