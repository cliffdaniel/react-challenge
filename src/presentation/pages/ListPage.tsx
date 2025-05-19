'use client';

import { useState, useMemo, useDeferredValue } from 'react';
import { useCountries } from '@/application/use-cases/useCountries';
import { MainLayout } from '@/presentation/layouts/MainLayout';
import { Filters } from '@/presentation/components/countries/CountriesFilters';
import { PageHeader } from '@/presentation/components/common/PageHeader';
import { CountriesError } from '@/presentation/components/countries/CountriesError';
import { CountriesLoading } from '@/presentation/components/countries/CountriesLoading';
import { CountriesContent } from '@/presentation/components/countries/CountriesContent';

export const ListPage = () => {
    const { countries, loading, error } = useCountries();

    const [search, setSearch] = useState('');
    const [continent, setContinent] = useState('all');
    const [currency, setCurrency] = useState('all');

    const deferredSearch = useDeferredValue(search);

    const filteredCountries = useMemo(() => {
        return countries.filter((country) => {
            const matchSearch = country.name.toLowerCase().includes(deferredSearch.toLowerCase());
            const matchContinent = continent === 'all' || country.continent?.name === continent;
            const matchCurrency = currency === 'all' || country.currency === currency;
            return matchSearch && matchContinent && matchCurrency;
        });
    }, [countries, deferredSearch, continent, currency]);

    let content: React.ReactNode;

    if (error) {
        content = <CountriesError />;
    } else if (loading) {
        content = <CountriesLoading />;
    } else {
        content = <CountriesContent countries={filteredCountries} />;
    }

    return (
        <MainLayout>
            <div className="space-y-4">
                <PageHeader title="🌍 Países" subtitle="Explora el mundo" />

                <Filters
                    countries={countries}
                    search={search}
                    setSearch={setSearch}
                    continent={continent}
                    setContinent={setContinent}
                    currency={currency}
                    setCurrency={setCurrency}
                />

                {content}
            </div>
        </MainLayout>
    );
};
