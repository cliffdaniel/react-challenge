'use client';

import React from 'react';
import { Input } from '@/components/ui/input';

interface SearchInputProps {
    search: string;
    setSearch: (value: string) => void;
}

export const SearchInput = ({ search, setSearch }: SearchInputProps) => {
    return (
        <div className="flex flex-col w-full md:w-1/3">
            <label htmlFor="search" className="text-sm font-medium mb-1">
                Buscar país
            </label>

            <Input
                id="search"
                name="search"
                type="text"
                placeholder="Buscar país..."
                aria-label="Buscar país"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full"
            />
        </div>
    );
};
