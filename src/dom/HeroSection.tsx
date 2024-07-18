"use client"
import { usePathname } from "next/navigation";



export const HeroSection = () => {
  const pathname = usePathname();


  return (<>
    <div className='w-100  w-max-1080px'>
      <div className='flex-wrap flex-align-start'>

        <div className='flex-col Q_xs mb-8'>
          <img src={`/img/phones.png`} className='w-100 w-max-700px ' />

          <div className='w-100 flex '>
            <div className='flex-1'></div>
            <a className=' w-min-250px tx-center nodeco tx-black  box-shadow-2-b mainActionButton pointer' href='/shop'
              style={{
                background: "linear-gradient(-45deg, #ffffff, #FFe8d8 )"
                // borderRadius: "25px 10px 10px 25px",
                // boxShadow: "-2px 2px 0 #FFD23F"
              }}
            >
              <div className='tx-xl py-2 tx-altfont-1 '>Enter</div>
            </a>
          </div>
        </div>

        <div className='flex-1 flex-col flex-justify-start'>
          <div className='mt-100 Q_sm_x'>
          </div>
          <div>
            <img src='/img2/cost.png' className=' w-100 w-max-600px' />
          </div>
        </div>
        <div className='flex flex-align-start'>

          <div className='flex-col Q_sm_x'>
            <img src={`/img2/price2.png`} className='w-100 w-max-700px ' />
            <div className='w-100 flex mt-8 '>
              <div className='flex-1'></div>
              <a className=' w-min-250px tx-center nodeco  box-shadow-2-b mainActionButton pointer tx-black nodeco' href='/shop'
                style={{
                  background: "linear-gradient(-45deg, #ffffff, #e8FFd8 )"
                  // borderRadius: "25px 10px 10px 25px",
                  // boxShadow: "-2px 2px 0 #FFD23F"
                }}
              >
                <div className='tx-xl py-2 tx-altfont-1 '>Enter</div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>);
};
