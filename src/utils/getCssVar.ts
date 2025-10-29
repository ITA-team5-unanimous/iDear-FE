/**
 * CSS 변수를 읽어오는 유틸 함수
 */

export const getCssVar = (name: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
};
