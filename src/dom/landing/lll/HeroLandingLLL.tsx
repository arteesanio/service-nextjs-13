
export const HeroLandingLLL = () => {
  return (<>
    <div className='flex-col h-min-100vh w-100 '
      style={{ background: "linear-gradient(180deg, #ececec, #F6F6F6)" }}
    >
      {/* <div className="mt-150 Q_sm_x"></div> */}
      <div className='w-max-1080px w-100 z-10 flex '
        style={{ background: "linear-gradient(180deg, #ececec, #F6F6F6)" }}
      >


        <div className='pos-abs w-100 flex-col top-0 bord-r-50 mt-150 noverflow w-max-1080px '>
          <img src='/sectionspng/artwork(29) - copia.png' className='block w-100' />
        </div>

        <div className='pos-rel w-max-600px tx-white ' style={{}}>
          <div className='px-4 Q_xs '>
            <div className='tx-lx'>Recuperación Profesional de Datos.</div>
            <hr className="w-100 opaci-10" />
            <div className='tx-lg tx-altfont-1 p pb-8'>Análisis y Eliminación Segura de Archivos</div>
          </div>
          <div className='px-4 pt-8 Q_sm_x tx-xl '>Recuperación Profesional de Datos, Análisis y Eliminación Segura de Archivos</div>
        </div>
      </div>
      <div className='z-10 tx-white w-100 flex flex-justify-end w-max-1080px translate-y-50 '>
        <div className='mx-4 tx-xl px-8 py-2 opaci-chov--50'
          style={{ background: "linear-gradient(85deg,#FB8300, #A93307)" }}
        >
          Start
        </div>
      </div>
    </div>
  </>);
};
