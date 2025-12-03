import {InquiryItem} from '@/components/support/inquiry/InquiryItem';
import {Inquiry} from '@/schemas/inquiry';

interface InquiryListProps {
  inquiries: Inquiry[];
}

export const InquiryList = ({inquiries}: InquiryListProps) => {
  return (
    <div className='flex flex-col items-center'>
      {inquiries.map((inquiry) => (
        <InquiryItem
          key={inquiry.id}
          id={inquiry.id}
          title={inquiry.title}
          description={inquiry.description}
          status={inquiry.status}
        />
      ))}
    </div>
  );
};
