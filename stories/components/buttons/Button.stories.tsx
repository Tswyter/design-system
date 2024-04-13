import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'Button Text',
      control: {
        type: 'text',
      }
    },
    type: {
      name: 'Type',
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
      table: {
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      name: 'Size',
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

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'test',
  },
};

export const Secondary: Story = {
  args: {
    children: 'test',
    type: 'secondary',
  }
}
