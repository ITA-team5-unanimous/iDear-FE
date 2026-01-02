export interface WithdrawGuidePart {
  text: string;
  highlight?: boolean;
}

export interface WithdrawGuideSentence {
  parts: WithdrawGuidePart[];
}

export const WITHDRAW_GUIDE: WithdrawGuideSentence[] = [
  {
    parts: [
      {
        text: '탈퇴 시, 계정의 모든 정보는 삭제되며, 재가입하더라도 복구되지 않습니다. ',
      },
    ],
  },
  {
    parts: [
      {text: '사용자가 진행한 '},
      {
        text: ' 아카이빙 기록은 서비스 기록 유지 정책에 따라 보관될 수 있습니다.',
        highlight: true,
      },
    ],
  },
  {
    parts: [
      {
        text: '블록체인에 등록된 정보는 기술 특성상 수정 및 삭제가 불가능하며, 탈퇴 이후에도 영구 보존됩니다.',
        highlight: true,
      },
    ],
  },
  {
    parts: [
      {
        text: '탈퇴 즉시 서비스 이용이 불가능하며, 로그인, 아이디어 등록, 아카이빙 등 모든 기능 이용이 중단됩니다.',
      },
    ],
  },
  {
    parts: [
      {
        text: '동일 이메일로 재가입은 가능하나, 탈퇴 전 데이터는 복구되지 않습니다.',
      },
    ],
  },
  {
    parts: [
      {
        text: '서비스 이용 중 진행 중이던 작업이 있다면, 탈퇴 전 반드시 확인하시기 바랍니다.',
      },
    ],
  },
  {
    parts: [
      {text: '탈퇴 이후 발생하는 불이익에 대해서는 당사가 책임지지 않습니다.'},
    ],
  },
] as const;
