import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Filters } from '@/presentation/components/countries/CountriesFilters';
import { Country } from '@/domain/entities/Country';

describe('Filters', () => {
    const mockCountries: Country[] = [
        {
            code: 'US',
            name: 'United States',
            currency: 'USD',
            continent: { name: 'North America' },
            capital: 'Washington D.C.',
            languages: [],
        },
        {
            code: 'BR',
            name: 'Brazil',
            currency: 'BRL',
            continent: { name: 'South America' },
            capital: 'Brasília',
            languages: [],
        },
    ];

    const mockSetSearch = vi.fn();
    const mockSetContinent = vi.fn();
    const mockSetCurrency = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders all filters', () => {
        render(
            <Filters
                countries={mockCountries}
                search=""
                setSearch={mockSetSearch}
                continent="all"
                setContinent={mockSetContinent}
                currency="all"
                setCurrency={mockSetCurrency}
            />,
        );

        expect(screen.getByRole('search', { name: /filtros de países/i })).toBeInTheDocument();
        expect(screen.getByLabelText(/buscar/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/filtrar por continente/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/filtrar por moneda/i)).toBeInTheDocument();
    });

    it('calls setSearch when typing in search input', () => {
        render(
            <Filters
                countries={mockCountries}
                search=""
                setSearch={mockSetSearch}
                continent="all"
                setContinent={mockSetContinent}
                currency="all"
                setCurrency={mockSetCurrency}
            />,
        );

        fireEvent.change(screen.getByLabelText(/buscar/i), {
            target: { value: 'Brazil' },
        });

        expect(mockSetSearch).toHaveBeenCalledWith('Brazil');
    });
});
