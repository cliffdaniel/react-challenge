import { render, screen } from '@testing-library/react';
import { CountryDetailPage } from '../CountryDetailPage';
import { describe, it, expect, vi } from 'vitest';
import { useCountries } from '@/application/use-cases/useCountries';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

vi.mock('@/application/use-cases/useCountries', () => ({
    useCountries: () => ({
        countries: [
            {
                code: 'US',
                name: 'United States',
                currency: 'USD',
                continent: { name: 'North America' },
                capital: 'Washington D.C.',
                languages: [{ code: 'en', name: 'English' }],
            },
        ],
    }),
}));

describe('CountryDetailPage', () => {
    it('renders country details if country exists', () => {
        render(
            <MemoryRouter initialEntries={['/country/US']}>
                <Routes>
                    <Route path="/country/:code" element={<CountryDetailPage />} />
                </Routes>
            </MemoryRouter>,
        );

        expect(screen.getByText('United States')).toBeInTheDocument();
        expect(screen.getByText('Código: US')).toBeInTheDocument();
        expect(screen.getByText('Washington D.C.')).toBeInTheDocument();
        expect(screen.getByText('English')).toBeInTheDocument();
    });

    it('shows not found message if country does not exist', () => {
        render(
            <MemoryRouter initialEntries={['/country/XX']}>
                <Routes>
                    <Route path="/country/:code" element={<CountryDetailPage />} />
                </Routes>
            </MemoryRouter>,
        );

        expect(screen.getByText('País no encontrado.')).toBeInTheDocument();
    });
});
