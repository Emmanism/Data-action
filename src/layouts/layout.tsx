import Footer from "@components/footer/footer";
import Navbar from "@components/navbar/navbar";
import { Outlet } from "react-router-dom";
import "@styles/tailwind.css";
import '@styles/index.css';


function Layout() {
  return (
    <>
    <div className={`flex flex-col min-h-screen transition-opacity duration-1000`}>
      <Navbar /> 
      <main>
         <Outlet /> 
      </main>
      <div>
       <Footer/>  
       </div>
    </div>
    </>
  );
}

export default Layout;