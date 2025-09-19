import { createBrowserRouter , createRoutesFromElements, Route } from "react-router-dom";    
import Layout from "../pages/Layout";
import HomePage from "../pages";
import LoginPage from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Register from "../pages/Register";

const isLogin = false;

const router = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path="/" element={<Layout />}>
            <Route index element={
                <ProtectedRoute isAllowed={isLogin} redirectPath="/login">
                    <HomePage />
                </ProtectedRoute>
            } />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<Register />} />
        </Route>
        
    </>
    )
)

export default router;