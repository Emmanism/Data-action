import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/publicPages/landingPage/HomePage";
import { paths } from "@routes/paths";
import Layout from "./layouts/layout";
import ConsultationPage from "@pages/cosultation_page";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path={paths.Index} element={<Layout />}>
          <Route index element={<ConsultationPage />} />
          <Route
            path="*"
            element={
              <div className="text-align-center justify-center items-center">
                <h1 className="text-center py-20 text-black text-[82px] font-bold">
                  404
                  <span className="font-medium"> || </span>
                  <span className="text-black text-[62px] font-medium">
                    Page not found
                  </span>
                </h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router> 
  );
}

export default App;
