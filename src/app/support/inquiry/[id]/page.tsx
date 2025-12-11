import {mockInquiryData} from '@/mocks/data/mockInquiryData';
import InquiryDetailClient from '@/components/support/inquiry/InquiryDetailClient';

type InquiryPageParamsPromise = Promise<{id: string}>;
type InquiryPageSearchParamsPromise = Promise<
  Record<string, string | string[] | undefined>
>;

export default async function InquiryDetailPage({
  params,
  searchParams,
}: {
  params: InquiryPageParamsPromise;
  searchParams: InquiryPageSearchParamsPromise;
}) {
  const awaitedParams = await params;
  const awaitedSearchParams = await searchParams;
  const isEditMode = awaitedSearchParams?.edit === 'true';

  const inquiry = mockInquiryData.find(
    (item) => item.id === Number(awaitedParams.id)
  );

  if (!inquiry) {
    return <div>해당 문의를 찾을 수 없습니다.</div>;
  }

  return <InquiryDetailClient inquiry={inquiry} isEditMode={isEditMode} />;
}
