import { createBrowserRouter , createRoutesFromElements, Route } from "react-router-dom";    
import Layout from "../pages/Layout";
import HomePage from "../pages";
import LoginPage from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Register from "../pages/Register";

const userData = JSON.parse(localStorage.getItem("userData") || "{}");

const router = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path="/" element={<Layout />}>
            <Route index element={
                <ProtectedRoute isAllowed={userData?.jwt} redirectPath="/login">
                    <HomePage />
                </ProtectedRoute>
            } />
            <Route path="login" element={
                <ProtectedRoute isAllowed={!userData?.jwt} redirectPath="/">
                    <LoginPage />
                </ProtectedRoute>
            } />
            <Route path="register" element={
                <ProtectedRoute isAllowed={!userData?.jwt} redirectPath="/">
                    <Register />
                </ProtectedRoute>
            } />
        </Route>
        
    </>
    )
)

export default router;