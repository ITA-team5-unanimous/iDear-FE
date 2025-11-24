import ConsultationIconFirst from '@/assets/support/consultation-1.svg';
import ConsultationIconSecond from '@/assets/support/consultation-2.svg';
import ConsultationIconThird from '@/assets/support/consultation-3.svg';
import ConsultationIconFourth from '@/assets/support/consultation-4.svg';

export const SUPPORT_TEXT = {
  title: 'iDear 고객센터',
  description: [
    '창작자의 아이디어는 단순한 기록이 아니라, 오랜 시간 고민하고 완성한 생각의 결과물입니다.',
    '저희 고객센터는 이러한 창작 활동이 안전하게 보호되고, 불편함 없이 기록될 수 있도록 언제든지 도움을 드리고자 합니다.',
    '서비스 이용 과정에서 발생하는 문의, 불편 사항, 기술적인 문제, 또는 아이디어 보호와 검증(확인증)에 대한 질문까지 언제든지 고객센터를 통해 문의해주세요.',
    '저희는 정확하고 신속하게, 그리고 창작자의 입장에서 진심을 담아 응답드릴 것을 약속드립니다.',
  ],
};

export const SUPPORT_CARDS = [
  {
    title: '아이디어 등록·기록 관련 문의',
    contents: [
      '아이디어 생성/수정/삭제 관련 기술 문제',
      '파일 업로드 오류 및 지원 포맷 안내',
      '버전 관리 정책 및 기록 시간 검증 방식 설명',
    ],
  },
  {
    title: '아이디어 보호·블록체인 검증 문의',
    contents: [
      '확인증 발급 과정 안내',
      '블록체인 저장 방식 및 위·변조 방지 기술 설명',
      '내 아이디어 정상 등록 여부 확인 요청',
    ],
  },
  {
    title: '계정·보안 관련 문의',
    contents: [
      '회원 정보 변경',
      '소셜 로그인 문제',
      '비밀번호 재설정 및 계정 보호 안내',
    ],
  },
  {
    title: '공모전·대외활동 연계 지원',
    contents: [
      '아이디어 생성/수정/삭제 관련 기술 문제',
      '파일 업로드 오류 및 지원 포맷 안내',
      '버전 관리 정책 및 기록 시간 검증 방식 설명',
    ],
  },
  {
    title: '기술적 오류 신고',
    contents: [
      'UX/UI 불편 사항 제보',
      '서비스 지연·버그 신고',
      '브라우저/기기 호환 문제',
    ],
  },
];

interface ConsultationContent {
  text: string;
  variant?: 'small' | 'default';
}

interface ConsultationStep {
  title: string;
  icon: React.ComponentType;
  content: ConsultationContent[];
}

export const CONSULTATION_STEPS: ConsultationStep[] = [
  {
    title: '문제 유형 선택',
    icon: ConsultationIconFirst,
    content: [
      {text: '고객센터 페이지에서'},
      {text: '문의 유형을 선택해 주세요.'},
    ],
  },
  {
    title: '상세 내용 작성',
    icon: ConsultationIconSecond,
    content: [
      {text: '빠른 처리를 위해 아래 정보를 '},
      {text: '함께 첨부해주세요.'},
      {text: '(문제상황/발생시각/', variant: 'small'},
      {text: '에러화면/사용 브라우저)', variant: 'small'},
    ],
  },
  {
    title: '답변 확인',
    icon: ConsultationIconThird,
    content: [{text: '알림센터 또는 이메일로'}, {text: '답변이 전달됩니다.'}],
  },
  {
    title: '추가 확인 및 재문의',
    icon: ConsultationIconFourth,
    content: [
      {
        text: '추가 확인이 필요한 경우',
      },
      {text: '재문의가 가능하며 개발팀과 직접'},
      {text: '협의하여 대응합니다.'},
    ],
  },
];
