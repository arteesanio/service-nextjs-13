import { FooterSection } from '@/dom/FooterSection'
import { ContactButton } from '@/dom/ContactButton'
import { ServicesCardsLLL } from "@/dom/landing/lll/ServicesCardsLLL"
import { HeroLandingLLL } from "@/dom/landing/lll/HeroLandingLLL"
import { AboutUsRecoveryLLL } from "@/dom/landing/lll/AboutUsRecoveryLLL"
import { MentionsList } from '@/dom/landing/MentionsList'
import { RecoveryMethodsSectionLLL } from "@/dom/landing/lll/RecoveryMethodsSectionLLL"
import { ContactFormLLL } from "@/dom/landing/lll/ContactFormLLL"
import { ContactProfesionalsLLL } from "@/dom/landing/lll/ContactProfesionalsLLL"
import { MainNavBarLLL } from '@/dom/landing/lll/MainNavBarLLL'



export default function Home() {
return (
<main className=' tx-altfont-2' style={{background: "#ececec"}}>
  <div className='flex-col'>





  <MainNavBarLLL />







    <HeroLandingLLL  />



    <div id='nosotros'></div>
    <AboutUsRecoveryLLL />

    <div id='servicios'></div>
    <img src='/sectionspng/moutnain.png' className='block w-100'
    style={{filter: "invert(.957)"}}
     />

    <div className=' pb-150 flex-col w-100 '
    style={{ background: "linear-gradient(0deg, #92A8B4, #ebebeb, #F0EEE8)" }}
    >
      <ServicesCardsLLL />
    </div>
    <div className='flex-col pos-rel w-100'>

      <div className='pos-abs bottom-0 mb-100 z-100 opaci-chov--50 '>
        <div className='tx-white tx-center tx-lgx px-8  py-2' style={{background: "#1D2A76"}}>
          <div>Recuperamos <br /> datos de DVR</div>
        </div>
      </div>
      <div className='pos-abs top-0 mt-100 z-100'>
        <div className='tx-white tx-lx   py-2' style={{background: ""}}>
          Testimonials
        </div>
      </div>

      <div className=' w-100 flex-col pos-rel noverflow py-200'
      
      style={{ background: ""}}
      >
        <div className='pos-abs w-100 flex-col '>
          <img src='/sectionspng/hacker.jpg' 
          className='block h-min-100vh opaci-50 ' 
            style={{filter: "blur(5px)"}}
          />
        </div>
        <MentionsList />
      </div>
    </div>






    <div className='flex-col w-100  pt-100'
      // style={{background: "linear-gradient(0deg, #000000, #071319, #071319, #000000)"}}
      style={{
        background: "linear-gradient(180deg,  #77828B, #ECECEC)"
      }}
    >
      <div className='w-100 w-1080px tx-black'>
        <div className='  pl-4'>
          <div className='tx-white tx-xl Q_xs'>Recovery</div>
          <div className='tx-white tx-xxxl Q_sm_x'>Recovery</div>
        </div>
      <RecoveryMethodsSectionLLL />

      </div>
    </div>





    <div id='contact'></div>



    <div className='flex-col w-100 mt-100'
      // style={{background: "linear-gradient(0deg, #000000, #020D1A33, #020D1A33, #000000)"}}
      // style={{background: "linear-gradient(0deg, #000000, #020D1A33, #020D1A33, #000000)"}}
    >
      <div className='w-100 w-max-1080px flex-col'>
        <ContactProfesionalsLLL />
      </div>
    </div>

    <div className='py-100'></div>


    <div id='contact'></div>














    <div style={{transform: "scale(1,1)", }} className='tx-ls-5'>
      <div className='Q_xs tx-altfont-1 tx-xl'>CONTACT</div>
      <div className='Q_sm_x tx-xxxl tx-altfont-1'>CONTACT</div>
    </div>
    <div className='flex-col w-100 pt-100 '
      style={{background: "#E4E1DE"}}
    >
      <div className='w-100 w-max-1080px flex-col'>
        <ContactFormLLL />
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


