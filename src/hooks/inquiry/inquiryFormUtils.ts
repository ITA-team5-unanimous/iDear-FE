import {v4 as uuidv4} from 'uuid';
import {FileBoxType} from '@/schemas/support';
import {Inquiry} from '@/schemas/inquiry';
import {InquiryFormData} from '@/components/support/inquiry/InquiryForm';

export const getInitialFileBoxes = (
  attachments?: FileBoxType[]
): FileBoxType[] => {
  return attachments?.length
    ? attachments.map((box) => ({...box, files: box.files ?? []}))
    : [{id: uuidv4(), files: []}];
};

export const createInitialFormData = (
  inquiry: Inquiry | null
): InquiryFormData => {
  if (!inquiry) {
    return {
      browser: '',
      device: '',
      problemDescription: '',
      occurredAt: '',
      fileBoxes: getInitialFileBoxes(),
    };
  }
  return {
    browser: inquiry.browser,
    device: inquiry.device,
    problemDescription: inquiry.problemDescription,
    occurredAt: inquiry.occurredAt,
    fileBoxes: getInitialFileBoxes(inquiry.attachments as FileBoxType[]),
  };
};
