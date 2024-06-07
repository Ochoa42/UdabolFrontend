import { MdClose } from "react-icons/md";
import { actualizarUsuario, crearUsuario } from "../../hooks/Usuarios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { ClosetIcon } from "../../styles/Svgs";
import { useEffect, useRef } from "react";
import { parseFechaParaFrom } from "../../utils/parseFecha";


export const Register =( {
  onShowModal,
  getAllUsuarios,
  showModal,
  userAActualizar
})=> {


const refUser = useRef(null);  

const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
} = useForm();



const resetForm =() =>{
  refUser.current.reset();
}

useEffect(()=>{
  if(userAActualizar){
    const newFecha = parseFechaParaFrom(userAActualizar?.birtdate);

    refUser.current.firstName.value = userAActualizar?.firstName;
    refUser.current.lastName.value = userAActualizar?.lastName;
    refUser.current.address.value = userAActualizar?.address;
    refUser.current.city.value = userAActualizar?.city;
    refUser.current.region.value = userAActualizar?.region;
    refUser.current.postalCode.value = userAActualizar?.postalCode;
    refUser.current.country.value = userAActualizar?.country;
    refUser.current.phone.value = userAActualizar?.phone;
    refUser.current.birtdate.value = newFecha;
  }else{
    resetForm();
  }
},[userAActualizar])



//submint para cargar el formulario
const submit = (data) => {
  if (userAActualizar) {
    data.id = userAActualizar.id; // Ensure the ID is included
    toast.promise(
      actualizarUsuario(data, onShowModal),
      {
        loading: <b className="font-semibold text-[#00072d]">Actualizando usuario</b>,
        success: <b className="font-semibold text-green-600">Usuario actualizado con exito!!</b>,
        error: <b className="font-semibold text-red-500">Error al actualizar el usuario!!</b>,
      },
      {
        iconTheme: { primary: "#0e6ba8" },
      }
    );
  } else {
      toast.promise(
        crearUsuario(data, getAllUsuarios, reset, onShowModal),
        {
          loading: (
            <b className="font-semibold text-[#00072d]">Creando usuario</b>
          ),
          success: (
            <b className="font-semibold text-green-600">
              Usuario creado con exito!!
            </b>
          ),
          error: (
            <b className="font-semibold text-red-500">
              Error al crear el usuario!!
            </b>
          ),
        },
        {
          iconTheme: {
            primary: "#0e6ba8",
          },
        }
      );
    }
  };

// renderizando el formulario
return(
        <section 
            className={`fixed blur-fondo grid bottom-0 top-0 left-0 right-0 place-items-center transform transition-transform ease-in-out duration-300 overflow-y-auto ${
                showModal ? "translate-x-0 z-20" : "translate-x-full z-20"
              }`}
        >
            <form
                ref={refUser}
                onSubmit={handleSubmit(submit)}
                className="absolute bg-white w-full md:w-[min(100%,700px)] flex flex-col px-6 py-4 gap-3 rounded-xl shadow-2xl top-2 md:top-1/2 md:-translate-y-1/2"
            >
                <h2 className="text-center font-bold text-2xl">
                {userAActualizar ? "ACTUALIZAR USUARIO" : "CREAR USUARIO"}
                </h2>
                <button
                type="button"
                onClick={() => onShowModal()}
                className="absolute right-1 top-1"
                >
                  {<ClosetIcon w={26} h={26}/>}
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5" >
                    <div className="[&>div]:grid [&>div]:gap-1 [&>div>label]:font-medium [&>div>input]:outline-none [&>div>input]:rounded-lg [&>div>input]:pl-8 [&>div>input]:pr-2 [&>div>input]:py-2 [&>div]:mb-5 [&>div>input]:text-slate-700 [&>div]:relative">
                        <div>
                            <label htmlFor="firstName">
                                Nombre
                            </label>
                            <input
                            className={`input-field focus:ring-1 focus:border-blue-500 focus:ring-blue-300 border ${
                                errors.firstName ? "border-red-400" : "border-gray-300"
                              }`} 
                            type="text"
                            id="firstName"
                            autoComplete="off"
                            placeholder="Nombre Completo" 
                            {...register("firstName",{
                                required:{
                                    value:true,
                                    message:"Campo requerido"
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Supero la cantidad maxima 50 caracteres",
                                  },
                                  minLength: {
                                    value: 1,
                                    message: "Minimo 1 caracter",
                                  },
                            })}
                            />
                            {errors.firstName && (
                                <span className="text-red-500 absolute -bottom-1/4 text-xs">
                                {errors.firstName.message}
                                </span>
                            )}
                            <div className="absolute icon top-7 bottom-0 w-8 grid place-content-center text-xl text-slate-500 focus:text-black">
                                <i className="bx bxs-user"></i>
                            </div>
                        </div>
                         
                        <div>
                            <label htmlFor="lastName">Apellidos</label>
                            <input 
                            className={`input-field focus:ring-1 focus:border-blue-500 focus:ring-blue-300 border ${
                                errors.lastName ? "border-red-400" : "border-gray-300"
                              }`}
                            type="text"
                            id="lastName"
                            autoComplete="off"
                            placeholder="Apellido Paterno"
                            {...register("lastName",{
                                required:{
                                    value:true,
                                    message:"Campo requerido"
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Supero la cantidad maxima 50 caracteres",
                                  },
                                  minLength: {
                                    value: 1,
                                    message: "Minimo 1 caracter",
                                  },
                            })} 
                            />
                            {errors.lastName && (
                            <span className="text-red-500 absolute -bottom-1/4 text-xs">
                            {errors.lastName.message}
                            </span>
                            )}
                            <div className="absolute icon top-7 bottom-0 w-8 grid place-content-center text-xl text-slate-500 focus:text-black">
                            <i className="bx bxs-user"></i>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="birtdate">Fecha Nacimiento</label>
                            <input
                             className={`input-field focus:ring-1 focus:border-blue-500 focus:ring-blue-300 border ${
                                errors.birtdate ? "border-red-400" : "border-gray-300"
                              }`}
                            type="date"
                            id="birtdate"
                            autoComplete="off"
                            {...register("birtdate",{
                                required:{
                                    value:true,
                                    message:"campo requerido"
                                },
                            })} 
                            />
                            {errors.birtdate && (
                            <span className="text-red-500 absolute -bottom-1/4 text-xs">
                            {errors.birtdate.message}
                            </span>
                            )}
                            <div className="absolute icon top-7 bottom-0 w-8 grid place-content-center text-xl text-slate-500 focus:text-black" >
                                <i className="bx bxs-calendar"></i>
                            </div>
                        </div>

                        <div>
                          <label htmlFor="address">Direccion</label>
                          <input 
                          className={`input-field focus:ring-1 focus:border-blue-500 focus:ring-blue-300 border ${
                            errors.address ? "border-red-400" : "border-gray-300"
                          }`}
                          type="text"
                          id="address"
                          autoComplete="off"
                          placeholder="Direccion"
                          {...register("address", {
                            maxLength: {
                              value: 50,
                              message: "Supero la cantidad maxima 50 caracteres",
                            },
                          })} 
                          />
                          {errors.address && (
                          <span className="text-red-500 absolute -bottom-1/4 text-xs">
                          {errors.address.message}
                          </span>
                          )}
                          <div className="absolute icon top-7 bottom-0 w-8 grid place-content-center text-xl text-slate-500 focus:text-black">
                          <i className="bx bxs-user"></i>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="city">Ciudad</label>
                          <input 
                          className={`input-field focus:ring-1 focus:border-blue-500 focus:ring-blue-300 border ${
                            errors.city ? "border-red-400" : "border-gray-300"
                          }`}
                          type="text"
                          id="city"
                          autoComplete="off"
                          {...register("city", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                          })} 
                          />
                          {errors.city && (
                          <span className="text-red-500 absolute -bottom-1/4 text-xs">
                          {errors.city.message}
                          </span>
                          )}
                          <div className="absolute icon top-7 bottom-0 w-8 grid place-content-center text-xl text-slate-500 focus:text-black">
                        <i className="bx bxs-calendar"></i>
                          </div>
                        </div>
                      </div>


                    <div className="[&>div]:grid [&>div]:gap-1 [&>div>label]:font-medium [&>div>input]:outline-none [&>div>input]:rounded-lg [&>div>input]:pl-8 [&>div>input]:py-2 [&>div]:mb-5 [&>div>input]:text-slate-700 [&>div]:relative" >
                     <div>
                        <label htmlFor="region">Region</label>
                        <input
                        className={`input-field focus:ring-1 focus:border-blue-500 focus:ring-blue-300 border ${
                          errors.region ? "border-red-400" : "border-gray-300"
                        }`}
                        type="text" 
                        id="region"
                        autoComplete="off"
                        placeholder="Region"
                        {...register("region", {
                          maxLength: {
                            value: 15,
                            message: "Supero la cantidad maxima 15 caracteres",
                          },
                        })}
                        />
                        {errors.region && (
                        <span className="text-red-500 absolute -bottom-1/4 text-xs">
                        {errors.region.message}
                        </span>
                        )}
                        <div className="absolute icon top-7 bottom-0 w-8 grid place-content-center text-xl text-slate-500 focus:text-black">
                        <i className="bx bxs-phone"></i>
                      </div>
                     </div>

                      <div>
                        <label htmlFor="postalCode">Codigo Postal</label>
                        <input 
                        className={`input-field focus:ring-1 focus:border-blue-500 focus:ring-blue-300 border ${
                          errors.postalCode ? "border-red-400" : "border-gray-300"
                        }`}
                        type="text" 
                        autoComplete="off"
                        placeholder="Codigo Postal"
                        id="postalCode"
                        {...register("postalCode", {
                          maxLength: {
                            value: 15,
                            message: "Supero la cantidad maxima 15 caracteres",
                          },
                        })}
                        />
                        {errors.postalCode && (
                        <span className="text-red-500 absolute -bottom-1/4 text-xs">
                        {errors.postalCode.message}
                        </span>
                        )}
                        <div className="absolute icon top-7 bottom-0 w-8 grid place-content-center text-xl text-slate-500 focus:text-black">
                        <i className="bx bxs-phone"></i>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="country">Pais</label>
                        <input
                         className={`input-field focus:ring-1 focus:border-blue-500 focus:ring-blue-300 border ${
                          errors.country ? "border-red-400" : "border-gray-300"
                        }`}
                        type="text"
                        autoComplete="off"
                        placeholder="Pais"
                        id="country" 
                        {...register("country", {
                          maxLength: {
                            value: 15,
                            message: "Supero la cantidad maxima 15 caracteres",
                          },
                        })}
                        />
                        {errors.country && (
                        <span className="text-red-500 absolute -bottom-1/4 text-xs">
                        {errors.country.message}
                        </span>
                        )}
                        <div className="absolute icon top-7 bottom-0 w-8 grid place-content-center text-xl text-slate-500 focus:text-black">
                        <i className="bx bxs-phone"></i>
                        </div>
                      </div>

                        <div>
                          <label htmlFor="phone">Telefono</label>
                          <input
                          className={`input-field focus:ring-1 focus:border-blue-500 focus:ring-blue-300 border ${
                            errors.phone ? "border-red-400" : "border-gray-300"
                          }`} 
                          type="text"
                          id="phone"
                          autoComplete="off"
                          placeholder="Telefono"
                          {...register("phone", {
                            maxLength: {
                              value: 15,
                              message: "Supero la cantidad maxima 15 caracteres",
                            },
                          })}
                          />
                          {errors.phone && (
                          <span className="text-red-500 absolute -bottom-1/4 text-xs">
                          {errors.phone.message}
                          </span>
                          )}
                          <div className="absolute icon top-7 bottom-0 w-8 grid place-content-center text-xl text-slate-500 focus:text-black">
                          <i className="bx bxs-phone"></i>
                          </div>
                        </div>
                    </div>
                </div>
                <button
                type="submit"
                className="bg-red-500 hover:bg-red-700
                transition-transform duration-500 hover:scale-95 text-white font-medium py-2 text-xl rounded-full uppercase"
                >
                {userAActualizar ? "Actualizar Usuario":"Registrar"}
                </button>
            </form>
        </section>
    );
};