import { useQuery } from "@tanstack/react-query"

export const useGet = (url) => {
    const { data, isLoading, error } = useQuery({
        queryKey: [url],
        queryFn: async () => {
            const res  = await fetch(url);

            if (!res.ok) {
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            }
            
            const data = await res.json();
            return data;
        },
        staleTime: 600 * 10, //data is fresh for 1 minute,
        cacheTime: 3000 * 10, //In cache for 5 minutes
        retry: 1, //Retry fetch once if fail on the first fetch
    });

    return { data, isLoading, error }
}