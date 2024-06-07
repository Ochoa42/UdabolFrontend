import { axiosUdabol } from "../utils/configAxios";



/**
 * Update a user by sending a PUT request to the API.
 * 
 * @param {Object} data - The user data to be updated.
 * @param {Function} onShowModal - A callback function to show the modal.
 * @returns {Promise} - A promise that resolves when the request is complete.
 */

export function actualizarUsuario(data, onShowModal) {
    return axiosUdabol.put("/api/Usuario", data)
    .then(() => { 
        onShowModal(); 
    })
    .catch((err) => { console.log(err); throw err })
  }


export const crearUsuario = (data, getAllUsuarios, resetForm, onShowModal) => {
    return axiosUdabol
      .post("/api/Usuario", data)
      .then(({ data }) => { getAllUsuarios(); resetForm(); onShowModal(); return data })
      .catch((err) => { console.log(err); throw err });
}

export async function eliminarUsuario(id){
  return await axiosUdabol
  .delete(`/api/Usuario/${id}`)
  .catch((err)=> console.log(err))
}

export async function getAllUsuarios(){
  return await axiosUdabol.get("/api/Usuario").then(({data}) => data).catch((err)=>console.log(err));
}

