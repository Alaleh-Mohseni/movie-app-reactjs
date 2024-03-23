import { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "../../contexts/auth-provider";
import GenresProvider from "../../contexts/genres-provider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import Modal from '../Authentication/components/Modal';
import AllRoutes from "../../config/all-routes";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <AuthProvider>
        <Modal />
        <GenresProvider>
          <Header />
          <AllRoutes />
        </GenresProvider>
      </AuthProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;