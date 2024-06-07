export const ContainerLayautPrincipalViews = ({
    children,
    onShowModal,
    tituloButon,
    tituloLista,
    Icon,
  }) => {
    return (
      <main className="h-screen bg-slate-200">
        <div className="mb-2 mt-1 px-10 py-5">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-slate-900">{tituloLista}</h2>
            {tituloButon && (
              <button
                className="flex gap-1 p-2 rounded-lg text-slate-900 bg-white transition-colors hover:bg-slate-100 border border-slate-400 font-medium"
                onClick={() => onShowModal()}
              >
                {tituloButon}
                <span>{Icon && <Icon />}</span>
              </button>
            )}
          </div>
        </div>
        {children}
      </main>
    );
  };
  