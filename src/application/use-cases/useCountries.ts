import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '@/graphql/queries/getCountries';
import { Country } from '@/domain/entities/Country';

interface GetCountriesResponse {
    countries: Country[];
}

export const useCountries = () => {
    const { data, loading, error } = useQuery<GetCountriesResponse>(GET_COUNTRIES);

    return {
        countries: data?.countries ?? [],
        loading,
        error,
    };
};
