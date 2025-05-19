'use client';

import { useNavigate, useParams } from 'react-router-dom';
import { useCountries } from '@/application/use-cases/useCountries';
import React from 'react';
import { ArrowLeftIcon } from 'lucide-react';

export const CountryDetailPage = () => {
    const { countries } = useCountries();
    const { code } = useParams<{ code: string }>();
    const navigate = useNavigate();

    const country = countries.find((c) => c.code === code);

    if (!country) {
        return (
            <main className="min-h-screen flex items-center justify-center p-8">
                <h1 className="text-2xl font-bold">País no encontrado.</h1>
            </main>
        );
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-start p-8 space-y-8">
            <div className="w-full max-w-2xl flex items-center">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="flex items-center text-primary hover:underline"
                    aria-label="Volver al listado de países"
                >
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Volver
                </button>
            </div>

            <article className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
                <header className="flex flex-col items-center mb-6 text-center">
                    <img
                        src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
                        alt={`Bandera de ${country.name}`}
                        className="w-32 h-20 object-cover rounded-md mb-4"
                    />
                    <h1 className="text-4xl font-bold mb-2">{country.name}</h1>
                    <p className="text-lg text-gray-600">Código: {country.code}</p>
                </header>

                <section className="space-y-4">
                    <p>
                        <span className="font-semibold">Moneda:</span>{' '}
                        {country.currency || 'No disponible'}
                    </p>
                    <p>
                        <span className="font-semibold">Continente:</span>{' '}
                        {country.continent?.name || 'No disponible'}
                    </p>
                    <p>
                        <span className="font-semibold">Capital:</span>{' '}
                        {country.capital || 'No disponible'}
                    </p>
                    <div>
                        <h2 className="font-semibold mb-2">Idiomas:</h2>
                        {country.languages && country.languages.length > 0 ? (
                            <ul className="list-disc list-inside">
                                {country.languages.map((lang) => (
                                    <li key={lang.code}>{lang.name}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No hay idiomas disponibles.</p>
                        )}
                    </div>
                </section>
            </article>
        </main>
    );
};
