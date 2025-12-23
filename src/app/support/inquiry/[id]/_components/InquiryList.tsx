import {InquiryItem} from '@/app/support/inquiry/[id]/_components/InquiryItem';
import {Inquiry} from '@/schemas/inquiry';

interface InquiryListProps {
  inquiries: Inquiry[];
}

export const InquiryList = ({inquiries}: InquiryListProps) => {
  return (
    <ul className='flex flex-col items-center'>
      {inquiries.map((inquiry) => (
        <InquiryItem
          key={inquiry.id}
          id={inquiry.id}
          title={inquiry.title}
          description={inquiry.description}
          status={inquiry.status}
        />
      ))}
    </ul>
  );
};
