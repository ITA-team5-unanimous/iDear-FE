import {IdeaDetailClient} from '@/app/idea/[id]/_components/IdeaDetailClient';
import {mockIdeaDetail} from '@/mocks/data/mockIdeaData';

export default function IdeaDetailEditPage() {
  const ideaDetail = mockIdeaDetail;
  return <IdeaDetailClient ideaDetail={ideaDetail} />;
}
