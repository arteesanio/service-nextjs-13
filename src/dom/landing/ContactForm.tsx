import { FaPhone, FaMailBulk, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"
import { FaMessage, FaMapLocation } from "react-icons/fa6"

export const ContactForm = () => {
  return (<>
  <div className="flex w-100 gap-8 Q_xs_sm_flex-col">
      <div className='flex-1 flex-col w-100'>
        <div className='w-90 flex-col tx-altfont- flex-align-stretch  pos-rel gap-4  '>
          <div className=' flex-col flex-align-stretch'>
            <input type="text" className='tx-altfont-1 tx-white  bg-trans px-2 bord-r-5 tx-lg py-1 ' placeholder='NAME'
              style={{border: "1px solid #ffffff44"}}
             />
          </div>
          <div className=' flex-col flex-align-stretch'>
            <input type="text" className='tx-altfont-1 tx-white  bg-trans px-2 bord-r-5 tx-lg py-1 ' placeholder='EMAIL'
              style={{border: "1px solid #ffffff44"}}
             />
          </div>
          <div className=' flex-col flex-align-stretch'>
            <textarea className='tx-altfont-1 tx-white  bg-trans px-2 bord-r-5 tx-lg py-1 h-min-300px' placeholder='MESSAGE'
              style={{border: "1px solid #ffffff44"}}
             />
          </div>
          <div className='flex-center tx-altfont-1  gap-4 tx-white tx-center tx-lgx px-8 py-2' style={{background: "#1D2A76"}}>
      <FaMessage /> 
      <div>Send</div>
    </div>
        </div>

        </div>
        <div className=' flex-col pos-rel flex-1'>
          
          
          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <h2 className='tx-altfont-1 tx-bold-1 py-3'></h2>
            <div className='flex-col flex-align-start '>
              <a className='  nodeco py-6  flex-center gap-3' 
                style={{color: "#888888"}}
              >
                <FaMapLocation /> 
                <div className='Q_xs '>Panama City, Panama</div>
                <div className='Q_sm_x tx-lx'>Panama City, Panama</div>
              </a>
              <a className='  nodeco py-6  flex-center gap-3' 
                style={{color: "#888888"}}
              >
                <FaPhone /> 
                <div className='Q_xs '>+507 6997-0742</div>
                <div className='Q_sm_x tx-lx'>+507 6997-0742</div>
              </a>
              <a className='  nodeco py-6    flex-center gap-3' 
                style={{color: "#888888"}}
              >
                <FaMailBulk />
                <div className='Q_xs '>support@irecoverydata.com</div>
                <div className='Q_sm_x tx-lgx'>support@irecoverydata.com</div>
              </a>
              <hr className='opaci-10 mb-8 w-100' />
              <div className='flex-wrap w-100 flex-justify-around gap-3 tx-lx'>
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
    </div>
  </>)
}

export const ContactFormLLL = () => {
  return (<>
  <div className="flex w-100 gap-8 Q_xs_sm_flex-col ">
      <div className='flex-1 flex-col'>
        <div className='w-100 flex-col tx-altfont- flex-align-stretch  pos-rel gap-4  '>
          <div className=' flex-col flex-align-stretch'>
            <input type="text" className='tx-altfont-1 tx-  bg-trans bord-r-5 tx-lg py-1 ' placeholder='NAME'
              style={{border: "1px solid #ffffff44"}}
             />
          </div>
          <div className=' flex-col flex-align-stretch'>
            <input type="text" className='tx-altfont-1 tx-  bg-trans bord-r-5 tx-lg py-1 ' placeholder='EMAIL'
              style={{border: "1px solid #ffffff44"}}
             />
          </div>
          <div className=' flex-col flex-align-stretch'>
            <textarea className='tx-altfont-1 tx-  bg-trans bord-r-5 tx-lg py-1 h-min-300px' placeholder='MESSAGE'
              style={{border: "1px solid #ffffff44"}}
             />
          </div>
          <div className='flex-center tx-altfont-1  gap-4 tx- tx-center tx-lgx px-8 py-2' style={{background: "#1D2A76"}}>
      <FaMessage /> 
      <div>Send</div>
    </div>
        </div>

        </div>
        <div className=' flex-col pos-rel flex-1'>
          
          
          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <h2 className='tx-altfont-1 tx-bold-1 py-3'></h2>
            <div className='flex-col flex-align-start '>
              <a className='  nodeco py-6  flex-center gap-3' 
                style={{color: "#888888"}}
              >
                <FaMapLocation /> 
                <div className='Q_xs '>Panama City, Panama</div>
                <div className='Q_sm_x tx-lx'>Panama City, Panama</div>
              </a>
              <a className='  nodeco py-6  flex-center gap-3' 
                style={{color: "#888888"}}
              >
                <FaPhone /> 
                <div className='Q_xs '>+507 6997-0742</div>
                <div className='Q_sm_x tx-lx'>+507 6997-0742</div>
              </a>
              <a className='  nodeco py-6    flex-center gap-3' 
                style={{color: "#888888"}}
              >
                <FaMailBulk />
                <div className='Q_xs '>support@irecoverydata.com</div>
                <div className='Q_sm_x tx-lgx'>support@irecoverydata.com</div>
              </a>
              <hr className='opaci-10 mb-8 w-100' />
              <div className='flex-wrap w-100 flex-justify-around gap-3 tx-lx'>
              <a className='bg-w-10 flex-col h-80px w-80px bord-r-100p opaci-chov--50 tx-' href='/'>
                  <div className='pos-abs flex-col'>
                  <FaTwitter />
                  </div>
                </a>
                <a className='bg-w-10 flex-col h-80px w-80px bord-r-100p opaci-chov--50 tx-' href='/'>
                  <div className='pos-abs flex-col'>
                  <FaInstagram />
                  </div>
                </a>
                <a className='bg-w-10 flex-col h-80px w-80px bord-r-100p opaci-chov--50 tx-' href='/'>
                  <div className='pos-abs flex-col'>
                  <FaFacebook />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  </>)
}