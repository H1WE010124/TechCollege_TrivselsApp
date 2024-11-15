import { useEffect } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { supabase } from "../../lib/supabaseClient";

export const AdminPage = () => {
  const getData = async () => {
    const { data } = await supabase.from("student_responses").select("*");
    console.log(
      "Student data: ",
      data
        .filter(
          (item) =>
            new Date(item.created_at) >= new Date("2024-11-13T08:00") &&
            new Date(item.created_at) <= new Date("2024-11-14T08:00")
        )
        .sort((a, b) => a.student_id > b.student_id)
    );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <BackButton page=""></BackButton>
      <p>Admin</p>
    </>
  );
};
