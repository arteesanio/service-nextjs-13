
export const HeroLanding = () => {
  return (<>
    <div className='flex-col h-min-100vh w-100'>
      <div className="mt-150 Q_sm_x"></div>
          <div className='w-max-1080px w-100 z-10 flex '>
            <div className=' w-max-600px ' style={{}}>
            <div className='px-4 Q_xs '>
              <div className='tx-lx'>Recuperacion Profesional de Datos.</div>
              <hr className="w-100 opaci-10" />
              <div className='tx-lg tx-altfont-1 p pb-8'>Analisis y Eliminacion Segura de Archivos</div>
            </div>
            <div className='px-4 Q_sm_x tx-xl '>Recuperacion Profesional de Datos, Analisis y Eliminacion Segura de Archivos</div>
            </div>
          </div>
          <div className='z-10  w-100 flex flex-justify-end w-max-1080px translate-y-50 '>
            <div className='mx-4 tx-xl px-8 py-2 opaci-chov--50'
              style={{background: "linear-gradient(85deg,#FB8300, #A93307)"}}
            >
              Start
            </div>
          </div>
          <div className='pos-abs w-100 flex-col top-0'>
            <img src='/sectionspng/artwork(29) - copia.png' className='block w-100' />
          </div>
        </div>
  </>)
}