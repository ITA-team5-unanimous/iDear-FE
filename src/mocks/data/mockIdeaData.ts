import {Idea} from '@/schemas/idea';

export const mockIdeaData: Idea = {
  id: 1,
  title: '2025년 이스포츠 대학리그 결선진출권(수도강원권) 대표 참가 대학 모집',
  subtitle: '지속 가능한 도시를 위한 창의적 솔루션 제안',
  hostingOrganization: '문화체육관광부',
  d_day: 12,
  startPeriod: '2025.09.01',
  endPeriod: '2025.10.15',
  registerDate: '2025-11-10T09:00:00Z',
  description: `
아이디어 한줄 소개 이 아이디어는 컴퓨터 비전을 활용해서 컵 적층 높이를 파악하고, 일정 높이 도달 시 알림이 울리도록 하였습니다. 이러한 설계를 통해서 내부 빛의 양의 영향으로 센서가 오작동할 경우를 대비하였고, 보다 정확도 높은 분리배출 및 시스템 설계가 되도록 하였습니다.
`,
  imageUrl: 'https://example.com/uploads/smartcity-banner.png',
  attachments: [
    {
      name: '공모전_신청서.docx',
      url: 'https://example.com/files/apply-form.docx',
      size: 45832,
    },
    {
      name: '공모전_가이드.pdf',
      url: 'https://example.com/files/guide.pdf',
      size: 105328,
    },
  ],
};
