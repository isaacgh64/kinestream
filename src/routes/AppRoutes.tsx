import {Route, Routes } from "react-router"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import UserPage from "../pages/UserPage"
import FilmsPage from "../pages/FilmsPage"
import ItemPage from "../pages/ItemPage"

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/films" element={<FilmsPage/>} />
        <Route path="/content" element={<ItemPage/>} />
    </Routes>
  )
}
