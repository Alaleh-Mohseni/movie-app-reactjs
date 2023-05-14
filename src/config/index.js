import { Route, Routes, Navigate } from "react-router-dom";

import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgotPassword from '../components/ForgotPassword';
import MovieDetails from '../pages/MovieDetails';
import Genre from '../pages/Genre';
import AddMovie from "../pages/AddMovie";
import Profile from "../pages/Profile";
import NotFound from '../components/NotFound'

const AllRoutes = () => {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<Home />}
            />
            <Route
                exact
                path="/login"
                element={<LoginPage />}
            />
            <Route
                exact
                path="/login/forgotpassword"
                element={<ForgotPassword />}
            />
            <Route
                exact
                path="/register"
                element={<RegisterPage />}
            />
            <Route
                exact
                path="/moviedetails/:id"
                element={<MovieDetails />}
            />
            <Route
                exact
                path="/genre/:id"
                element={<Genre />}
            />
            <Route
                exact
                path="/profile"
                element={<Profile />}
            />
            <Route
                exact
                path="/newmovie"
                element={<AddMovie />}
            />
            <Route
                exact
                path="/404"
                element={<NotFound />}
            />
            <Route
                exact
                path="*"
                element={<Navigate to="/404" />}
            />
        </Routes>

    )
}

export default AllRoutes;