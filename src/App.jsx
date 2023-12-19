import React from "react";
import Navbar from "./components/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import Contacto from "./pages/Contacto.jsx";
import Blog from "./pages/Blog.jsx";
import LayoutPublic from "./layouts/LayoutPublic.jsx";
import NotFound from "./pages/NotFound.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";

export const App = () => {
  return (
    <>
      <Navbar />


        <Routes>
          <Route element={<LayoutPublic/>} path="/">

          <Route element={<Inicio />} index></Route>
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<BlogDetails />} path="/blog/:id"></Route>
          <Route element={<NotFound />} path="*"></Route>

          </Route>
        </Routes>


    </>
  );
};
export default App;
