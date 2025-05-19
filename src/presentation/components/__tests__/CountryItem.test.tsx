import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CountryItem } from '@/presentation/components/countries/CountryItem';
import { describe, it, expect } from 'vitest';
import { mockCountry } from '@/__mocks__/countries';

describe('CountryItem', () => {
    it('renders country data correctly', () => {
        render(
            <BrowserRouter>
                <CountryItem country={mockCountry} />
            </BrowserRouter>,
        );

        expect(screen.getByText('United States')).toBeInTheDocument();
        expect(screen.getByText('US')).toBeInTheDocument();
        expect(screen.getByText('USD')).toBeInTheDocument();
        expect(screen.getByText('North America')).toBeInTheDocument();
    });
});
