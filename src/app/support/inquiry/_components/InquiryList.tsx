import {InquiryItem} from '@/app/support/inquiry/_components/InquiryItem';
import {InquiryForm} from '@/schemas/inquiry';
import {getSupportCategoryTitle} from '@/utils/inquiry/getSupportCategoryTitle';

interface InquiryListProps {
  inquiries: InquiryForm[];
  startIndex?: number;
}

export const InquiryList = ({inquiries, startIndex = 0}: InquiryListProps) => {
  return (
    <ul className='flex flex-col items-center'>
      {inquiries.map((inquiry, index) => (
        <InquiryItem
          key={inquiry.id}
          inquiryId={inquiry.id}
          displayId={startIndex + index + 1}
          category={getSupportCategoryTitle(inquiry.category)}
          description={inquiry.problemDescription}
          status={inquiry.status}
        />
      ))}
    </ul>
  );
};
