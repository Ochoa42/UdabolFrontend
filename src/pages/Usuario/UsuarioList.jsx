import { paginacion } from "../../utils/Paginacion";
import { UsuarioCard } from "./UsuarioCard";
import { useEffect, useState } from "react";
import { ShowBotonesPaginacion } from "../../styles/ShowBotonesPaginacion";

export const UsuarioList = ({
usuarios,
handleEliminarUsuarios,
handleActualizarUsuarios
}) => {

const [paginaActual, setPaginaActual] = useState(1);
const usuariosPorPagina = 5;
const {
    objetosEnPagina: usuariosEnPagina,
    paginas,
    paginaInicial,
    paginaFinal,
} = paginacion(paginaActual, usuarios, usuariosPorPagina);

useEffect(()=>{
console.log("estoes use2", usuarios)
console.log("esto es useren paginas2",usuariosEnPagina)
},[])

return (
    <section className="rounded-lg border border-slate-300 overflow-auto bg-white">
        {usuarios?.length === 0 ? (
          <div className="text-center text-2xl text-red-700">
            <span>En estos momentos no hay administradores registrados</span>
          </div>
        ) : (
          <>
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr className="[&>th]:p-3 [&>th]:text-sm [&>th]:font-semibold [&>th]:tracking-wide [&>th]:text-left">
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Ciudad</th>
                <th>Region</th>
                <th>Codigo Postal</th>
                <th>Pais</th>
                <th>Telefono</th>
                <th>Fecha de Nacimiento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-400">
              {usuariosEnPagina?.map((usuario,index) => (
                <UsuarioCard
                  key={usuario?.id}
                  usuario={usuario}
                  handleActualizarUsuario={handleActualizarUsuarios}
                  handleEliminarUsuario={handleEliminarUsuarios}
                  colorInterca={index % 2 === 0 ? "bg-red-200" : "bg-red-100"}
                />
              ))}
            </tbody>
          </table>
          <div className="grid justify-center gap-1 pt-2">
            {paginas.length > 1 && (
              <ShowBotonesPaginacion
                paginaInicial={paginaInicial}
                paginaFinal={paginaFinal}
                paginaActual={paginaActual}
                setPaginaActual={setPaginaActual}
                paginas={paginas}
              />
            )}
          </div>
          </>
        )}
      </section>
);
}