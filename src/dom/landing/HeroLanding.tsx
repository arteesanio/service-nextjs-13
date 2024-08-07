
export const HeroLanding = () => {
  return (<>
    <div className='flex-col h-min-100vh w-100'>
      <div className="mt-150 Q_sm_x"></div>
      <div className='w-max-1080px w-100 z-10 flex btn-shine tx-altfont-3'>
        <div className=' w-max-600px ' style={{}}>
        {/* <a href="https://check.so" className="btn-shine" target="_blank">Get early access</a> */}
        <div className='pl-2 Q_xs w-max-300px'>
          <div className=' ' style={{fontSize: "1.6rem"}}><span className="">Eliminación</span> de Contenido Negativo.</div>
          <hr className=" w-90 opaci-10" />
          <div className=' tx-lg tx-altfont-1 p pb-8'>Análisis y Recuperación de datos secuestrados por <span className="txxxx">Ransomware</span>.</div>
        </div>
        <div className='px-4 Q_sm_x tx-xxl '><span className="">Eliminación</span> de Contenido Negativo y Recuperación de datos secuestrados por <span className="txxxx">Ransomware</span></div>
        </div>
      </div>
      <div className='z-10  w-100 flex flex-justify-end w-max-1080px translate-y-50  '>
        <a href="#contacto" className='mx-4 tx-lg tx-altfont-1 px-8 py-2 opaci-chov--50 flex-col tx-white nodeco'
          style={{background: "linear-gradient(85deg,#FB8300, #A93307)"}}
        >
          <div>Abrir Ticket</div>
          <div className="tx-lx ">Gratis</div>
        </a>
      </div>
      <div className='pos-abs w-100  flex-col top-0 left-0'>
        <img src='/sectionspng/artwork(29) - copia.png' className='block w-100' />
        <img src='/sectionspng/bighacker.gif' className='block w-100 opaci-50 pos-abs' />
      </div>
    </div>
  </>)
}

