import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Rangeinput from './Range-input';

const meta: Meta<typeof Rangeinput> = {
  component: Rangeinput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Rangeinput>;

export const Input: Story = {
  name: 'Range Input',
  args: {
    label: 'Range input Label',
    helpText: 'Help Text',
    disclaimerText: 'Fill this out at your own risk',
    errorText: 'Oops there was an error',
    inputClassNames: '-test',
    isDisabled: false,
    isReadOnly: false,
    minValue: 0,
    maxValue: 10,
    step: 1,
    ariaLabel: 'This is a test input',
    handleChange: event => console.log(event.target.value)
  }
};