import { BotonPaginacion } from "./BottonPaginacion";
export const ShowBotonesPaginacion = ({
  paginaInicial,
  paginaFinal,
  paginaActual,
  setPaginaActual,
  paginas,
}) => {
  return (
    <>
      <ul className="flex gap-1 justify-center items-center flex-wrap">
        {paginaInicial > 1 && (
          <BotonPaginacion
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
            icon={"<<"}
            sign={"-"}
          />
        )}

        {Array.from({ length: paginaFinal - paginaInicial + 1 }).map(
          (_, index) => {
            const page = paginaInicial + index;
            return (
              <li key={index}>
                <button
                  className={`text-black rounded-full  font-semibold p-3 border shadow-xl transition-all duration-700 ${
                    page === paginaActual
                      ? "bg-[#ff0000] text-white"
                      : "border-slate-200 bg-white hover:border-[#ff0000] hover:scale-95 "
                  }`}
                  onClick={() => setPaginaActual(page)}
                >
                  {page}
                </button>
              </li>
            );
          }
        )}

        {paginaFinal < paginas.length && (
          <BotonPaginacion
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
            icon={">>"}
            sign={"+"}
          />
        )}
      </ul>
      <span className="flex justify-center items-center gap-1">
        <span className="text-blue-500">{paginaActual}</span>
        <p className="text-sm">de</p>
        <span className="text-blue-500">{paginas.length}</span>
      </span>
    </>
  );
};
