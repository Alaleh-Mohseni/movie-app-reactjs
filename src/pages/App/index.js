import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import DataProvider from "../../contexts/provider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalLogin from "../../components/ModalLogin";
import ModalRegister from "../../components/ModalRegister";
import AllRoutes from "../../config/all-routes";


const App = () => {

  return (
    <BrowserRouter>
      <DataProvider>
        <ModalLogin />
        <ModalRegister />
        <Header />
        <AllRoutes />
        <Footer />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;