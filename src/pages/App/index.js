import { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import AuthProvider from "../../contexts/auth-provider";
import GenresProvider from "../../contexts/genres-provider";
import SearchProvider from "../../contexts/search-provider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import ModalLogin from "../../components/ModalLogin";
import ModalRegister from "../../components/ModalRegister";
import AllRoutes from "../../config/all-routes";


const App = () => {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
          setTimeout(() => setLoading(false), 1000);
    }, []);
  
  return loading ? (
    <Loading/>
  ) : (
    <BrowserRouter>
      <AuthProvider>
        <ModalLogin />
        <ModalRegister />
        <SearchProvider>
          <GenresProvider>
            <Header />
            <AllRoutes />
          </GenresProvider>
        </SearchProvider>
      </AuthProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
