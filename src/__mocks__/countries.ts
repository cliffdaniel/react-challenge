import { Country } from '@/domain/entities/Country';

export const mockCountries: Country[] = [
    {
        code: 'US',
        name: 'United States',
        currency: 'USD',
        continent: { name: 'North America' },
        capital: 'Washington D.C.',
        languages: [{ code: 'en', name: 'English' }],
    },
    {
        code: 'FR',
        name: 'France',
        currency: 'EUR',
        continent: { name: 'Europe' },
        capital: 'Paris',
        languages: [{ code: 'fr', name: 'French' }],
    },
];

export const mockCountry: Country = {
    code: 'US',
    name: 'United States',
    currency: 'USD',
    continent: { name: 'North America' },
    capital: 'Washington D.C.',
    languages: [{ code: 'en', name: 'English' }],
};
