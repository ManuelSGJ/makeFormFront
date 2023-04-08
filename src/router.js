import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CuestionariosPage from "./pages/CuestionariosPage";
import LoginPage from "./pages/LoginPage";
import NotDound from "./pages/NotFound";

const Router = () => {
    return(
        <Routes>
            <Route
                path='/'
                element={ <HomePage/> }
            />

            <Route
                path='/cuestionarios'
                element={ <CuestionariosPage/> }
            />

            <Route
                path='/login'
                element={ <LoginPage/> }
            />

            <Route
                path='/*'
                element={ <NotDound/> }
            />
        </Routes>
    )
}

export default Router