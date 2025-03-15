import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@pixelizio/pixui';

const meta = {
    title: 'PixUI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'outline', 'secondary'],
            description: 'Button variant',
            control: 'select',
            name: 'variant',
            type: 'string',
            table: {
                defaultValue: { summary: 'primary' },
            },
        },
        rounded: {
            options: ['none', 'full', 'base', 'xs', 'sm', 'md', 'lg'],
            description: 'Button rounded',
            control: 'select',
            type: 'string',
            name: 'rounded',
            table: {
                defaultValue: { summary: 'sm' },
            },
        },
        size: {
            options: ['xs', 'md', 'base', 'lg'],
            description: 'Button size',
            control: 'select',
            type: 'string',
            name: 'size',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        width: {
            options: ['auto', 'full', 'fit'],
            description: 'Button width',
            control: 'select',
            type: 'string',
            name: 'width',
            table: {
                defaultValue: { summary: 'auto' },
            },
        },
        icon: {
            description: 'Button icon',
            control: 'boolean',
            type: 'boolean',
            name: 'icon',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            description: 'Button disabled',
            control: 'boolean',
            type: 'boolean',
            name: 'disabled',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        asChild: {
            description: 'Render as child',
            control: 'boolean',
            type: 'boolean',
            name: 'asChild',
            table: {
                defaultValue: { summary: 'undefined' },
            },
        },
        children: {
            description: 'Button content',
            name: 'children',
            control: 'text',
        },
        onClick: {
            description: 'Button click event',
            action: 'clicked',
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Button',
    },
};

export const Icon: Story = {
    args: {
        children: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
        ),
        icon: true,
    },
};
