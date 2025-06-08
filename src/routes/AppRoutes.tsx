import {Route, Routes } from "react-router"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import UserPage from "../pages/UserPage"
import ItemPage from "../pages/ItemPage"
import StreamPage from "../pages/StreamPage"


export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/stream/tv/series" element={<StreamPage/>} />
        <Route path="/stream/movie/peliculas" element={<StreamPage/>} />
        <Route path="/content" element={<ItemPage/>} />
    </Routes>
  )
}
