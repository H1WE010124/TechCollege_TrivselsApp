import { useQuery } from '@tanstack/react-query';
import { BackButton } from '../../components/BackButton/BackButton';
import { supabase } from '../../lib/supabaseClient';

export const AdminPage = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['studentResponses'],
    queryFn: async () => {
      const { data, error } = await supabase.from('student_responses').select('*');
      if (error) throw new Error(error.message);
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <>
      <BackButton page=''></BackButton>
      <p>Admin</p>
    </>
  );
};
