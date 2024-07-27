import { FooterSection } from '@/dom/FooterSection'
import { ContactButton } from '@/dom/ContactButton'
import { FaMapLocation, FaMessage } from 'react-icons/fa6'
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { ServicesCards } from '@/dom/landing/ServicesCards'
import { HeroLanding } from '@/dom/landing/HeroLanding'
import { AboutUsRecovery } from '@/dom/landing/AboutUsRecovery'
import { MentionsList } from '@/dom/landing/MentionsList'
import { RecoveryMethodsSection } from '@/dom/landing/RecoveryMethodsSection'
import { ContactForm } from '@/dom/landing/ContactForm'
import { ContactProfesionals } from '@/dom/landing/ContactProfesionals'
import MainNavBar from '@/dom/landing/MainNavBar'



export default function Home() {
return (
<main className='bg-black tx-white tx-altfont-2'>
  <div className='flex-col'>
    <MainNavBar />

    <HeroLanding  />

    <div id='nosotros'></div>
    <AboutUsRecovery />

    <div id='servicios'></div>
    <img src='/sectionspng/moutnain.png' className='block w-100' />

    <div className=' pb-150 flex-col w-100 ' style={{ background: "#02040B" }}>
      <ServicesCards />
    </div>
    <div className='flex-col pos-rel w-100'>
      <a className='pos-abs bottom-0 mb-100 z-100 opaci-chov--50 ' href="https://api.whatsapp.com/send?phone=50769970742&text=DVR">
        <div className='tx-white tx-center tx-lgx px-8  py-2' style={{background: "#1D2A76"}}>
          <div>Recuperamos <br /> datos de DVR</div>
        </div>
      </a>
      <div className='pos-abs top-0 mt-100 z-100'>
        <div className='tx-white tx-lx   py-2' style={{background: ""}}>
          Testimonials
        </div>
      </div>

      <div className=' w-100 flex-col pos-rel noverflow py-200'>
        <div className='pos-abs w-100 flex-col'>
          <img src='/sectionspng/hacker.jpg' className='block h-min-100vh opaci-50' 
            style={{filter: "blur(5px)"}}
          />
        </div>
        <MentionsList />
      </div>
    </div>

    <div className='flex-col w-100 mt-100'
      style={{background: "linear-gradient(0deg, #000000, #071319, #071319, #000000)"}}
    >
      <div className='w-100 flex-col'>
        <div className='  pl-4'>
          <div className='tx-xl Q_xs'>Recovery</div>
          <div className='tx-xxxl Q_sm_x'>Recovery</div>
        </div>
      <RecoveryMethodsSection />

      </div>
    </div>

    <div className='flex-col w-100 mt-100'
      style={{background: "linear-gradient(0deg, #000000, #020D1A33, #020D1A33, #000000)"}}
    >
      <div className='w-100 w-max-1080px flex-col'>
        <ContactProfesionals />
      </div>
    </div>

    <div id='contacto'></div>

    <div className='py-100'></div>

    <div style={{transform: "scale(1,1)"}} className='tx-ls-5'>
      <div className='Q_xs tx-altfont-1 tx-xl'>CONTACTO</div>
      <div className='Q_sm_x tx-xxxl tx-altfont-1'>CONTACTO</div>
    </div>
    <div className='flex-col w-100 mt-100'>
      <div className='w-100 w-max-1080px flex-col'>
        <ContactForm />
      </div>
    </div>

    <div className='py-100'></div>

  {/* <div className='w-100 w-max-1080px noverflow flex-col the_root'>
  <div className='w-100  noverflow flex-col the_app '>
  <AdvancedSwipe /> 
  </div>
  </div> */}

  <FooterSection />
  <ContactButton />

  </div>
</main>
)
}


