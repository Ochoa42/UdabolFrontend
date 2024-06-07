export const paginacion = (paginaActual, listaObjetos, objetosPorPagina) => {

  if(!Array.isArray(listaObjetos)){
    console.error('lista de objetos is not an array:', listaObjetos)
  }
    const paginas = []
    if (listaObjetos?.length === 0) {
      return {
        paginas: [],
        objetosEnPagina: []
      }
    }
    const OBJETOS_POR_PAGINA = objetosPorPagina
    //cantidad total de paginas
    const totalPages = Math.ceil(listaObjetos?.length / OBJETOS_POR_PAGINA)
    //residentes que se van a mostrar en la pagina actual
    const sliceEnd = (OBJETOS_POR_PAGINA * paginaActual)
    const sliceStart = sliceEnd - OBJETOS_POR_PAGINA
    const objetosEnPagina = listaObjetos?.slice(sliceStart, sliceEnd)
    //generacion de arreglo de las paginas que se van a mostrar
    for (let i = 1; i <= totalPages; i++) {
      paginas.push(i)
    }
    const maxButtons = 5
    const paginaInicial = Math.max(1, paginaActual - Math.floor(maxButtons / 2))
    const paginaFinal = Math.min(paginas.length, paginaInicial + maxButtons - 1)
    return {
      objetosEnPagina,
      paginas,
      paginaInicial,
      paginaFinal,
    }
  }