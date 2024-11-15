import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

export function AdminContextProvider({ children }) {
  //holder styr på admin
  const [adminUser, setAdminUser] = useState(null);

  return (
    <AdminContext.Provider value={{ setAdminUser, adminUser }}>
      {children}
    </AdminContext.Provider>
  );
}
