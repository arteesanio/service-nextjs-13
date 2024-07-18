import { FaWhatsapp, FaInstagram, FaTiktok, FaGlasses, FaSun, FaMoon } from "react-icons/fa";
import { FaHandBackFist, FaEarListen, FaEarDeaf } from "react-icons/fa6";
import { TbShoe } from "react-icons/tb";



export const FooterSection = () => {
  return (<>


    <div className=' w-100  flex-col py-8' style={{ background: "#FFF7E6" }}>
      <div className=' w-100  w-max-1080px'>
        <h1 className='tx-altfont-1 tx-bold-2 mb-4'>
          {/* Important Links: */}
          <img src="/img/logosmall.png" style={{
            boxShadow: "-10px 10px 0 0px #FFD23F",
          }} />
        </h1>
        <div className='Q_xs_flex-col flex-wrap flex-align-start flex-justify-around'>
          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <h2 className='tx-altfont-1 tx-bold-1'>Contact:</h2>
            <div className='flex-col flex-align-start tx-lg'>
              {/* <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://twitter.com/mileisolcoin">
          <FaTwitter /> Twitter / X
        </a> */}
              <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://t.me/mileisolcoin/">
                <FaWhatsapp /> Whatsapp
              </a>
              <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://www.youtube.com/@JavierMileiSolana">
                <FaInstagram /> Instagram
              </a>
              <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://tiktok.com/@mileisolcoin">
                <FaTiktok /> TikTok
              </a>
              {/* <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://www.tiktok.com/@mileisolcoin">
          <FaTiktok /> TikTok
        </a> */}
              {/* <a className='opaci-chov--50 tx-black nodeco opaci-50 pa-2 px-4' >TikTok (Soon)</a>
        <a className='opaci-chov--50 tx-black nodeco opaci-50 pa-2 px-4' >Youtube (Soon)</a> */}
            </div>
          </div>

          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <h2 className='tx-altfont-1 tx-bold-1'>Categories:</h2>
            <div className='flex-col flex-align-start tx-lg'>
              <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://jup.ag/swap/SOL-MILEI">
                <FaHandBackFist /> Pulseras
              </a>
              <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://www.coingecko.com/en/coins/milei-solana">
                <FaEarListen /> Zarcillos
              </a>
              <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://www.coingecko.com/en/coins/milei-solana">
                <FaGlasses /> Lentes
              </a>
              <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://www.coingecko.com/en/coins/milei-solana">
                <TbShoe /> Tobilleras
              </a>
              <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://dexscreener.com/solana/43N5UGr3mnfhJFzpBPNM7ZdnobghiYBtHTaQfZQv65mh">
                <FaEarDeaf /> Ear Puffs
              </a>
            </div>
          </div>

          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <h2 className='tx-altfont-1 tx-bold-1'>Promos:</h2>
            <div className='flex-col flex-align-start tx-lg'>
              <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://solscan.io/token/43N5UGr3mnfhJFzpBPNM7ZdnobghiYBtHTaQfZQv65mh">
                <FaSun /> 2024 Summer
              </a>
              <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://solscan.io/token/43N5UGr3mnfhJFzpBPNM7ZdnobghiYBtHTaQfZQv65mh">
                <FaMoon /> 2024 Winter
              </a>
              {/* <a className='opaci-chov--50 tx-black nodeco pa-2 px-4' target='_blank' href="https://github.com/SrMessiETH">
          <FaGithub /> Github
        </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>


  </>);
};
