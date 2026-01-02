import {IdeaMainClient} from '@/app/idea/_components/IdeaMainClient';
import {Spinner} from '@/components/common/ui/Spinner';
import SuspenseWrapper from '@/components/common/wrappers/SuspenseWrapper';

export default function IdeaPage() {
  return (
    <SuspenseWrapper fallback={<Spinner />}>
      <IdeaMainClient />
    </SuspenseWrapper>
  );
}
