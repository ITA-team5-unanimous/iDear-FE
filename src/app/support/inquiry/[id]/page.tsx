import InquiryDetailClient from '@/app/support/inquiry/[id]/_components/InquiryDetailClient';

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

  const inquiryId = Number(awaitedParams.id);

  return <InquiryDetailClient inquiryId={inquiryId} isEditMode={isEditMode} />;
}
