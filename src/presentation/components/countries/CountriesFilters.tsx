'use client';

import { Country } from '@/domain/entities/Country';
import { SearchInput } from '../ui/SearchInput';
import { ContinentCombobox } from '../ui/ContinentCombobox';
import { CurrencyCombobox } from '../ui/CurrencyCombobox';

interface FiltersProps {
    countries: Country[];
    search: string;
    setSearch: (value: string) => void;
    continent: string;
    setContinent: (value: string) => void;
    currency: string;
    setCurrency: (value: string) => void;
}

export const Filters = ({
    countries,
    search,
    setSearch,
    continent,
    setContinent,
    currency,
    setCurrency,
}: FiltersProps) => {
    return (
        <fieldset
            role="search"
            aria-label="Filtros de países"
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 p-4"
        >
            <legend className="sr-only">Filtros de búsqueda de países</legend>

            <SearchInput search={search} setSearch={setSearch} />

            <ContinentCombobox
                countries={countries}
                continent={continent}
                setContinent={setContinent}
            />

            <CurrencyCombobox countries={countries} currency={currency} setCurrency={setCurrency} />
        </fieldset>
    );
};
