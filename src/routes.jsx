import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landingpage />} />
            </Routes>
        </BrowserRouter>
    )
};
export default AppRouter;