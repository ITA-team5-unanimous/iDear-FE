import {CertificatePdf} from '@/app/certificate/_pdf/CertificatePdf';
import {mockCertificateData} from '@/mocks/data/mockCertificateData';

export default function CertificatePage() {
  const data = mockCertificateData;
  return <CertificatePdf data={data[0]} />;
}
