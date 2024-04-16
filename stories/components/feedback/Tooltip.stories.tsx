import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: {
      name: 'Position',
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
      defaultValue: 'top',
    },
    caretPosition: {
      name: 'Caret Position',
      control: {
        type: 'select',
        options: ['beginning', 'middle', 'end'],
      },
      defaultValue: 'middle',
    },
    children: {
      name: 'Tooltip Text',
      control: {
        type: 'text',
      }
    }
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    children: 'test',
  },
};
