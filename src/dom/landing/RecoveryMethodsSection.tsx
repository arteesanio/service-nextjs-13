"use client"

export const RecoveryMethodsSection = () => {
  return (<>

<div className="flex w-100 gap-8 Q_xs_sm_flex-col w-max-1080px ">
      <div className='flex-1 '>
        <div className='pt-1 my-8  w-100' style={{background: "#1A3DC6"}}></div>
        <div className='w-100 flex-col tx-altfont-1 flex-align-start '>
          <div className='pl-4 opaci-50 tx-lgx'>
            DATA EMERGENCY
          </div>
          <div className='opaci-20  w-100 my-4' style={{paddingTop:"3px",background: "#1A3DC6"}} ></div >
          <div className='w-100 opaci-50 tx-bold-2 tx-altfont-2 w-max-400px  '>
          <div className="px-4 tx-lg tx-altfont-1">iRecovery es la única empresa en Europa y Latinoamérica que ofrece el primer servicio de Recuperación de Datos con cita previa</div>
          {/* <div className="px-4 tx-lg tx-altfont-1">Para irecovery es determinante poder llegar a todas las necesidades informáticas que nuestros clientes demandan y permanecer en el tiempo ofreciendo siempre soluciones tantas veces sea posible.</div> */}
          </div>
        </div>

        <div className='pt-1 my-8  bg-w-10 w-100'></div>
        
        <div className='w-100 flex-col tx-altfont-1 flex-align-start '>
          <div className='pl-4 opaci-50 tx-lgx'>
            IPSP
          </div>
          <div className='opaci-20  w-100 my-4' style={{paddingTop:"3px",background: "#1A3DC6"}} ></div >
          <div className='w-100 opaci-50 tx-bold-2 tx-altfont-2 w-max-400px '>
          <div className="px-4">Para proteger todos tus datos contenidos en el Disco Duro o en cualquier otro medio de almacenamiento</div>
          </div>
          <div className='opaci-20  w-100 my-4' style={{paddingTop:"3px",background: "#ffffff33"}} ></div >
          <div className='w-100 opaci-50 tx-bold-2 tx-altfont-2 w-max-400px '>
          <div className="px-4">Para irecovery es determinante poder llegar a todas las necesidades informáticas que nuestros clientes demandan y permanecer en el tiempo ofreciendo siempre soluciones tantas veces sea posible.</div>
          </div>
        </div>
        <div className='pt-1 my-8  bg-w-10 w-100'></div>
        </div>
        <div className=' flex-col pos-rel'>
          <img src="/sectionspng/screen1.png" alt="asd" className='w-100 w-max-400px' />
          <div onClick={()=>{alert("Coming Soon...")}} className='box-shadow-5-t pos-abs tx-white  bottom-0 translate-y--75 opaci-chov--75 Q_sm_x' style={{background: "#16358F"}}>
            <div className=' tx-altfont-1 tx-xl px-8 py-2'>Consultar</div>
          </div>
          <div onClick={()=>{alert("Coming Soon...")}} className='box-shadow-5-t pos-abs tx-white  bottom-0  opaci-chov--75 Q_xs' style={{background: "#16358F"}}>
            <div className=' tx-altfont-1 tx-xl px-8 py-2'>Consultar</div>
          </div>
        </div>
    </div>
</>)
} 


