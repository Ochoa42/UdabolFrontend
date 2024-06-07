import toast from "react-hot-toast";
import { ClosetIcon } from "./Svgs";
import { eliminarUsuario } from "../hooks/Usuarios";


export const ConfirmarEliminarUsuario = ({
showEliminarUsuario,
setShowEliminarUser,
usuarioAEliminar,
}) => {
    return(
        <section
        className={`fixed top-0 bottom-0 left-0 right-0 blur-bg flex justify-center items-center transform transition-transform ease-in-out duration-300 ${
            showEliminarUsuario ? "translate-y-0 z-20" : "translate-y-full z-20"
          }`}
        >
        <div className="relative w-[min(100%,_280px)] bg-[#fff]  text-center grid gap-1 p-2 rounded-lg text-black border-2 border-[#0a2472]">
        <div className="pb-3">
            <button
            className="absolute text-[#0a2472] top-1 right-1 transition-colors hover:bg-[#0e6ba8] rounded-lg hover:text-white"
            type="button"
            onClick={() => setShowEliminarUser(false)}
            >
                <ClosetIcon w={26} h={26}/>
            </button>        
        </div>
        <div>
            <p className="font-medium"> 
                Seguro que desea eliminar este usuario
            </p>
        </div>
        <button
            className="bg-[#0e6ba8] text-white p-2 rounded-2xl  top-1 right-1 transition-colors hover:bg-[#0a2472]"
            type="submit"
            onClick={()=>{
                setShowEliminarUser(false);
                toast.promise(
                    eliminarUsuario(
                        usuarioAEliminar,
                    ),{
                       loading:(
                        <b className="font-semibold text-[#00072d]">
                            Eliminando Usuario...
                        </b>
                       ),
                       success: (
                        <b className="text-green-600 font-semibold">
                          Usuario eliminado con exito
                        </b>
                      ),
                      error: (
                        <b className="red-500 font-semibold">
                          No se puedo eliminar este producto
                        </b>
                      ),
                    },
                    {
                        iconTheme:{
                            primary:"#0e6ba8",
                        },
                    }
                );
            }}
        >
            Confirmar
        </button>
       </div>
    </section>
);
}