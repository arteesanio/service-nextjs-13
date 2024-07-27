"use client";

export function MainNavBarLLL() {
  return (<>
    <div className='flex w-max-1080px w-100 pos-fix z-100 top-0 mt-4'>
      <div className='flex-1 flex-col flex-align-start pl-8 ' style={{ background: "#E4E1DE" }}>
        <img src='/img2/bnwlogo.png'
          className='block bg-glass-6    opaci-chov--50 px-2 py-1' width={128}
          style={{}} />
      </div>
      <div className='flex'>
        <a href="#nosotros"
          style={{ background: "linear-gradient(0deg, #00000000, #ecececee 15%, #ecececee 80%, #00000000)" }}
          className='pa-8 tx-altfont-1 tx-bold-6 opaci-chov--50 Q_md_x tx-black nodeco'
        >
          Nosotros
        </a>
        <a href="#servicios"
          style={{ background: "linear-gradient(0deg, #00000000, #ecececee 15%, #ecececee 80%, #00000000)" }}
          className='pa-8 tx-altfont-1 tx-bold-6 opaci-chov--50 tx-black nodeco'
        >
          Servicios
        </a>
        <a href="#contacto"
          style={{ background: "linear-gradient(0deg, #00000000, #ecececee 15%, #ecececee 80%, #00000000)" }}
          className='pa-8 tx-altfont-1 tx-bold-6 opaci-chov--50 Q_sm_x tx-black nodeco'
        >
          Contacto
        </a>
      </div>
    </div>
  </>);

}
