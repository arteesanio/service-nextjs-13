export const serviceCardsData = [
  {
    title: "RECUPERACIÓN DE DATOS",
    description: "Recuperación de Datos de soporte de almacenamiento, disco duro, SSD, NAS, RAID, server, DVR.",
    chatMsg: "Quisiera saber mas acerca de recuperación de Datos de soporte de almacenamiento, disco duro, SSD, NAS, RAID, server, DVR.",
    chatMsgReq: "Quisiera reservar una recuperación de Datos de soporte de almacenamiento, disco duro, SSD, NAS, RAID, server, DVR.",
    icon: "📂",
    height: '300px',
    key: 'recuperacion'
  },
  {
    title: "ANÁLISIS FORENSE",
    description: "La búsqueda de datos informáticos como una prueba fiable y legal. a través de profesionales.",
    chatMsg: "Quisiera saber mas acerca de la búsqueda de datos informáticos como una prueba fiable y legal. a través de profesionales.",
    chatMsgReq: "Quisiera reservar una la búsqueda de datos informáticos como una prueba fiable y legal. a través de profesionales.",
    icon: "📝",
    height: '400px',
    key: 'analisis'
  },
  {
    title: "ELIMINACIÓN SEGURA",
    description: "La eliminación segura borra permanentemente datos en medios de almacenamiento.",
    chatMsg: "Quisiera saber mas acerca de la eliminación segura borra permanentemente datos en medios de almacenamiento.",
    chatMsgReq: "Quisiera reservar una la eliminación segura borra permanentemente datos en medios de almacenamiento.",
    icon: "🗑️",
    height: '300px',
    key: 'eliminacion'
  }
];

const ServiceCard = ({ title, description, icon, height, chatMsg, chatMsgReq }:any) => (
  <div className={`h-${height} flex-col py-100 bord-r-15`}>
    <div className='pa-2 flex-1 flex-col bord-r-25' style={{ background: "linear-gradient(-50deg, #1B114B, #1551AE)" }}>
      <div className="tx-altfont-1 w-min-200px bg-b-90 flex-1 bord-r-25 py-6 px-4 flex-col box-shadow-i-5-b">
        <div className="tx-center pb-2 tx-lgx">{title}</div>
        <div className='flex-1 flex-col'>
          <div className='pa-8 bord-r-100p flex-col' style={{ background: "linear-gradient(150deg, #1B114B, #1551AE)" }}>
            <div className='pos-abs tx-lx'>{icon}</div>
          </div>
        </div>
        <div className='flex-1 w-max-200px pt-2 tx-smd  '>{description}</div>
      <a href={"https://api.whatsapp.com/send?phone=50769970742&text="+chatMsg}
         className='pt-4 opaci-30 opaci-chov--75 tx-white nodeco'>Saber mas</a>
      </div>
      <a href={"https://api.whatsapp.com/send?phone=50769970742&text="+chatMsgReq}
        className='py-1 my-2 bg-b-50 px-4 bord-r-10 opaci-chov--50 tx-white nodeco'
         style={{ boxShadow: "inset 5px 5px 15px #ffffff11, 3px 5px 5px #000000aa" }}
      >
        Request
      </a>
    </div>
  </div>
);

export const ServiceCardLLL = ({ title, description, icon, height }:any) => (
  <div className={`h-${height} flex-col py-100 bord-r-15`}
    style={{background: ""}}
  >
    <div className='pa-2 flex-1 flex-col bord-r-25' 
    style={{ background: "linear-gradient(-50deg, #cBc1fB, #c5f1eE)" }}
    >
      <div className="tx-altfont-1 w-min-200px bg-w-90 flex-1 bord-r-25 py-6 px-4 flex-col box-shadow-i-5-b">
        <div className="tx-center pb-2 tx-lgx">{title}</div>
        <div className='flex-1 flex-col'>
          <div className='pa-8 bord-r-100p flex-col' style={{ background: "linear-gradient(150deg, #1B114B, #1551AE)" }}>
            <div className='pos-abs tx-lx'>{icon}</div>
          </div>
        </div>
        <div className='flex-1 w-max-200px pt-2 tx-smd'>{description}</div>
        <div className='pt-4 opaci-30 opaci-chov--75'>Saber mas</div>
      </div>
      <div className='py-1 my-2 bg-w-50 px-4 bord-r-10 opaci-chov--50' style={{ boxShadow: "inset 5px 5px 15px #ffffff11, 3px 5px 5px #000000aa" }}>Request</div>
    </div>
  </div>
);

export const ServicesCards = () => (
  <div className='flex-wrap gap-4 px-4'>
    {serviceCardsData.map(({ title, description, icon, height, chatMsg, chatMsgReq }) => (
      <ServiceCard key={title} title={title} description={description} icon={icon} height={height} chatMsgReq={chatMsgReq} chatMsg={chatMsg} />
    ))}
  </div>
);


