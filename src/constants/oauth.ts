import {KakaoLogo, NaverLogo, GoogleLogo} from '@/icons/auth';

const OAUTH_BASE_URL = {
  kakao: 'https://kauth.kakao.com/oauth/authorize',
  google: 'https://accounts.google.com/o/oauth2/v2/auth',
  // naver todo
};

export const OAUTH_REQUEST_URL = {
  kakao: `${OAUTH_BASE_URL.kakao}?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`,

  google: `${OAUTH_BASE_URL.google}?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&scope=openid%20email%20profile&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}`,
};

export const OAUTH_SERVICES = [
  {
    name: '카카오',
    icon: KakaoLogo,
    url: OAUTH_REQUEST_URL.kakao,
    bgColor: '#FEE500',
    textColor: '#000000',
  },
  {
    name: '네이버',
    icon: NaverLogo,
    url: '',
    bgColor: '#03C75A',
    textColor: '#FFFFFF',
  },
  {
    name: 'Google',
    icon: GoogleLogo,
    url: OAUTH_REQUEST_URL.google,
    bgColor: '#FFFFFF',
    textColor: '#000000',
    borderColor: '#BFBFBF',
  },
];
