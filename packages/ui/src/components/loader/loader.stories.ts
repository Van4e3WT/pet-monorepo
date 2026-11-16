import type { Meta, StoryObj } from '@storybook/react-vite';

import { Loader } from './loader';

const meta = {
  title: 'Example/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export default meta;
