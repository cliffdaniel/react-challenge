import { render, screen } from '@testing-library/react';
import { CurrencyCombobox } from '../ui/CurrencyCombobox';
import { describe, it, expect } from 'vitest';
import { mockCountries } from '@/__mocks__/countries';

describe('CurrencyCombobox', () => {
    it('renders currency combobox with options', () => {
        render(
            <CurrencyCombobox countries={mockCountries} currency="all" setCurrency={() => {}} />,
        );

        expect(screen.getByLabelText('Filtrar por moneda')).toBeInTheDocument();
        expect(screen.getByText('Todos')).toBeInTheDocument();
    });
});
