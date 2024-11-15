import { Outlet } from "react-router-dom";
import {ThemeSwitcher} from '../components/ThemeSwitcher/ThemeSwitcher'

export const MainLayout = () => {
  return (
    <>
    <ThemeSwitcher></ThemeSwitcher>
      <Outlet />
    </>
  );
};
