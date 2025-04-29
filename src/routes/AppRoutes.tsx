import {Route, Routes } from "react-router"
import HomePage from "../components/Home/HomePage"
import LoginPage from "../components/LogIn/LoginPage"

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
