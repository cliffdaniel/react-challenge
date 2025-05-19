import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from '../ui/SearchInput';
import { describe, it, expect, vi } from 'vitest';

describe('SearchInput', () => {
    it('renders input and triggers on change', () => {
        const setSearch = vi.fn();

        render(<SearchInput search="test" setSearch={setSearch} />);

        const input = screen.getByLabelText('Buscar país');
        expect(input).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'Argentina' } });
        expect(setSearch).toHaveBeenCalledWith('Argentina');
    });
});
