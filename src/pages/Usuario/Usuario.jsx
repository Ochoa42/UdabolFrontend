import { useEffect } from "react";
import styled from "styled-components";
import { axiosUdabol } from "../../utils/configAxios";
import { ContainerLayautViews } from "../../styles/ContainerLayautViews";
import { UsuarioList } from "./UsuarioList";
import { useState } from "react";
import { paginacion } from "../../utils/Paginacion";
import { ContainerLayautPrincipalViews } from "../../styles/ContainerLayautPrincipalViews";
import { ShowBotonesPaginacion } from "../../styles/ShowBotonesPaginacion";
import { Register } from "./UsuarioRegister";
import { ConfirmarEliminarUsuario } from "../../styles/ConfirmarEliminarUsuario";
import { getAllUsuarios } from "../../hooks/Usuarios";


export function Usuario() {
const [usuarios, setUsuarios] = useState(null);
const [usuario,setUsuario] = useState(null);
const [paginaActual, setPaginaActual] = useState(1);
const [showModal, setShowModal] = useState(false);
const tituloButon = "REGISTRAR USUARIOS";
const tituloLista = "USUARIOS";
const [showEliminarUsuario, setShowEliminarUsuario] = useState(false);

const usuariosPorPagina = 10;

const onShowModal = () => {
  showModal && setUsuario(null);
  setShowModal(!showModal)
};


useEffect(() => {
 managerGetUsuarios(); 
});

useEffect(() => {
  if (usuarios !== null) {
    console.log("esto es:", usuarios);
    console.log("esto es pagActual:",paginaActual)
    console.log("esto es usuxPagin:",usuariosPorPagina)
    console.log("esto es objetos en pag:",usuariosEnPagina)

  }

}, []);

const managerGetUsuarios = () => {
  getAllUsuarios()
  .then((data) => setUsuarios(data))
  .catch((err) => console.log(err));
}

const {
  objetosEnPagina: usuariosEnPagina,
  paginas,
  paginaInicial,
  paginaFinal,
} = paginacion(paginaActual, usuarios, usuariosPorPagina);


const handleEliminarUsuarios = (id) =>{
    setUsuario(id);
    setShowEliminarUsuario(true)
};


 const handleActualizarUsuario = (UsuarioUpdate) => {
  setUsuario(UsuarioUpdate);
  onShowModal();
};

return (
  <ContainerLayautPrincipalViews
    onShowModal={onShowModal}
    tituloButon={tituloButon}
    tituloLista={tituloLista}
  >
    {showModal && (
    <Register
    onShowModal={onShowModal}
    getAllUsuarios={getAllUsuarios}
    showModal={showModal}
    userAActualizar={usuario}
    />
    )}
    {
      <ConfirmarEliminarUsuario
      showEliminarUsuario={showEliminarUsuario}
      setShowEliminarUser={setShowEliminarUsuario}
      usuarioAEliminar={usuario}
    />
    }
    <ContainerLayautViews
    objetos={usuarios}
    paginaInicial={paginaInicial}
    paginaFinal={paginaFinal}
    paginaActual={paginaActual}
    setPaginaActual={setPaginaActual}
    paginas={paginas} 
  >
  
    <div className="rounded-lg shadow overflow-y-auto hidden md:block">
      {<UsuarioList 
        usuarios={usuarios}
        handleEliminarUsuarios={handleEliminarUsuarios}
        handleActualizarUsuarios={handleActualizarUsuario}
       />}
    </div>
  </ContainerLayautViews>
  </ContainerLayautPrincipalViews>
);
}