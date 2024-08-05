import { FaPhone, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export const RegionalContact = () => {
  return (<>
    <div className=' flex-col pos-rel flex-1'>


      <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
        <h2 className='tx-altfont-1 tx-bold-1 py-3'></h2>
        <div className='flex-col flex-align-start '>

          <a className='  nodeco py-3 flex-center gap-3'

          >
            🇵🇦
            <div className=' tx-lx'>Panama</div>
          </a>
          <a className='  nodeco pb-3 flex-center gap-3'
            style={{ color: "#888888" }}
          >
            <FaPhone />
            <div className=' '>+507 6997-0742</div>
          </a>
          <hr className='opaci-10 bb-4 w-100' />

          <a className='  nodeco py-3 flex-center gap-3'

          >
            🇨🇴
            <div className=' tx-lx'>Colombia</div>
          </a>
          <a className='  nodeco pb-3 flex-center gap-3'
            style={{ color: "#888888" }}
          >
            <FaPhone />
            <div className=' '>+57 3023075161</div>
          </a>
          <hr className='opaci-10 bb-4 w-100' />
          <a className='  nodeco py-3 flex-center gap-3'
          >
            🇵🇦
            <div className=' tx-lx'>Costa Rica</div>
          </a>
          <a className='  nodeco pb-3 flex-center gap-3'
            style={{ color: "#888888" }}
          >
            <FaPhone />
            <div className=' '>+507 6997-0742</div>
          </a>
          <hr className='opaci-10 bb-4 w-100' />
          <a className='  nodeco py-3 flex-center gap-3'
            style={{ color: "#888888" }}
          >
            🇻🇪
            <div className=' tx-lx'>Venezuela</div>
          </a>
          <a className='  nodeco pb-3 flex-center gap-3'
            style={{ color: "#888888" }}
          >
            <FaPhone />
            <div className=' '>+507 6997-0742</div>
          </a>
          <hr className='opaci-10 bb-8 w-100' />
          <div className='flex-wrap w-100 flex-justify-around gap-3 tx-lx mt-4'>
            <a className='bg-w-10 flex-col h-80px w-80px bord-r-100p opaci-chov--50 tx-white' href='https://www.instagram.com/irecoverypanama/' target="_blank">
              <div className='pos-abs flex-col'>
                <FaTwitter />
              </div>
            </a>
            <a className='bg-w-10 flex-col h-80px w-80px bord-r-100p opaci-chov--50 tx-white' href='https://www.instagram.com/irecoverypanama/' target="_blank">
              <div className='pos-abs flex-col'>
                <FaInstagram />
              </div>
            </a>
            <a className='bg-w-10 flex-col h-80px w-80px bord-r-100p opaci-chov--50 tx-white' href='https://www.instagram.com/irecoverypanama/' target="_blank">
              <div className='pos-abs flex-col'>
                <FaFacebook />
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  </>);
};
