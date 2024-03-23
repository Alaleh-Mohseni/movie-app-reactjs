import { Route, Routes, Navigate } from "react-router-dom";

import * as paths from "./route-paths";
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import Genre from '../pages/Genre';
import AddMovie from "../pages/AddMovie";
import Profile from "../pages/Profile";
import AuthLayout from "../layouts/authLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import NotFound from '../components/NotFound'

const AllRoutes = () => {
    return (
        <Routes>
            <Route
                exact
                path={paths.HOME}
                element={<Home />}
            />
            <Route element={<AuthLayout />} >
                <Route
                    exact
                    path={paths.LOGIN}
                    element={<Login />}
                />
                <Route
                    exact
                    path={paths.REGISTER}
                    element={<Register />}
                />
            </Route>
            <Route
                exact
                path={paths.MOVIEDETAILS}
                element={<MovieDetails />}
            />
            <Route
                exact
                path={paths.GENRE}
                element={<Genre />}
            />
            <Route
                exact
                path={paths.PROFILE}
                element={<Profile />}
            />
            <Route
                exact
                path={paths.ADDMOVIE}
                element={<AddMovie />}
            />
            <Route
                exact
                path={paths.NOTFOUND}
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