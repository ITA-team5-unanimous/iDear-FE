import {OAUTH_SERVICES} from '@/constants/oauth';

interface SocialLoginButtonProps {
  name: string;
}

export const SocialLoginButton = ({name}: SocialLoginButtonProps) => {
  const service = OAUTH_SERVICES.find((s) => s.name === name);

  if (!service) return null;

  const {icon: Icon, url, bgColor, textColor, borderColor} = service;

  return (
    <a
      href={url}
      className='flex h-[60px] items-center justify-center gap-[15px] rounded-md font-medium no-underline'
      style={{
        backgroundColor: bgColor,
        border: borderColor ? `1px solid ${borderColor}` : 'none',
        color: textColor ?? '#ffffff',
      }}>
      <Icon width={24} height={24} />
      <span className='text-[18px] sm:text-xl'>{name}로 시작하기</span>
    </a>
  );
};
