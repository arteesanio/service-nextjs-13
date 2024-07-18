import { FaGamepad, FaHome, FaUser, FaWhatsapp } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


export const AppButtonsGroup = () => {
  return (<>
    <div className=' w-100 block b g-white pos-rel flex tx-altfont-1 z-500 ' style={{background: "#f6f6f6"}}>
      <div className="py-8 noclick  w-100  pos-abs top-0 z-800 _ddg translate-y--100 Q_xs"
        style={{background: "linear-gradient(0deg, #ffffff, #00000000)"}}
      >

      </div>
      <a href='/' className='nodeco opaci-chov--75 tx-black flex-1 flex-col' style={{ boxShadow: "inset 0 0 2px #dddddd", borderRadius: "0 0 0 25px" }}>
        <div className='py-3 flex-col'>
          <div className='opaci-50 '>
            <FaHome />
          </div>
          <div>Home</div>
        </div>
      </a>
      <a href='/game' className='nodeco opaci-chov--75 tx-black flex-1 flex-col' style={{ boxShadow: "inset 0 0 2px #dddddd" }}>
        <div className='py-3 flex-col'>
          <div className='opaci-50 '>
            <FaGamepad />
          </div>
          <div>Game</div>
        </div>
      </a>
      <a href='#send' className='nodeco opaci-chov--75 tx-black flex-1 flex-col' style={{ boxShadow: "inset 0 0 2px #dddddd" }}>
        <div className='py-3 flex-col'>
          <div className='opaci-50 '>
            <FaCartShopping />
          </div>
          <div>Send</div>
        </div>
      </a>
      <div className='flex-1 flex-col' style={{ boxShadow: "inset 0 0 2px #dddddd" }}>

        <a className='flex-col pa- opaci-chov--50 z-100 ' target='_blank' href='https://api.whatsapp.com/send?phone=584145630853'>
          <div className='bord-r-100p flex-col ' style={{ background: "linear-gradient(45deg, #0EBA2A, #62F87D)", width:"32px",height:"32px" }}>
            <FaWhatsapp className='pos-abs tx-mdl' style={{ color: "white" }} />
          </div>
        </a>
      </div>
    </div>
  </>);
};
