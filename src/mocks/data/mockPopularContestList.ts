import {z} from 'zod';
import {contestSchema} from '@/schemas/contests';

type Contest = z.infer<typeof contestSchema>;

export const mockPopularContestList: Contest[] = [
  {
    id: 0,
    title: '2025년 [부산시민 모두를 위한 디지털 금융포용 정책 아이디어]',
    hostingOrganization: '기관 A',
    imageUrl: undefined,
    d_day: 10,
  },
  {
    id: 1,
    title: '2025년 [부산시민 모두를 위한 디지털 금융포용 정책 아이디어]',
    hostingOrganization: '기관 A',
    imageUrl: undefined,
    d_day: 10,
  },
  {
    id: 2,
    title: '2025년 [부산시민 모두를 위한 디지털 금융포용 정책 아이디어]',
    hostingOrganization: '기관 A',
    imageUrl: undefined,
    d_day: 10,
  },
  {
    id: 3,
    title: '2025년 [부산시민 모두를 위한 디지털 금융포용 정책 아이디어]',
    hostingOrganization: '기관 A',
    imageUrl: undefined,
    d_day: 10,
  },
  {
    id: 4,
    title: '2025년 [부산시민 모두를 위한 디지털 금융포용 정책 아이디어]',
    hostingOrganization: '기관 A',
    imageUrl: undefined,
    d_day: 10,
  },
];
