import {SUPPORT_CARDS} from '@/constants/support';

export const getSupportCategoryTitle = (key?: string) =>
  SUPPORT_CARDS.find((card) => card.key === key)?.title ?? '';
