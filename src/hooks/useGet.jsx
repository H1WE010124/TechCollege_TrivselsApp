import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";

export const useGet = (table) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [table + "_key"],
    queryFn: async () => {
      const { data, isLoading, error } = await supabase.from(table).select();

      if (error) {
        throw new Error(`Error ${error}`);
      }

      return data;
    },
    staleTime: 600 * 10, //data is fresh for 1 minute,
    cacheTime: 3000 * 10, //In cache for 5 minutes
    retry: 1, //Retry fetch once if fail on the first fetch
  });

  return { data, isLoading, error };
};
