import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotDound from "./pages/NotFound";

const Router = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<Home/>}
            />

            <Route
                path="/*"
                element={<NotDound/>}
            />
        </Routes>
    )
}

export default Router