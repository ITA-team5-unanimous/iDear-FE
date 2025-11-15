import {Meta, StoryObj} from '@storybook/nextjs';
import {TypographyToken} from '@/components/design-system/TypographyToken';

const meta: Meta = {
  title: 'Design System/Typography Guide',
  component: TypographyToken,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
 이 문서는 프로젝트 전반에 사용되는 타이포그래피 시스템을 정의합니다.
 
프로젝트 전반에 사용되는 폰트 스타일(heading, body, caption 등)의 크기, 굵기, 행간 등을 시각적으로 확인할 수 있습니다.
`,
      },
    },
  },
};
export default meta;

export const Typography: StoryObj = {
  render: () => <TypographyToken />,
};
