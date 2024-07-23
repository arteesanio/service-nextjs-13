
export const ServicesCards = () => {
  return (<>
    <div className='flex-wrap gap-4 px-4'>
            <div className='h-300px  flex-col py-100 bord-r-15 '  
              style={{background: ""} }
            >
              <div className='pa-2  flex-1 flex-col bord-r-25' style={{
                background: "linear-gradient(-50deg, #1B114B, #1551AE)"
                }}>
                <div className="tx-altfont-1 w-min-200px bg-b-90 flex-1 bord-r-25 py-6 px-4 flex-col box-shadow-i-5-b">
                  <div className="tx-center pb-2 tx-lgx">RECUPERACIÓN <br /> DE DATOS</div>
                  <div className='flex-1 flex-col'>
                  <div className='pa-8 bord-r-100p flex-col '
                    style={{background: "linear-gradient(150deg, #1B114B, #1551AE)"}}
                  >
                    <div className='pos-abs tx-lx'>📄</div>
                    
                  </div>
                  </div>
                  <div className='flex-1 w-max-200px pt-2 tx-smd'>
                    Recuperación de Datos de soporte de almacenamiento,
                    disco duro, SSD, NAS, RAID, server, DVR. 
                  </div>
                  <div className='pt-4 opaci-30 opaci-chov--75 '>Saber mas</div>
                  </div>
                <div className=' py-1 my-2 bg-b-50 px-4 bord-r-10 opaci-chov--50'
                  style={{boxShadow: "inset 5px 5px 15px #ffffff11, 3px 5px 5px #000000aa"}}
                >Request</div>
                </div>
                </div>
            <div className='h-400px  flex-col py-100 bord-r-15 '  
              style={{}}
            >
              <div className='pa-2  flex-1 flex-col bord-r-25 ' style={{
                    boxShadow: "0 0 50px #77bbff33",
                background: "linear-gradient(-50deg, #1B114B, #1551AE)"
                }}>
                <div className='pa-2 bord-r-100  mt-1 mb-2'
                  style={{
                    background: "radial-gradient(#77aaff, #223344, #001122, #00000000,#00000000,#00000000, #00000000), linear-gradient(150deg, #1B114B, #1551AE) "
                  }}
                ></div>
                <div className="tx-altfont-1 w-min-200px bg-b-90 flex-1 bord-r-25 py-6 px-4 flex-col box-shadow-i-5-b">
                  <div className="tx-center pb-2 tx-lgx">ANÁLISIS <br /> FORENSE</div>
                  <div className='flex-1 flex-col'>
                    <div className='pa-8 bord-r-100p flex-col '
                      style={{background: "linear-gradient(150deg, #1B114B, #1551AE)"}}
                    >
                      <div className='pos-abs tx-lx'>📝</div>
                      
                    </div>
                  </div>
                  <div className='flex-1 w-max-200px pt-2 tx-smd'>
                    La búsqueda de datos informáticos como una prueba fiable y legal. 
                    a través de profesionales.
                  </div>
                  <div className='pt-4 opaci-30 opaci-chov--75 '>Saber mas</div>
                  </div>
                <div className=' py-1 my-2 bg-b-50 px-4 bord-r-10 opaci-chov--50'
                  style={{boxShadow: "inset 5px 5px 15px #ffffff11, 3px 5px 5px #000000aa"}}
                >Request</div>
              </div>
            </div>
            <div className='h-300px  flex-col py-100 bord-r-15 '  
              style={{background: ""} }
            >
              <div className='pa-2  flex-1 flex-col bord-r-25' style={{
                background: "linear-gradient(-50deg, #1B114B, #1551AE)"
                }}>
                <div className="tx-altfont-1 w-min-200px bg-b-90 flex-1 bord-r-25 py-6 px-4 flex-col box-shadow-i-5-b">
                    <div className="tx-center pb-2 tx-lgx">ELIMINACIÓN <br /> SEGURA</div>
                    <div className='flex-1 flex-col'>
                    <div className='pa-8 bord-r-100p flex-col '
                      style={{background: "linear-gradient(150deg, #1B114B, #1551AE)"}}
                    >
                      <div className='pos-abs tx-lx'>🗑️</div>
                      
                    </div>
                    </div>
                  <div className='flex-1 w-max-200px pt-2 tx-smd'>
                    La eliminación segura borra permanentemente datos en medios de almacenamiento.
                  </div>
                  <div className='pt-4 opaci-30 opaci-chov--75 '>Saber mas</div>
                  </div>
                <div className=' py-1 my-2 bg-b-50 px-4 bord-r-10 opaci-chov--50'
                  style={{boxShadow: "inset 5px 5px 15px #ffffff11, 3px 5px 5px #000000aa"}}
                >Request</div>
                </div>
            </div>
          </div>
  </>)
}