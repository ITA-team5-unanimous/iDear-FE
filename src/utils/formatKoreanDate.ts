export function formatKoreanDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) return '';

  const month = date.getMonth() + 1;
  const day = date.getDate();

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekday = weekdays[date.getDay()];

  return `${month}월 ${day}일 (${weekday})`;
}
