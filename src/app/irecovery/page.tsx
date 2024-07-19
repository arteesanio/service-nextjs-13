import { LogoButton } from '@/dom/LogoButton'
import { AppButtonsGroup } from '@/dom/AppButtonsGroup'
import { ShopSection } from '@/dom/ShopSection'



export default function Home() {
  return (
    <main className='flex-col w-100  autoverflow-y flex-justify-start pt-8 pb-100 ' style={{background: "#F6F6F6"}}>
      <div className='Q_sm_md pt-8 block w-100'></div>
      <LogoButton />
      <div className='Q_sm_x w-300px pos-fix top-0 right-0 z-200'><AppButtonsGroup /></div>
      <div className='Q_xs pos-fix bottom-0 w-100 z-200'><AppButtonsGroup /></div>
      <ShopSection />
    </main>
  )
}


