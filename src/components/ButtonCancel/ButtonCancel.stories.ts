import type { Meta, StoryObj } from '@storybook/react';

import ButtonCancel from './ButtonCancel';

const meta: Meta<typeof ButtonCancel> = {
  title: 'ButtonCancel',
  component: ButtonCancel,
  tags: ['autodocs'],

}satisfies Meta<typeof ButtonCancel>;

export default meta;

type Story = StoryObj<typeof ButtonCancel>;

export const PrimaryCancel: Story = {
  args: {
    text: 'Войти',
    isDirty: true,
    isValid: true,
  },
};
