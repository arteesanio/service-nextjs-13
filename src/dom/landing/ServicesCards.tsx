import { CiHardDrive, CiRedo } from "react-icons/ci";
import { GiAbstract029 } from "react-icons/gi";
import { GiBoltBomb } from "react-icons/gi";
import { GiBubblingFlask } from "react-icons/gi";
import { GiBrickWall } from "react-icons/gi";
import { GiBrokenWall } from "react-icons/gi";

export const iRecoveryServices = [
  {
    title: "Recuperación de Datos de Ransomware",
    description: "Servicios completos de recuperación de datos para dispositivos dañados, corruptos o inaccesibles.",
    more: "Especializados en discos duros, sistemas RAID, medios ópticos, pendrives, SSDs, tarjetas de memoria MMC y SD, smartphones, teléfonos móviles y tarjetas SIM. Trabaja en Clean Room ISO5 utilizando tecnología avanzada para la recuperación de datos. Tasa de éxito del 98% en la recuperación de datos.",
    chatMsg: "Me gustaría saber más sobre sus servicios completos de recuperación de datos para dispositivos dañados, corruptos o inaccesibles.",
    chatMsgReq: "Me gustaría solicitar un servicio completo de recuperación de datos para mi dispositivo dañado o corrupto.",
    icon: <>
    <div className="pos-rel flex-col">
    <GiAbstract029 />
    </div>
      
    </>,
    height: '300px',
    key: 'data_recovery'
  },
  {
    title: "Eliminación de Contenido Negativos",
    description: "Eliminación permanente y segura de datos de dispositivos de almacenamiento. Utiliza tecnologías como borrado, triturado y desmagnetización.",
    more: "Garantiza que no sea posible recuperar los datos después de la eliminación.",
    chatMsg: "Me gustaría saber más sobre los servicios de eliminación segura de datos para mis dispositivos de almacenamiento.",
    chatMsgReq: "Me gustaría solicitar un servicio de eliminación segura de datos para mi dispositivo de almacenamiento.",
    icon: <>
    <div className="pos-rel flex-col">
    <GiBoltBomb  />
    </div>
      
    </>,
    height: '300px',
    key: 'data_erasure'
  },
  {
    title: "Informática Forense",
    description: "Análisis forense de computadoras y dispositivos móviles para detectar fraudes electrónicos.",
    more: "Proporciona consultoría experta en informática forense para procedimientos legales.  Los servicios incluyen análisis de archivos, imágenes de memoria y análisis de memoria.",
    chatMsg: "Me gustaría saber más sobre los servicios de informática forense para detectar fraudes electrónicos.",
    chatMsgReq: "Me gustaría solicitar servicios de informática forense para mi computadora o dispositivo móvil.",
    icon: <>
    <div className="pos-rel flex-col">
    <GiBubblingFlask  />
    </div>
      
    </>,
    height: '300px',
    key: 'digital_forensics'
  },
  {
    title: "Plan de Servicio de Protección",
    description: "Servicios preventivos de protección de datos para individuos y pequeñas empresas. Incluye protección de datos contra fallos de hardware, eliminaciones accidentales y ataques de virus.",
    more: "Ofrece diferentes planes adaptados a las necesidades de individuos y empresas.",
    chatMsg: "Me gustaría saber más sobre sus planes de servicio de protección para la protección de datos.",
    chatMsgReq: "Me gustaría solicitar un plan de servicio de protección para mis datos.",
    icon: <>
    <div className="pos-rel flex-col">
    <GiBrickWall  />
    </div>
      
    </>,
    height: '300px',
    key: 'protection_service_plan'
  },
  {
    title: "Pruebas de Penetración",
    description: "Estrategia de defensa cibernética para probar la seguridad de los sistemas informáticos. Identifica y aborda posibles vulnerabilidades de seguridad.",
    more: "Proporciona soluciones para proteger datos e información valiosa.",
    chatMsg: "Me gustaría saber más sobre los servicios de pruebas de penetración para identificar vulnerabilidades de seguridad.",
    chatMsgReq: "Me gustaría solicitar servicios de pruebas de penetración para mi sistema informático.",
    icon: <>
    <div className="pos-rel flex-col">
    <GiBrokenWall  />
    </div>
      
    </>,
    height: '300px',
    key: 'penetration_testing'
  },
];



const ServiceCard = ({ title, description, icon, height, more, chatMsg, chatMsgReq }:any) => (
  <div className={`w-max-300px flex-col  bord-r-15`}>
    <div className='pa-2 flex-1 flex-col bord-r-5' style={{ background: "linear-gradient(-50deg, #59a9FF, #0B114B, #59a9FF)" }}>
      <div className="tx-altfont-1  bg-b-90 flex-1 bord-r-5  px-4 flex-col box-shadow-i-5-b">
        <div  className="tx-center  py-2 pt-8 tx-lgx">{title}</div>
        <div className='flex-1 flex-col'>
          <div className='pa-8 bord-r-100p flex-col' style={{ background: "linear-gradient(150deg, #59a9FF, #1B114B)" }}>
            <div className='pos-abs tx-lx'>{icon}</div>
          </div>
        </div>
        <div className='flex-1 w-max-200px pt-2 tx-smd  '>{description}</div>
        
      <details className="pos-rel flex-col">
        <summary className="flex-col">
        <div
         className='pt-4 opaci-30 opaci-chov--75 tx-white underline pb-6 '>Saber mas</div>

        </summary>
        <div className="pos-abs w-300px bg-b-90 bg-glass-5 bord-r-15 left-50p translate-x--50 border-white ">
          <div className="pa-3 ">{more}</div>
        </div>
      </details>
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

export const ServicesCards = () => (
  <div className='flex-wrap gap-4 px-4 w-max-1080px mb-100 pb-100 z-5'>
  <div className="w-100 flex-col mt-100 pb-8">
    <div className="tx-xl">Servicios</div>
  </div>

  {iRecoveryServices.map(({ title, description, more, icon, height, chatMsg, chatMsgReq }) => (
    <ServiceCard key={title} title={title} more={more} description={description} icon={icon} height={height} chatMsgReq={chatMsgReq} chatMsg={chatMsg} />
  ))}

  </div>

  
);


