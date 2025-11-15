import {Idea} from '@/schemas/idea';

export const mockIdeaData: Idea[] = [
  {
    id: 1,
    title:
      '2025년 이스포츠 대학리그 결선진출권(수도강원권) 대표 참가 대학 모집',
    subtitle: '지속 가능한 도시를 위한 창의적 솔루션 제안',
    hostingOrganization: '문화체육관광부',
    d_day: 12,
    startPeriod: '2025.09.01',
    endPeriod: '2025.10.15',
    registerDate: '2025.11.10',
    description: `
아이디어 한줄 소개 — 이 아이디어는 컴퓨터 비전을 활용해 컵 적층 높이를 파악하고 일정 높이 도달 시 알림이 울리도록 하였습니다.
이를 통해 센서 오작동을 방지하고, 보다 정확한 분리배출 시스템을 설계했습니다.
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
  },
  {
    id: 2,
    title: 'AI 기반 환경 모니터링 해커톤',
    subtitle: 'AI를 활용해 도시의 미세먼지를 줄이는 솔루션 제안',
    hostingOrganization: '환경부',
    d_day: 25,
    startPeriod: '2025.08.20',
    endPeriod: '2025.09.30',
    registerDate: '2025.11.09',
    description: `
딥러닝 모델을 통해 도시 내 오염원 분포를 실시간 예측하고, 
드론 센서 데이터와 연계해 즉각적인 환경 개선 조치를 제안하는 프로젝트입니다.
    `,
    imageUrl: 'https://example.com/uploads/ai-environment.jpg',
    attachments: [
      {
        name: '해커톤_참가안내.pdf',
        url: 'https://example.com/files/hackathon-guide.pdf',
        size: 92340,
      },
    ],
  },
  {
    id: 3,
    title: '2025 창의 융합 디자인 공모전',
    subtitle: '기술과 예술의 만남, 혁신적인 사용자 경험 디자인',
    hostingOrganization: '한국디자인진흥원',
    d_day: 7,
    startPeriod: '2025.07.15',
    endPeriod: '2025.08.10',
    registerDate: '2025.11.08',
    description: `
사용자 인터랙션 중심의 스마트 기기 UX/UI 디자인을 제안하고, 
시각적 아름다움과 기술적 실용성을 동시에 추구하는 공모전입니다.
    `,
    imageUrl: 'https://example.com/uploads/design-challenge.jpg',
    attachments: [
      {
        name: '디자인_템플릿.ai',
        url: 'https://example.com/files/design-template.ai',
        size: 30328,
      },
    ],
  },
  {
    id: 4,
    title: '스마트 팜 자동화 시스템 개발 경진대회',
    subtitle: 'IoT 기반 농업 자동화 솔루션',
    hostingOrganization: '농촌진흥청',
    d_day: 30,
    startPeriod: '2025.10.01',
    endPeriod: '2025.11.20',
    registerDate: '2025.11.07',
    description: `
IoT 센서를 통해 온도, 습도, 토양 정보를 수집하고 AI 분석으로 작물 생장 상태를 최적화하는 스마트 팜 시스템 개발.
    `,
    imageUrl: 'https://example.com/uploads/smartfarm.jpg',
    attachments: [
      {
        name: '스마트팜_설계도.pdf',
        url: 'https://example.com/files/smartfarm-design.pdf',
        size: 158742,
      },
    ],
  },
  {
    id: 5,
    title: '청년 창업 아이디어톤 2025',
    subtitle: '미래를 바꾸는 스타트업 아이디어 경연',
    hostingOrganization: '중소벤처기업부',
    d_day: 3,
    startPeriod: '2025.06.01',
    endPeriod: '2025.07.01',
    registerDate: '2025.11.06',
    description: `
사회 문제 해결형 비즈니스 모델을 중심으로 한 창업 아이디어톤입니다.
팀 단위로 창의적 서비스 및 제품을 제안하고 전문가 멘토링을 받을 수 있습니다.
    `,
    imageUrl: 'https://example.com/uploads/startup-ideathon.jpg',
    attachments: [
      {
        name: '참가신청서.docx',
        url: 'https://example.com/files/idea-apply.docx',
        size: 53456,
      },
      {
        name: '대회_소개자료.pdf',
        url: 'https://example.com/files/contest-info.pdf',
        size: 128944,
      },
    ],
  },
];
