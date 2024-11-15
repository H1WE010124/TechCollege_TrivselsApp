import { BackButton } from "../../components/BackButton/BackButton";
import { SvarGraf } from "../../components/SvarGraf/SvarGraf";

export const AdminPage = () => {
  return (
    <>
      <BackButton page="login"></BackButton>
      <Typography variant="p">Admin</Typography>

      <SvarGraf />
    </>
  );
};
