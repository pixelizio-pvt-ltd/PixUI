import type { VariantProps } from '@pixelizio/core';

import type { buttonVariant } from './Button.variant';

export type ButtonVariantProps = VariantProps<typeof buttonVariant>;

export type ButtonProps = React.ComponentPropsWithRef<'button'> &
    ButtonVariantProps & {
        asChild?: boolean;
    };
