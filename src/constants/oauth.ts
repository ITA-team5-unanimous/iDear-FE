import {KakaoLogo, NaverLogo, GoogleLogo} from '@/icons/auth';

const OAUTH_BASE_URL = 'https://i-dear.info/api/oauth2/authorization';

export const OAUTH_SERVICES = [
  {
    name: '카카오',
    icon: KakaoLogo,
    url: `${OAUTH_BASE_URL}/kakao`,
    bgColor: '#FEE500',
    textColor: '#000000',
  },
  {
    name: '네이버',
    icon: NaverLogo,
    url: `${OAUTH_BASE_URL}/naver`,
    bgColor: '#03C75A',
    textColor: '#FFFFFF',
  },
  {
    name: 'Google',
    icon: GoogleLogo,
    url: `${OAUTH_BASE_URL}/google`,
    bgColor: '#FFFFFF',
    textColor: '#000000',
    borderColor: '#BFBFBF',
  },
];
