'use client';

import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
    return (
        <header className="text-center px-6 py-10">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">{title}</h1>
            {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
        </header>
    );
};
