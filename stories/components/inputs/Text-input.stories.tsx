import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Textinput from './Text-input';

const meta: Meta<typeof Textinput> = {
  component: Textinput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Textinput>

export const Input: Story = {
  name: 'Text Input',
  args: {
    label: 'Input Label',
    helpText: 'Help Text',
    disclaimerText: 'Fill this out at your own risk',
    errorText: 'Oops there was an error',
    inputClassNames: '-test',
    isDisabled: false,
    isReadOnly: false,
    placeholder: 'Placeholder text',
    ariaLabel: 'This is a test input',
    handleChange: event => console.log(event.target.value)
  }
};
