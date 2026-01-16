import {InquiryNewClient} from '@/app/support/inquiry/new/_components/InquiryNewClient';
import {Spinner} from '@/components/common/ui/Spinner';
import SuspenseWrapper from '@/components/common/wrappers/SuspenseWrapper';

export default function SupportInquiryNewPage() {
  return (
    <SuspenseWrapper fallback={<Spinner />}>
      <InquiryNewClient />
    </SuspenseWrapper>
  );
}
