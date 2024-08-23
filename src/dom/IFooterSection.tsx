import { FaQuestionCircle, FaPhoneAlt, FaBuilding, FaMap, FaHandshake, FaMailBulk } from "react-icons/fa";
import { FaMapLocation, FaShop } from "react-icons/fa6";



export const IFooterSection = () => {
  return (<>
    <div className=' w-100  flex-col py-8 tx-white' style={{ background: "#08090D" }}>
      <div className=' w-100  w-max-1080px'>
        <div className='Q_xs_flex-col flex-wrap flex-align-start flex-justify-around'>


          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <h2 className='tx-altfont-1 tx-bold-1'>Servicios:</h2>
            <div className='flex-col flex-align-start tx-lg'>
              <a className='opaci-chov--75 tx-white opaci-50  nodeco pa-2 px-4' target='_blank' href="/">
                Ransomware Recovery
              </a>
              <a className='opaci-chov--75 tx-white opaci-50  nodeco pa-2 px-4' target='_blank' href="/">
                Análisis Forense
              </a>
              <a className='opaci-chov--75 tx-white opaci-50  nodeco pa-2 px-4' target='_blank' href="/">
                Eliminación Segura
              </a>
            </div>
          </div>


          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <h2 className='tx-altfont-1 tx-bold-1'>Partners:</h2>
            <div className='flex-col flex-align-start tx-lg'>
              <a className='opaci-chov--75 tx-white opaci-50  nodeco pa-2 px-4' target='_blank' href="https://jup.ag/swap/SOL-MILEI">
                <FaShop /> Franquicias
              </a>
              <a className='opaci-chov--75 tx-white opaci-50  nodeco pa-2 px-4' target='_blank' href="https://www.coingecko.com/en/coins/milei-solana">
                <FaHandshake /> Conviertete en Socio
              </a>
              <hr className="opaci-10 w-100" />
              <a className='opaci-chov--75 tx-white opaci-50  nodeco pa-2 px-4' target='_blank' href="https://tiktok.com/@mileisolcoin">
                <FaQuestionCircle /> FAQ
              </a>
              <a className='opaci-chov--75 tx-white opaci-50  nodeco pa-2 px-4' target='_blank' href="https://tiktok.com/@mileisolcoin">
                <FaPhoneAlt /> Enviar un ticket
              </a>
            </div>
          </div>


          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <h2 className='tx-altfont-1 tx-bold-1 py-3'></h2>
            <div className='flex-col flex-align-start tx-lg'>
              <a className='  nodeco pa-2 px-4 tx-md' style={{color: "#aabbcc"}}>
              <FaMailBulk /> info@irecoverygroup.com
              </a>
              <a className='  nodeco pa-2 px-4' style={{color: "#223344"}}>
                <FaMapLocation /> Panama City
              </a>
              <a className='  nodeco pa-2 px-4' style={{color: "#223344"}}>
                <FaMap /> Costa del Este, Av La Rotonda
              </a>
              <a className='  nodeco pa-2 px-4 tx-md' style={{color: "#223344"}}>
                <FaBuilding /> Edificio The  Prime Time Business Tower
              </a>
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


  </>);
};
