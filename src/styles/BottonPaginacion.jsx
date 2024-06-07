export const BotonPaginacion = ({
    paginaActual,
    setPaginaActual,
    icon,
    sign,
  }) => {
    return (
      <li>
        <button
          className="text-white font-bold p-1 bg-red-500  hover:bg-red-700 border-1 border-red-700 "
          onClick={() =>
            setPaginaActual(
              sign === "+"
                ? paginaActual + 1
                : sign === "-"
                ? paginaActual - 1
                : paginaActual
            )
          }
        >
          {icon}
        </button>
      </li>
    );
  };
  