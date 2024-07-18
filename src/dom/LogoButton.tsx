
"use client"
import { usePathname } from "next/navigation";



export const LogoButton = () => {
  const pathname = usePathname();
  return (<>
    <a className='pos-fix left-0 top-0 pa-4 opaci-chov--50 z-100 ' href={"/quote"}
      style={{background: "linear-gradient(135deg, #ffffff, #00000000 75%)"}}
    >
      <div className='bord-r-100p flex-col pa-4' >
        {/* <FaWhatsapp className='pos-abs tx-lg' style={{color: "white"}} /> */}
        <img src='/favicon/android-icon-72x72.png' width={32} className='pos-abs' />
      </div>
    </a>
  </>);
};
