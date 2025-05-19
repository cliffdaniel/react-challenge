'use client';

import React from 'react';
import { Country } from '@/domain/entities/Country';
import { CustomCombobox } from '@/presentation/components/ui/CustomCombobox';

interface CurrencyComboboxProps {
    countries: Country[];
    currency: string;
    setCurrency: (value: string) => void;
}

export const CurrencyCombobox = ({ countries, currency, setCurrency }: CurrencyComboboxProps) => {
    const currencies = Array.from(
        new Set(
            countries
                .map((c) => c.currency)
                .filter((currency): currency is string => Boolean(currency)),
        ),
    );

    const options = [
        { label: 'Todos', value: 'all' },
        ...currencies.map((c) => ({ label: c, value: c })),
    ];

    return (
        <div className="flex flex-col w-full md:w-48">
            <label htmlFor="currency-combobox" className="text-sm font-medium mb-1">
                Filtrar por moneda
            </label>

            <CustomCombobox
                options={options}
                value={currency}
                onChange={setCurrency}
                placeholder="Selecciona una moneda"
                ariaLabel="Filtrar por moneda"
                searchPlaceholder="Buscar moneda..."
            />
        </div>
    );
};
