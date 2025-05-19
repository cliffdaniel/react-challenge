import { Loader } from '@/components/ui/loader';

export const CountriesLoading = () => (
    <div className="flex justify-center items-center min-h-[200px]">
        <Loader className="h-10 w-10" />
    </div>
);
