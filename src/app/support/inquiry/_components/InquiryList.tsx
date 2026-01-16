import {InquiryItem} from '@/app/support/inquiry/_components/InquiryItem';
import {InquiryForm} from '@/schemas/inquiry';
import {getSupportCategoryTitle} from '@/utils/inquiry/getSupportCategoryTitle';

interface InquiryListProps {
  inquiries: InquiryForm[];
}

export const InquiryList = ({inquiries}: InquiryListProps) => {
  return (
    <ul className='flex flex-col items-center'>
      {inquiries.map((inquiry) => (
        <InquiryItem
          key={inquiry.id}
          id={inquiry.id}
          category={getSupportCategoryTitle(inquiry.category)}
          description={inquiry.problemDescription}
          status={inquiry.status}
        />
      ))}
    </ul>
  );
};
