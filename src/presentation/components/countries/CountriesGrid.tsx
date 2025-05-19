import { Country } from '@/domain/entities/Country';
import { CountryItem } from '@/presentation/components/countries/CountryItem';

interface CountriesGridProps {
    countries: Country[];
}

export const CountriesGrid = ({ countries }: CountriesGridProps) => {
    if (countries.length === 0) {
        return (
            <div className="text-center py-20 px-10">
                <h2 className="font-bold text-2xl md:text-4xl mb-4">No se encontraron países.</h2>
            </div>
        );
    }

    return (
        <section className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center justify-center gap-y-10 gap-x-8 mt-10 mb-5">
            {countries.map((country) => (
                <CountryItem key={country.code} country={country} />
            ))}
        </section>
    );
};
