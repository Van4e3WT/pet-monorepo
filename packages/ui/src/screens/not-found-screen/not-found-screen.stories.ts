import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { NotFoundScreen } from './not-found-screen';

const meta = {
  title: 'Screens/NotFoundScreen',
  component: NotFoundScreen,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof NotFoundScreen>;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export default meta;
