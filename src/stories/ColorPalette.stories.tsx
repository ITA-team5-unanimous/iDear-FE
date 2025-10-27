import {ColorPalette} from '@/components/design-system/ColorPalette';
import type {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof ColorPalette> = {
  title: 'Design System/Color Palette',
  component: ColorPalette,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
이 문서는 프로젝트 전반에 사용되는 컬러 시스템을 정의합니다.  


디자인 변경 시, 이 팔레트의 토큰 값을 기준으로 수정해 주세요.
        `,
      },
    },
  },
};
export default meta;

export const Colors: StoryObj = {
  render: () => <ColorPalette />,
};
