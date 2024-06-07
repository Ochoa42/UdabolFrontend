import { parseFecha } from "../../utils/parseFecha";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa"; 

export const UsuarioCard = ({
  usuario,
  handleEliminarUsuario,
  handleActualizarUsuario,
  colorInterca
}) =>{

    const Birtdate = parseFecha(usuario?.birtdate)

    return (
      <tr className={`bg-white [&>td]:p-3 text-sm [&>td]:text-gray-700 [&>td]:whitespace-nowrap ${colorInterca}`}>
        <td>{usuario?.id}</td>
        <td>{usuario?.firstName}</td>
        <td>{usuario?.lastName}</td>
        <td>{usuario?.address}</td>
        <td>{usuario?.city}</td>
        <td>{usuario?.region}</td>
        <td>{usuario?.postalCode}</td>
        <td>{usuario?.country}</td>
        <td>{usuario?.phone}</td>
        <td>{Birtdate}</td>
        <td>
          <div className="flex justify-center gap-4">
            <button onClick={() => handleEliminarUsuario(usuario?.id)}>
              <MdDelete style={{ fontSize: '20px', color: 'red' }}  />
            </button>
            <button onClick={() => handleActualizarUsuario(usuario)}>
              <FaPencilAlt style={{ fontSize: '20px', color: 'red' }}  />
            </button>
          </div>
        </td>
      </tr>
    );
}