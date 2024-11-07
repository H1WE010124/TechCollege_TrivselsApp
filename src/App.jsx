import "./App.css";
import { AdminLoginPage } from "./components/Admin_Login_Page/AdminLoginPage";
import { UserProvider } from "./components/UserContext/UserContext";

function App() {
 

  return (
    <UserProvider>
     <AdminLoginPage />
    </UserProvider>
  );
}

export default App;
