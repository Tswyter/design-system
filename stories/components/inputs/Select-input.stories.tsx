import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Selectinput from './Select-input';

const meta: Meta<typeof Selectinput> = {
  component: Selectinput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Selectinput>

export const Input: Story = {
  name: 'Select Input',
  args: {
    options: [
      {
        label: 'Option 1',
        value: 'option-1',
        isSelected: false,
      },
      {
        label: 'Option 2',
        value: 'option-2',
        isSelected: false,
      },
      {
        label: 'Option 3',
        value: 'option-3',
        isSelected: false,
      },
      {
        label: 'Option 4',
        value: 'option-4',
        isSelected: false,
      },
    ],
    label: 'Input Label',
    helpText: 'Help Text',
    disclaimerText: 'Fill this out at your own risk',
    errorText: 'Oops there was an error',
    inputClassNames: '-test',
    isDisabled: false,
    ariaLabel: 'This is a test input',
    handleChange: event => console.log(event.target.value),
    isMultiSelect: false,
    multiSelectSize: 1,
  }
};
