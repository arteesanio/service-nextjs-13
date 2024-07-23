import { LogoButton } from '@/dom/LogoButton'
import { AppButtonsGroup } from '@/dom/AppButtonsGroup'
import { ShopSection } from '@/dom/ShopSection'



export default function Home() {
  return (
    // <main className='flex-col w-100  autoverflow-y flex-justify-start pt-8 pb-100 ' style={{background: "#F6F6F6"}}>
    //   <div className='Q_sm_md pt-8 block w-100'></div>
    //   <LogoButton />
    //   <div className='Q_sm_x w-300px pos-fix top-0 right-0 z-200'><AppButtonsGroup /></div>
    //   <div className='Q_xs pos-fix bottom-0 w-100 z-200'><AppButtonsGroup /></div>
    //   <ShopSection />
    // </main>
    <main className=''>
      <div>
        <img src='/sectionspng/section(1).png' className='block w-100' />
        <img src='/sectionspng/section(2).png' className='block w-100' />
        <img src='/sectionspng/section(3).png' className='block w-100' />
        <img src='/sectionspng/section(4).png' className='block w-100' />
        <img src='/sectionspng/section(5).png' className='block w-100' />
        <img src='/sectionspng/section(6).png' className='block w-100' />
        <img src='/sectionspng/section(7).png' className='block w-100' />
        <img src='/sectionspng/section(8).png' className='block w-100' />
      </div>
    </main>
  )
}

