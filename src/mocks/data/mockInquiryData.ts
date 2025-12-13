import {Inquiry} from '@/schemas/inquiry';
import {INQUIRY_STATUS} from '@/constants/inquiry';
import {v4 as uuidv4} from 'uuid';

export const mockInquiryData: Inquiry[] = [
  {
    id: 1,
    title: '아이디어 보호/블록체인 관련 문의',
    description:
      '아이디어 등록 시 해시값 생성 오류가 납니다. 어떻게 해야 하나요? 이 문제를 어떻게 해결할 수 있을까요?',
    status: INQUIRY_STATUS.CONFIRMING,
    occurredAt: '2025-12-01 10:15:00',
    browser: 'chrome',
    device: 'window',
    problemDescription: '아이디어 등록 시 해시값 생성 오류가 발생합니다.',
    attachments: [{id: uuidv4(), files: []}],
  },
  {
    id: 2,
    title: '비밀번호 재설정 관련 문의',
    description:
      '로그인 비밀번호를 잊어버렸습니다. 재설정 링크를 받을 수 있을까요?',
    status: INQUIRY_STATUS.RECEIVED,
    occurredAt: '2025-12-02 09:30:00',
    browser: 'safari',
    device: 'mac',
    problemDescription: '비밀번호 재설정 링크를 요청합니다.',
    attachments: [],
  },
  {
    id: 3,
    title: '결제 시스템 오류 보고',
    description:
      '어제 밤 10시경 유료 서비스 결제를 시도했는데, 오류가 발생하며 결제가 완료되지 않았습니다. 카드사에 문의해야 하나요?',
    status: INQUIRY_STATUS.CONFIRMING,
    occurredAt: '2025-12-03 22:10:00',
    browser: 'edge',
    device: 'window',
    problemDescription: '유료 서비스 결제 시 500 오류 발생',
    attachments: [{id: uuidv4(), files: []}],
  },
  {
    id: 4,
    title: '서비스 이용 약관 변경 요청',
    description:
      '개인정보 보호 정책 중 5조 3항의 내용에 대해 좀 더 명확한 설명을 요청드립니다.',
    status: INQUIRY_STATUS.COMPLETED,
    occurredAt: '2025-12-04 14:00:00',
    browser: 'chrome',
    device: 'mac',
    problemDescription: '약관 5조 3항 내용 설명 요청',
    attachments: [],
  },
  {
    id: 5,
    title: 'API 연동 관련 기술 문의',
    description:
      '제공해주신 REST API의 `POST /users` 엔드포인트에서 500 에러가 발생합니다. 요청 본문(request body)의 형식에 문제가 있을까요?',
    status: INQUIRY_STATUS.RECEIVED,
    occurredAt: '2025-12-05 11:20:00',
    browser: 'chrome',
    device: 'window',
    problemDescription: 'POST /users API 500 에러 발생',
    attachments: [{id: uuidv4(), files: []}],
  },
  {
    id: 6,
    title: '새로운 기능 제안 (다크 모드)',
    description:
      '서비스에 다크 모드(Dark Mode) 기능을 추가해주시면 좋겠습니다. 야간 사용이 편리할 것 같습니다.',
    status: INQUIRY_STATUS.COMPLETED,
    occurredAt: '2025-12-06 16:45:00',
    browser: 'safari',
    device: 'mac',
    problemDescription: '다크 모드 기능 추가 요청',
    attachments: [],
  },
  {
    id: 7,
    title: '계정 활성화가 되지 않습니다.',
    description:
      '회원가입 후 이메일 인증을 완료했지만, 계정이 "비활성" 상태로 표시됩니다. 활성화 부탁드립니다.',
    status: INQUIRY_STATUS.CONFIRMING,
    occurredAt: '2025-12-07 08:30:00',
    browser: 'chrome',
    device: 'window',
    problemDescription: '회원가입 후 계정이 비활성 상태로 표시됨',
    attachments: [],
  },
  {
    id: 8,
    title: '데이터 백업 정책 문의',
    description:
      '사용자 데이터는 얼마나 자주 백업되며, 백업된 데이터는 얼마나 오래 보관되는지 궁금합니다.',
    status: INQUIRY_STATUS.COMPLETED,
    occurredAt: '2025-12-08 12:00:00',
    browser: 'edge',
    device: 'mac',
    problemDescription: '데이터 백업 정책 확인 요청',
    attachments: [],
  },
];
