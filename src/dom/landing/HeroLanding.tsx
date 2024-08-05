
export const HeroLanding = () => {
  return (<>
    <div className='flex-col h-min-100vh w-100'>
      <div className="mt-150 Q_sm_x"></div>
          <div className='w-max-1080px w-100 z-10 flex '>
            <div className=' w-max-600px ' style={{}}>
            <div className='pl-2 Q_xs w-max-300px'>
              <div className=' ' style={{fontSize: "2rem"}}>Recuperación de Ransomware.</div>
              <hr className=" w-90 opaci-10" />
              <div className=' tx-lg tx-altfont-1 p pb-8'>Análisis y Eliminación Segura de Contenido Negativo.</div>
            </div>
            <div className='px-4 Q_sm_x tx-xl '>Recuperación de Ransomware y <small>Eliminación Segura de Contenido Negativo</small></div>
            </div>
          </div>
          <a href="#contacto" className='z-10  w-100 flex flex-justify-end w-max-1080px translate-y-50 tx-white nodeco '>
            <div className='mx-4 tx-lg tx-altfont-1 px-8 py-2 opaci-chov--50 flex-col'
              style={{background: "linear-gradient(85deg,#FB8300, #A93307)"}}
            >
              <div>Abrir Ticket</div>
              <div className="tx-lx ">Gratis</div>
            </div>
          </a>
          <div className='pos-abs w-100 flex-col top-0 left-0'>
            <img src='/sectionspng/artwork(29) - copia.png' className='block w-100' />
          </div>
        </div>
  </>)
}

