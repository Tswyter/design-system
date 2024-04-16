import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AccordionItem } from './Accordion-item';

const meta: Meta<typeof AccordionItem> = {
  component: AccordionItem,
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'Accordion Button Label',
      control: {
        type: 'text',
      }
    },
    defaultIsOpen: {
      name: 'Default Open',
      control: {
        type: 'boolean',
      }
    },
    children: {
      name: 'Accordion Item Content',
      control: {
        type: 'text',
      }
    }
  },
};

export default meta;

type Story = StoryObj<typeof AccordionItem>;

export const Inline: Story = {
  args: {
    children: 'test',
    label: 'Accordion Button',
    defaultIsOpen: false,
  },
};
