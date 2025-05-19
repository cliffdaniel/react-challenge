import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
    query GetCountries {
        countries {
            code
            name
            currency
            capital
            continent {
                name
            }
            languages {
                code
                name
            }
        }
    }
`;
