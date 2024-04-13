import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import inputWrapperArgs from './shared/input-wrappper.args';

import Textareainput from './Textarea-input';

const meta: Meta<typeof Textareainput> = {
  component: Textareainput,
  tags: ['autodocs'],
  argTypes: {
    ...inputWrapperArgs,
    placeholder: {
      name: 'Placeholder Text',
      control: {
        type: 'text',
      }
    },
    isDisabled: {
      name: 'Disable',
      control: {
        type: 'boolean',
      }
    },
    isReadOnly: {
      name: 'Read Only',
      control: {
        type: 'boolean',
      }
    },
    ariaLabel: {
      name: 'Aria-Label Text',
      control: {
        type: 'text'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Textareainput>

export const Input: Story = {
  name: 'Textarea',
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
