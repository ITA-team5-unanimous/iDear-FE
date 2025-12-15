import {ContestMainClient} from '@/app/contest/_components/ContestMainClient';
import {Spinner} from '@/components/common/ui/Spinner';
import SuspenseWrapper from '@/components/common/wrappers/SuspenseWrapper';

export default function ContestMainPage() {
  return (
    <SuspenseWrapper fallback={<Spinner />}>
      <ContestMainClient />
    </SuspenseWrapper>
  );
}
