import { cva } from '@pixelizio/core';

export const buttonVariant = cva(
    'cursor-pointer px-3.5 py-1.5 transition-colors duration-300 ease-in-out',
    {
        variants: {
            variant: {
                primary:
                    'border border-primary bg-primary text-white hover:border-primary-light hover:bg-primary-light active:border-primary-dark active:bg-primary-dark',
                outline:
                    'border border-primary text-primary hover:bg-primary-dark hover:text-white',
                secondary:
                    'border border-transparent text-primary hover:bg-primary/20 active:bg-primary/40',
            },
            rounded: {
                none: 'rounded-none',
                full: 'rounded-full',
                base: 'rounded',
                xs: 'rounded-xs',
                sm: 'rounded-sm',
                md: 'rounded-md',
                lg: 'rounded-lg',
            },
            size: {
                base: 'text-base',
                md: 'text-sm',
                xs: 'text-xs',
                lg: 'text-lg',
            },
            width: {
                full: 'w-full',
                auto: 'w-auto',
                fit: 'w-fit',
            },
            disabled: {
                true: 'cursor-not-allowed',
            },
            icon: {
                true: 'me-2 flex items-center justify-center px-2.5 py-1.5',
            },
        },
        defaultVariants: {
            variant: 'primary',
            rounded: 'sm',
            size: 'md',
        },
        compoundVariants: [
            {
                variant: 'primary',
                disabled: true,
                className:
                    'bg-primary/75 hover:bg-primary/75 active:bg-primary/75',
            },
            {
                variant: 'outline',
                disabled: true,
                className:
                    'border-primary/75 text-primary/75 hover:bg-transparent hover:text-primary/75',
            },
            {
                icon: true,
                rounded: 'full',
                className: 'p-2',
            },
        ],
    },
);
