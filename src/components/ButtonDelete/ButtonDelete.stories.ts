import type { Meta, StoryObj } from '@storybook/react';

import ButtonDelete from './ButtonDelete';

const meta: Meta<typeof ButtonDelete> = {
  title: 'ButtonDelete',
  component: ButtonDelete,
  tags: ['autodocs'],


}satisfies Meta<typeof ButtonDelete>;

export default meta;

type Story = StoryObj<typeof ButtonDelete>;

export const PrimaryDelete: Story = {
  args: {
    text: 'Войти',
  },
};
