import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { RoundButton } from './Round-button';

const meta: Meta<typeof RoundButton> = {
  component: RoundButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          tertiary: 'Tertiary',
        },
      },
      defaultValue: 'primary',
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: {
        type: 'inline-radio',
        labels: {
          large: 'Large',
          medium: 'Medium',
          small: 'Small',
        },
      },
      defaultValue: 'medium',
    },
  },
};

export default meta;

type Story = StoryObj<typeof RoundButton>;

export const Primary: Story = {
  args: {
    children: 'test',
    type: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'test',
    type: 'secondary'
  }
}
