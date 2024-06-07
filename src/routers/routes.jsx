import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Usuario } from "../pages/Usuario/Usuario";
import { Productos } from "../pages/Productos";
import { Clientes } from "../pages/Clientes";
import { Socios } from "../pages/Socios";
import { Canchas } from "../pages/Canchas";
export function MyRoutes() {
  return (
   
     
      <Routes>
        <Route path="/" element={<Usuario />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/canchas" element={<Canchas />} />
        <Route path="/socios" element={<Socios />} />
      </Routes>
    
  );
}
