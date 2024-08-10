import { CiHardDrive, CiRedo } from "react-icons/ci";
import { GiAbstract029 } from "react-icons/gi";

export const cryptedPhoneServices  = [
  {
    title: "Teléfonos Seguros y Certificados",
    description: "Smartphones con sistemas operativos altamente seguros. Cifrado de extremo a extremo para la comunicación y la protección de datos. Disponibles para uso corporativo, militar y gubernamental.",
    more: "",
    chatMsg: "Me gustaría saber más sobre teléfonos seguros con sistemas operativos altamente seguros.",
    chatMsgReq: "Me gustaría solicitar un teléfono seguro con cifrado de extremo a extremo.",
    icon: "📱",
    height: '300px',
    key: 'telefonos_seguros'
  },
  {
    title: "Comunicación Segura",
    description: "Aplicaciones de chat y voz cifradas. Cifrado de grado militar para chats, llamadas de voz y datos. Las características incluyen protección por PIN, autodestrucción y más.",
    more: "",
    chatMsg: "Me gustaría saber más sobre aplicaciones de comunicación segura con cifrado de grado militar.",
    chatMsgReq: "Me gustaría solicitar una aplicación de comunicación segura con cifrado de grado militar.",
    icon: "💬",
    height: '300px',
    key: 'comunicacion_segura'
  },
  {
    title: "Soluciones de Ciberseguridad",
    description: "Protección contra intrusiones internas y externas y intentos de hacking. Utilidades personalizables y alta usabilidad. Sistemas operativos móviles seguros con seguridad mejorada del protocolo SIP.",
    more: "",
    chatMsg: "Me gustaría saber más sobre sus soluciones de ciberseguridad para protegerse contra intentos de hacking.",
    chatMsgReq: "Me gustaría solicitar soluciones de ciberseguridad para mi sistema operativo móvil.",
    icon: "🛡️",
    height: '300px',
    key: 'soluciones_ciberseguridad'
  },
];



const ProductCard = ({ title, description, icon, height, chatMsg, chatMsgReq }:any) => (
  <div className={`flex-1  flex-col flex-align-stretch  bord-r-15`}>
    <div className='pa-2 flex-col flex-align-stretch  flex-1 flex-col bord-r-25' style={{ background: "" }}>
      <div className="tx-altfont-1 bg-glass-5  bg-b-90 flex-1 bord-r-5 py-8  px-4 flex-col box-shadow-i-5-b">
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
      
      <div className='flex-1 flex-col bg-b-90 mt-1 bord-r-5 bg-glass-5 py-4'>
          <div className='pa-6  bord-r-100p box-shadow-i-5-t my-2 flex-col' style={{ background: "linear-gradient(150deg, #1551AE, #445566)" }}>
            <div className='pos-abs  tx-lgx'>{icon}</div>
          </div>
        </div>
    </div>
  </div>
);

export const ProductsCards = () => (<>
  <div className="w-100 flex-col mt-100 pb-8">
    <div className="tx-xl">Servicios Empresariales</div>
  </div>

  <div className='flex Q_xs_flex-col gap-4 px-4 w-max-1080px gap-4'>

  
{cryptedPhoneServices.map(({ title, description, icon, height, chatMsg, chatMsgReq }) => (
      <ProductCard key={title} title={title} description={description} icon={icon} height={height} chatMsgReq={chatMsgReq} chatMsg={chatMsg} />
    ))}
  </div>
  </>);


