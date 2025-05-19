'use client';

import * as React from 'react';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from 'cmdk';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface Option {
    label: string;
    value: string;
}

interface CustomComboboxProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    ariaLabel: string;
    searchPlaceholder: string;
}

export const CustomCombobox = ({
    options,
    value,
    onChange,
    placeholder,
    ariaLabel,
    searchPlaceholder,
}: CustomComboboxProps) => {
    const [open, setOpen] = React.useState(false);

    const selectedLabel = options.find((option) => option.value === value)?.label ?? 'Todos';

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    type="button"
                    role="combobox"
                    aria-expanded={open}
                    aria-label={ariaLabel}
                    className="w-full md:w-48 inline-flex items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                >
                    {selectedLabel}
                    <ChevronDownIcon className="h-4 w-4 opacity-50 ml-2" />
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-[220px] p-2 bg-white border border-gray-300 rounded-md shadow-md">
                <Command>
                    <div className="px-2 pb-2">
                        <CommandInput
                            placeholder={searchPlaceholder}
                            className="w-full h-9 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-300 transition placeholder-gray-400"
                        />
                    </div>
                    <CommandEmpty className="py-2 text-center text-sm text-gray-500">
                        No se encontró resultado.
                    </CommandEmpty>
                    <CommandGroup className="max-h-48 overflow-y-auto overflow-x-hidden flex flex-col gap-1">
                        {options.map((option) => (
                            <CommandItem
                                key={option.value}
                                onSelect={() => {
                                    onChange(option.value);
                                    setOpen(false);
                                }}
                                className="flex items-center px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-gray-100"
                            >
                                {option.label}
                                {value === option.value && (
                                    <CheckIcon className="ml-auto h-4 w-4 opacity-50" />
                                )}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
