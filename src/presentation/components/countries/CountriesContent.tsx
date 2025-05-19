import { CountriesGrid } from '@/presentation/components/countries/CountriesGrid';
import { Country } from '@/domain/entities/Country';

type Props = {
    countries: Country[];
};

export const CountriesContent = ({ countries }: Props) => {
    return <CountriesGrid countries={countries} />;
};
