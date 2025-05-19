export interface Country {
    code: string;
    name: string;
    currency: string | null;
    continent: {
        name: string;
    };
    capital: string | null;
    languages: {
        code: string;
        name: string;
    }[];
}
