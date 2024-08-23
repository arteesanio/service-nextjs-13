import { FaQuestionCircle, FaPhoneAlt, FaBuilding, FaMap, FaHandshake, FaMailBulk } from "react-icons/fa";
import { FaMapLocation, FaShop } from "react-icons/fa6";

const services = [
  { text: "Recuperación de datos secuestrados por Ransomware", href: "/" },
  { text: "Eliminación de Contenido Negativos", href: "/" },
  { text: "Informática Forense", href: "/" },
  { text: "Plan de Servicio de Protección", href: "/" },
  { text: "World Delete", href: "/" }
];


const partners = [
  { icon: <FaShop />, text: "Franquicias", href: "https://irecoverydata.com/" },
  { icon: <FaHandshake />, text: "Conviertete en Socio", href: "mailto:info@irecoverygroup.com" },
  { separator: true },
  { icon: <FaQuestionCircle />, text: "FAQ", href: "https://irecoverygroup.com/" },
  { icon: <FaPhoneAlt />, text: "Enviar un ticket", href: "#contacto" }
];

const contactInfo = [
  { icon: <FaMailBulk />, text: "info@irecoverygroup.com", href: "mailto:info@irecoverygroup.com", style: { color: "#aabbcc" } },
  { icon: <FaMapLocation />, text: "Panama City", style: { color: "#223344" } },
  { icon: <FaMap />, text: "Costa del Este, Av La Rotonda", style: { color: "#223344" } },
  { icon: <FaBuilding />, text: "Edificio The Prime Time Business Tower", style: { color: "#223344" } }
];

export const IFooterSection = () => {
  return (
    <>
      <div className='w-100 flex-col py-8 tx-white' style={{ background: "#08090D" }}>
        <div className='w-100 w-max-1080px'>
          <div className='Q_xs_flex-col flex-wrap flex-align-start flex-justify-around'>

            <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
              <h2 className='tx-altfont-1 tx-bold-1'>Servicios:</h2>
              <div className='flex-col flex-align-start tx-md'>
                {services.map((service, idx) => (
                  <a
                    key={idx}
                    className='opaci-chov--75 tx-white opaci-50 nodeco pa-2 px-4 w-250px'
                    target='_blank'
                    href={service.href}
                  >
                    {service.text}
                  </a>
                ))}
              </div>
            </div>

            <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
              <h2 className='tx-altfont-1 tx-bold-1'>Partners:</h2>
              <div className='flex-col flex-align-start tx-lg'>
                {partners.map((partner, idx) => (
                  partner.separator ? (
                    <hr key={idx} className="opaci-10 w-100" />
                  ) : (
                    <a
                      key={idx}
                      className='opaci-chov--75 tx-white opaci-50 nodeco pa-2 px-4'
                      target='_blank'
                      href={partner.href}
                    >
                      {partner.icon} {partner.text}
                    </a>
                  )
                ))}
              </div>
            </div>

            <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
              <h2 className='tx-altfont-1 tx-bold-1 py-3'></h2>
              <div className='flex-col flex-align-start tx-lg'>
                {contactInfo.map((info, idx) =>  (
                  <a
                    key={idx}
                    className='nodeco pa-2 px-4 tx-md'
                    {...(idx == 0 ? info : {})}
                    style={info.style || {}}
                  >
                    {info.icon} {info.text}
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className='tx-altfont-1 tx-bold-2 mb-4 flex flex-justify-between Q_xs_flex-col'>
            <div className="tx-lx tx-altfont-1 flex-center">
              <img src="/sectionspng/logo.png" width={32} style={{}} />
              <div className="opaci-75 pl-3">iRecovery</div>
            </div>
            <div className="opaci-25 tx-altfont-1">Copyright © 2024</div>
          </div>

        </div>
      </div>
    </>
  );
};
