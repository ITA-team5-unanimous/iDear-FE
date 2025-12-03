import {InquiryItem} from '@/components/support/inquiry/InquiryItem';
import {Inquiry} from '@/schemas/inquiry';

interface InquiryListProps {
  inquirys: Inquiry[];
}

export const InquiryList = ({inquirys}: InquiryListProps) => {
  return (
    <div className='flex flex-col items-center'>
      {inquirys.map((inquiry) => (
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
