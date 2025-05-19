'use client';

import { Country } from '@/domain/entities/Country';
import { CustomCombobox } from '@/presentation/components/ui/CustomCombobox';

interface ContinentComboboxProps {
    countries: Country[];
    continent: string;
    setContinent: (value: string) => void;
}

export const ContinentCombobox = ({
    countries,
    continent,
    setContinent,
}: ContinentComboboxProps) => {
    const continents = Array.from(new Set(countries.map((c) => c.continent?.name).filter(Boolean)));
    const options = [
        { label: 'Todos', value: 'all' },
        ...continents.map((c) => ({ label: c, value: c })),
    ];

    return (
        <div className="flex flex-col w-full md:w-48">
            <label htmlFor="continent-combobox" className="text-sm font-medium mb-1">
                Filtrar por continente
            </label>

            <CustomCombobox
                options={options}
                value={continent}
                onChange={setContinent}
                placeholder="Selecciona un continente"
                ariaLabel="Filtrar por continente"
                searchPlaceholder="Buscar continente..."
            />
        </div>
    );
};
