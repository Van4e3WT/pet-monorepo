import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { TextField } from './text-field';

const meta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof TextField>;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export default meta;
