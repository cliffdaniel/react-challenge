'use client';

import React from 'react';
import * as Slot from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
    ({ className, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot.Slot : 'div';

        return (
            <Comp
                ref={ref}
                {...props}
                className={cn(
                    'inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-middle',
                    className,
                )}
            />
        );
    },
);

Loader.displayName = 'Loader';
