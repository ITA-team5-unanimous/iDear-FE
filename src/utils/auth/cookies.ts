const COOKIE_OPTIONS = 'path=/; SameSite=Lax';

export const setAuthCookies = (
  access: string,
  refresh: string,
  expires: Date
) => {
  document.cookie = `access_token=${access}; ${COOKIE_OPTIONS}; expires=${expires.toUTCString()}`;
  document.cookie = `refresh_token=${refresh}; ${COOKIE_OPTIONS}; expires=${expires.toUTCString()}`;
};

export const clearAuthCookies = () => {
  document.cookie = `access_token=; ${COOKIE_OPTIONS}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  document.cookie = `refresh_token=; ${COOKIE_OPTIONS}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export const getCookie = (name: string) => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
};
