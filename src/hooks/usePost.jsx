import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";

export const usePost = (table, data) => {
  const { error } = useQuery({
    queryKey: [table, data],
    queryFn: async () => {
      const { error } = await supabase.from(table).insert(data);

      if (error) {
        throw new Error(`Error: ${error}`);
      }

      return error;
    },
    staleTime: 600 * 10, //data is fresh for 1 minute,
    cacheTime: 3000 * 10, //In cache for 5 minutes
    retry: 1, //Retry fetch once if fail on the first fetch
  });

  return { error };
};
