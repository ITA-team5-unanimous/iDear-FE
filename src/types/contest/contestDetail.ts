export interface ContestDetail {
  id: number;
  title: string;
  startPeriod: string; // 공모 시작일
  endPeriod: string; // 공모 종료일
  hostingOrganization: string; // 주최기관
  managementOrganization: string; // 주관기관
  firstPrize: number; // 1등 상금 (원)
  totalPrize: string; // 총 상금
  description: string; // 상세 설명
}
