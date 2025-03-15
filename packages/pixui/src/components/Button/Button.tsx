import { Slot } from '@radix-ui/react-slot';
import { cn } from '@pixelizio/core';

import type { ButtonProps } from './Button.types';
import { buttonVariant } from './Button.variant';

export const Button: React.FC<ButtonProps> = ({
    className,
    children,
    disabled,
    asChild,
    variant,
    rounded,
    icon,
    width,
    size,
    ...props
}) => {
    const Component = asChild ? Slot : 'button';
    return (
        <Component
            {...props}
            className={cn(
                buttonVariant({
                    variant,
                    rounded,
                    size,
                    icon,
                    width,
                    disabled,
                    className,
                }),
            )}
            disabled={disabled}
        >
            {children}
        </Component>
    );
};
