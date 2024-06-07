import { ShowBotonesPaginacion } from "../styles/ShowBotonesPaginacion";

export const ContainerLayautViews = ({
  children,
  objetos,
  paginaInicial,
  paginaFinal,
  paginaActual,
  setPaginaActual,
  paginas,
}) => {
  return (
    <section className="mt-8 px-10">
      {objetos === null ? (
        <section className="absolute top-1/2 translate-x-1/2 right-1/2">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      ) : (children)}
      <div className="grid justify-center gap-1 pt-2 md:hidden">
        {/**PARA MOVIL */}
        {paginas?.length > 1 && (
          <ShowBotonesPaginacion
            paginaInicial={paginaInicial}
            paginaFinal={paginaFinal}
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
            paginas={paginas}
          />
        )}
      </div>
    </section>
  );
};
