import { Link } from 'react-router-dom';
import { Country } from '@/domain/entities/Country';

interface CountryItemProps {
    country: Country;
}

export const CountryItem = ({ country }: CountryItemProps) => {
    return (
        <Link
            to={`/country/${country.code}`}
            aria-label={`Ver detalles de ${country.name}`}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-4 flex flex-col items-center text-center focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
            <article className="flex flex-col items-center">
                <img
                    src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
                    alt={`Bandera de ${country.name}`}
                    className="w-24 h-16 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-bold mb-2">{country.name}</h2>
                <div className="text-sm text-left w-full">
                    <p>
                        <span className="font-semibold">Código:</span> {country.code}
                    </p>
                    <p>
                        <span className="font-semibold">Moneda:</span> {country.currency ?? 'N/A'}
                    </p>
                    <p>
                        <span className="font-semibold">Continente:</span>{' '}
                        {country.continent?.name || 'N/A'}
                    </p>
                </div>
            </article>
        </Link>
    );
};
