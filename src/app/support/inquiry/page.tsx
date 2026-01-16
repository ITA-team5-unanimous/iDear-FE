import {InquiryMainClient} from '@/app/support/inquiry/_components/InquiryMainClient';

type SearchParamsPromise = Promise<{page?: string}>;

export default async function InquiryPage({
  searchParams,
}: {
  searchParams: SearchParamsPromise;
}) {
  const awaitedSearchParams = await searchParams;
  const currentPage = Number(awaitedSearchParams.page ?? 1);

  return <InquiryMainClient currentPage={currentPage} />;
}
