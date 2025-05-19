import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CountriesGrid } from '@/presentation/components/countries/CountriesGrid';
import { describe, it, expect } from 'vitest';
import { mockCountries } from '@/__mocks__/countries';

describe('CountriesGrid', () => {
    it('renders country items', () => {
        render(
            <BrowserRouter>
                <CountriesGrid countries={mockCountries} />
            </BrowserRouter>,
        );

        expect(screen.getByText('United States')).toBeInTheDocument();
        expect(screen.getByText('France')).toBeInTheDocument();
    });
});
