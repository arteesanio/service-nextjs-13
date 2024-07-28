import { FaTwitter, FaTelegram, FaYoutube, FaTiktok, FaExchangeAlt, FaFileAlt, FaChartLine, FaAddressCard } from "react-icons/fa";

export const FooterSection = () => {
  return (
    <div className='w-100 flex-col py-8 tx-black' style={{ background: "#DCDCDC" }}>
      <div className='w-100 w-max-1080px'>
        <div className='Q_xs_flex-col flex-wrap flex-align-start flex-justify-around'>
          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <h2 className='tx-altfont-1 tx-bold-1'>Important Links:</h2>
            <div className='flex-col flex-align-start tx-lg'>
              <h3>Social Media:</h3>
              <a className='opaci-chov--75 tx-black opaci-50 nodeco pa-2 px-4' target='_blank' href="https://twitter.com/your_handle">
                <FaTwitter /> Twitter / X
              </a>
              <a className='opaci-chov--75 tx-black opaci-50 nodeco pa-2 px-4' target='_blank' href="https://t.me/your_channel">
                <FaTelegram /> Telegram
              </a>
              <a className='opaci-chov--75 tx-black opaci-50 nodeco pa-2 px-4' target='_blank' href="https://youtube.com/your_channel">
                <FaYoutube /> Youtube
              </a>
              <a className='opaci-chov--75 tx-black opaci-50 nodeco pa-2 px-4' target='_blank' href="https://tiktok.com/@your_handle">
                <FaTiktok /> TikTok
              </a>
            </div>
          </div>

          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <div className='flex-col flex-align-start tx-lg'>
              <h3>Token:</h3>
              <a className='opaci-chov--75 tx-black opaci-50 nodeco pa-2 px-4' target='_blank' href="https://exchange.example.com">
                <FaExchangeAlt /> Buy from exchange
              </a>
              <a className='opaci-chov--75 tx-black opaci-50 nodeco pa-2 px-4' target='_blank' href="https://coingecko.com/your_token">
                <FaFileAlt /> Coingecko
              </a>
              <span className='opaci-50 pa-2 px-4'>Coinmarketcap (Soon)</span>
              <a className='opaci-chov--75 tx-black opaci-50 nodeco pa-2 px-4' target='_blank' href="https://chart.example.com">
                <FaChartLine /> Chart
              </a>
            </div>
          </div>

          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <div className='flex-col flex-align-start tx-lg'>
              <h3>Other Links:</h3>
              <a className='opaci-chov--75 tx-black opaci-50 nodeco pa-2 px-4' target='_blank' href="https://contract.example.com">
                <FaAddressCard /> Contract Address
              </a>
              <a className='opaci-chov--75 tx-black opaci-50 nodeco pa-2 px-4' target='_blank' href="https://whitepaper.example.com">
                <FaFileAlt /> Whitepaper
              </a>
              <a className='opaci-chov--75 tx-black opaci-50 nodeco pa-2 px-4' target='_blank' href="https://partnersoftware.example.com">
                <FaChartLine /> Partner Software
              </a>
            </div>
          </div>
        </div>

        <div className='tx-altfont-1 tx-bold-2 mb-4 flex flex-justify-between Q_xs_flex-col'>
          <div className="tx-lx tx-altfont-1 flex-center">
            <img src="/img/android-icon-48x48.png" width={32} style={{}} />
            <div className="opaci-75 pl-3">Your Company Name</div>
          </div>
          <div className="opaci-25 tx-altfont-1">Copyright © 2024</div>
        </div>
      </div>
    </div>
  );
};
