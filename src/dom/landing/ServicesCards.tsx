export const serviceCardsData = [
  {
    title: "RECUPERACIÓN DE DATOS DE RANSOMWARE",
    description: "Servicios de recuperación de datos para dispositivos dañados, corruptos o inaccesibles. Especializados en sistemas RAID, medios ópticos, pendrives, SSD y más.",
    chatMsg: "Me gustaría saber más sobre los servicios completos de recuperación de datos para dispositivos dañados, corruptos o inaccesibles.",
    chatMsgReq: "Me gustaría solicitar un servicio completo de recuperación de datos para mi dispositivo dañado, corrupto o inaccesible.",
    icon: "💾",
    height: '300px',
    key: 'data_recovery'
  },
  {
    title: "FORENSE DIGITAL",
    description: "Análisis forense de computadoras y dispositivos móviles para detectar fraudes electrónicos. Los servicios incluyen análisis de archivos, imagen de memoria y análisis de memoria.",
    chatMsg: "Me gustaría saber más sobre el análisis forense de computadoras y dispositivos móviles para detectar fraudes electrónicos.",
    chatMsgReq: "Me gustaría solicitar un servicio de análisis forense para mi computadora o dispositivo móvil.",
    icon: "🔍",
    height: '300px',
    key: 'digital_forensics'
  },
  {
    title: "BORRADO SEGURO DE DATOS",
    description: "Eliminación permanente y segura de datos de dispositivos de almacenamiento mediante tecnologías como borrado, trituración y desmagnetización.",
    chatMsg: "Me gustaría saber más sobre la eliminación permanente y segura de datos de dispositivos de almacenamiento.",
    chatMsgReq: "Me gustaría solicitar un servicio de borrado seguro de datos para mi dispositivo de almacenamiento.",
    icon: "🗑️",
    height: '300px',
    key: 'data_erasure'
  },
  {
    title: "PRUEBAS DE PENETRACIÓN",
    description: "Estrategia de defensa cibernética para probar la seguridad de los sistemas informáticos, identificando y abordando posibles vulnerabilidades de seguridad.",
    chatMsg: "Me gustaría saber más sobre las pruebas de penetración para sistemas informáticos para identificar vulnerabilidades de seguridad.",
    chatMsgReq: "Me gustaría solicitar un servicio de pruebas de penetración para mi sistema informático.",
    icon: "🛡️",
    height: '300px',
    key: 'penetration_testing'
  },
  {
    title: "PLAN DE SERVICIO DE PROTECCIÓN",
    description: "Servicios preventivos de protección de datos para individuos y pequeñas empresas, incluyendo protección de datos contra fallos de hardware, eliminaciones accidentales y ataques de virus.",
    chatMsg: "Me gustaría saber más sobre los servicios preventivos de protección de datos para individuos y pequeñas empresas.",
    chatMsgReq: "Me gustaría solicitar un plan de servicio de protección para mis datos.",
    icon: "🔒",
    height: '300px',
    key: 'protection_service_plan'
  },
  {
    title: "GESTIÓN DE CRISIS",
    description: "Anticipa y gestiona posibles crisis de reputación con planes de acción y estrategias de respuesta inmediata.",
    chatMsg: "Me gustaría saber más sobre cómo anticipar y gestionar posibles crisis de reputación.",
    chatMsgReq: "Me gustaría solicitar un servicio de gestión de crisis para mi reputación.",
    icon: "⚠️",
    height: '300px',
    key: 'crisis_management'
  },
];

export const productCardsData = [
  {
    title: "TELÉFONOS SEGUROS",
    description: "Smartphones con sistemas operativos altamente seguros y encriptación de extremo a extremo para la comunicación y protección de datos.",
    chatMsg: "Me gustaría saber más sobre teléfonos seguros con sistemas operativos altamente seguros y encriptación de extremo a extremo.",
    chatMsgReq: "Me gustaría solicitar un teléfono seguro con sistemas operativos altamente seguros y encriptación de extremo a extremo.",
    icon: "📱",
    height: '300px',
    key: 'secure_phones'
  },
  {
    title: "COMUNICACIÓN SEGURA",
    description: "Aplicaciones de chat y voz encriptadas con encriptación de grado militar para chats, llamadas de voz y datos.",
    chatMsg: "Me gustaría saber más sobre aplicaciones de chat y voz encriptadas con encriptación de grado militar.",
    chatMsgReq: "Me gustaría solicitar una aplicación de chat y voz encriptada con encriptación de grado militar.",
    icon: "💬",
    height: '300px',
    key: 'secure_communication'
  },
  {
    title: "GESTIÓN DE REPUTACIÓN",
    description: "Gestión integral de la reputación para individuos, marcas, empresas y entidades gubernamentales, incluyendo limpieza de reputación, monitoreo y construcción de reputación positiva.",
    chatMsg: "Me gustaría saber más sobre los servicios integrales de gestión de la reputación.",
    chatMsgReq: "Me gustaría solicitar un servicio integral de gestión de la reputación.",
    icon: "🌟",
    height: '300px',
    key: 'reputation_management'
  },
  {
    title: "LIMPIEZA DE REPUTACIÓN",
    description: "Eliminación, desindexación y modificación de contenido negativo en línea con asesoría legal y estrategia global.",
    chatMsg: "Me gustaría saber más sobre la eliminación, desindexación y modificación de contenido negativo en línea.",
    chatMsgReq: "Me gustaría solicitar un servicio de limpieza de reputación para eliminar, desindexar y modificar contenido negativo en línea.",
    icon: "🧹",
    height: '300px',
    key: 'reputation_cleaning'
  },
  {
    title: "MONITOREO DE REPUTACIÓN",
    description: "Escaneo de red en tiempo real para monitorear la reputación en línea e interceptar crisis de reputación en motores de búsqueda, redes sociales, foros y la web profunda.",
    chatMsg: "Me gustaría saber más sobre el escaneo de red en tiempo real para monitorear la reputación en línea.",
    chatMsgReq: "Me gustaría solicitar un servicio de monitoreo de reputación para escaneo de red en tiempo real.",
    icon: "📡",
    height: '300px',
    key: 'reputation_monitoring'
  },
  {
    title: "CONSTRUCCIÓN DE REPUTACIÓN POSITIVA",
    description: "Mejorar la presencia positiva en línea colocando contenido neutral y positivo en motores de búsqueda y redes sociales.",
    chatMsg: "Me gustaría saber más sobre cómo mejorar la presencia positiva en línea.",
    chatMsgReq: "Me gustaría solicitar un servicio de construcción de reputación positiva para mejorar mi presencia en línea.",
    icon: "👍",
    height: '300px',
    key: 'positive_reputation_building'
  },
];



const ServiceCard = ({ title, description, icon, height, chatMsg, chatMsgReq }:any) => (
  <div className={`w-max-300px flex-col  bord-r-15`}>
    <div className='pa-2 flex-1 flex-col bord-r-25' style={{ background: "linear-gradient(-50deg, #1B114B, #1551AE)" }}>
      <div className="tx-altfont-1  bg-b-90 flex-1 bord-r-25  px-4 flex-col box-shadow-i-5-b">
        <div className="tx-center py-2 tx-lgx">{title}</div>
        <div className='flex-1 flex-col'>
          <div className='pa-8 bord-r-100p flex-col' style={{ background: "linear-gradient(150deg, #1B114B, #1551AE)" }}>
            <div className='pos-abs tx-lx'>{icon}</div>
          </div>
        </div>
        <div className='flex-1 w-max-200px pt-2 tx-smd  '>{description}</div>
      <a href={"https://api.whatsapp.com/send?phone=50769970742&text="+chatMsg}
         className='pt-4 opaci-30 opaci-chov--75 tx-white nodeco pb-4'>Saber mas</a>
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

const ProductCard = ({ title, description, icon, height, chatMsg, chatMsgReq }:any) => (
  <div className={`w-max-300px flex-col  bord-r-15`}>
    <div className='pa-2 flex-1 flex-col bord-r-25' style={{ background: "linear-gradient(-50deg, #1551AE, #445566)" }}>
      <div className="tx-altfont-1  bg-b-90 flex-1 bord-r-25  px-4 flex-col box-shadow-i-5-b">
        <div className="tx-center py-2 tx-lgx">{title}</div>
        <div className='flex-1 w-max-200px pt-2 tx-smd pb-4 '>{description}</div>
        
      {/* <a href={"https://api.whatsapp.com/send?phone=50769970742&text="+chatMsg}
         className='pt-4 opaci-30 opaci-chov--75 tx-white nodeco pb-4'>Saber mas</a> */}
      </div>
      {/* <a href={"https://api.whatsapp.com/send?phone=50769970742&text="+chatMsgReq}
        className='py-1 my-2 bg-b-50 px-4 bord-r-10 opaci-chov--50 tx-white nodeco'
         style={{ boxShadow: "inset 5px 5px 15px #ffffff11, 3px 5px 5px #000000aa" }}
      >
        Request
      </a> */}
      
      <div className='flex-1 flex-col'>
          <div className='pa-6  bord-r-100p box-shadow-i-5-t my-2 flex-col' style={{ background: "linear-gradient(150deg, #1551AE, #445566)" }}>
            <div className='pos-abs  tx-lgx'>{icon}</div>
          </div>
        </div>
    </div>
  </div>
);

export const ServicesCards = () => (
  <div className='flex-wrap gap-4 px-4 w-max-1080px'>
  {serviceCardsData.map(({ title, description, icon, height, chatMsg, chatMsgReq }) => (
    <ServiceCard key={title} title={title} description={description} icon={icon} height={height} chatMsgReq={chatMsgReq} chatMsg={chatMsg} />
  ))}

  <div className="w-100 flex-col mt-100">
    <div className="tx-xl">Servicios Empresariales</div>
  </div>

  
{productCardsData.map(({ title, description, icon, height, chatMsg, chatMsgReq }) => (
      <ProductCard key={title} title={title} description={description} icon={icon} height={height} chatMsgReq={chatMsgReq} chatMsg={chatMsg} />
    ))}
  </div>
);


