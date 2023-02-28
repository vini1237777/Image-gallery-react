import { Navigate, Route, Routes } from "react-router-dom";
import HomeIndex from "./page/Home/Home.index";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="home" element={<HomeIndex/>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
