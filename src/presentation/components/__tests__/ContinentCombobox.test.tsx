import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ContinentCombobox } from '@/presentation/components/ui/ContinentCombobox';
import { Country } from '@/domain/entities/Country';

describe('ContinentCombobox', () => {
    const mockCountries: Country[] = [
        {
            code: 'AR',
            name: 'Argentina',
            currency: 'ARS',
            continent: { name: 'South America' },
            capital: null,
            languages: [],
        },
        {
            code: 'CL',
            name: 'Chile',
            currency: 'CLP',
            continent: { name: 'South America' },
            capital: null,
            languages: [],
        },
        {
            code: 'FR',
            name: 'France',
            currency: 'EUR',
            continent: { name: 'Europe' },
            capital: null,
            languages: [],
        },
    ];

    const setup = () => {
        const setContinent = vi.fn();

        render(
            <ContinentCombobox
                countries={mockCountries}
                continent="all"
                setContinent={setContinent}
            />,
        );

        return { setContinent };
    };

    it('should render the label', () => {
        setup();
        expect(screen.getByLabelText('Filtrar por continente')).toBeInTheDocument();
    });

    it('should call setContinent when an option is clicked', async () => {
        const { setContinent } = setup();
        fireEvent.click(screen.getByRole('combobox'));
        fireEvent.click(await screen.findByText('Europe'));
        expect(setContinent).toHaveBeenCalledWith('Europe');
    });
});
