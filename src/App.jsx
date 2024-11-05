import {Routes, Route, BrowserRouter } from "react-router-dom"
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { Login } from "./pages/login";
import { Admin } from "./pages/Admin";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Admin" element={<Admin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
