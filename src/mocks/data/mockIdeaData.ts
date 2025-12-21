import {IdeaDetail} from '@/schemas/idea';

export const mockIdeaDetail: IdeaDetail = {
  idea: {
    id: 1,
    title:
      '2025년 이스포츠 대학리그 결선진출권(수도강원권) 대표 참가 대학 모집',
    host: '문화체육관광부',
    d_day: 12,
    registerDate: '2025.11.10',
  },

  versions: [
    {
      version: 1,
      tags: [],
      ideaTitle: '지속 가능한 도시를 위한 초기 아이디어',
      registerDate: '2025.11.01',
      description: `
컵 적층 높이를 초음파 센서로 측정하여
분리배출을 자동화하려는 초기 아이디어입니다.
센서 오작동 문제가 존재했습니다.
      `,
      imageUrl: 'https://example.com/uploads/idea-v1.png',
      attachments: [
        {
          name: '아이디어_초안.pdf',
          url: 'https://example.com/files/idea-v1.pdf',
          size: 84321,
        },
        {
          name: 'github.com/kimminna',
          url: 'github.com/kimminna',
          size: 84321,
        },
      ],
    },
    {
      version: 2,
      ideaTitle: '컴퓨터 비전 기반 분리배출 개선안',
      tags: ['1차 제안서', '코드 수정본'],
      registerDate: '2025.11.05',
      description: `
초음파 센서를 제거하고
컴퓨터 비전을 활용해 컵 적층 높이를 판단하도록 개선했습니다.
      `,
      imageUrl: 'https://example.com/uploads/idea-v2.png',
      attachments: [
        {
          name: '아이디어_개선안.pdf',
          url: 'https://example.com/files/idea-v2.pdf',
          size: 125432,
        },
        {
          name: '시스템_구조도.png',
          url: 'https://example.com/files/system-diagram.png',
          size: 54321,
        },
        {
          name: 'figma.com/kimminna',
          url: 'figma.com/kimminna',
          size: 84321,
        },
      ],
    },
    {
      version: 3,
      ideaTitle: '지속 가능한 도시를 위한 최종 제안',
      registerDate: '2025.11.10',
      tags: ['외부 기업과제 제출용'],
      description: `
정확도를 개선한 컴퓨터 비전 모델과
관리자 알림 기능을 추가한 최종 제안입니다.
      `,
      imageUrl: 'https://example.com/uploads/idea-v3.png',
      attachments: [
        {
          name: '최종_제안서.pdf',
          url: 'https://example.com/files/final-idea.pdf',
          size: 234981,
        },
        {
          name: '발표자료.pptx',
          url: 'https://example.com/files/presentation.pptx',
          size: 345982,
        },
      ],
    },
  ],
};
