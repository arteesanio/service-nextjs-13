import Image from 'next/image'
import styles from './page.module.css'
import { FaTwitter, FaTelegram, FaYoutube, FaExchangeAlt, FaChartLine, FaFilePdf, FaFile, FaGamepad, FaWhatsapp } from 'react-icons/fa'
import { GiGecko } from 'react-icons/gi'

export const ContactButton = () => {
  return (<>
    <a className='pos-fix right-0 bottom-0 pa-4 opaci-chov--50 z-100 hover-4' target='_blank' href='https://api.whatsapp.com/message/QVPL7P6JGWOVI1' >
      <div className='bord-r-100p flex-col h-50px w-50px' style={{background: "linear-gradient(45deg, #0EBA2A, #62F87D)"}}>
        <FaWhatsapp className='pos-abs tx-lg' style={{color: "white"}} />
      </div>
    </a>
  </>)
}


