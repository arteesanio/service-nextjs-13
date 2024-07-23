import { LogoButton } from '@/dom/LogoButton'
import { AppButtonsGroup } from '@/dom/AppButtonsGroup'
import { ShopSection } from '@/dom/ShopSection'
import { AdvancedSwipe } from '@/dom/AdvancedSwipe'
import { FooterSection } from '@/dom/FooterSection'
import { ContactButton } from '@/dom/ContactButton'
import { FaBuilding, FaMap, FaMapLocation, FaMessage } from 'react-icons/fa6'
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'



export default function Home() {
  return (
    // <main className='flex-col w-100  autoverflow-y flex-justify-start pt-8 pb-100 ' style={{background: "#F6F6F6"}}>
    //   <div className='Q_sm_md pt-8 block w-100'></div>
    //   <LogoButton />
    //   <div className='Q_sm_x w-300px pos-fix top-0 right-0 z-200'><AppButtonsGroup /></div>
    //   <div className='Q_xs pos-fix bottom-0 w-100 z-200'><AppButtonsGroup /></div>
    //   <ShopSection />
    // </main>
    <main className='bg-black tx-white tx-altfont-2'>
      <div className='flex-col'>
        <div className='flex w-max-1080px w-100 pos-fix z-100 top-0 mt-4'
        //  style={{background: "linear-gradient(0deg, #00000000, #000000cc 15%, #000000cc 80%, #00000000)"}}
         >
          <div className='flex-1 flex-col flex-align-start pl-8 '>
            <img src='/sectionspng/logo.png' className='block bg-glass-6 bg-b-90  bord-r-100p opaci-chov--50 px-2 py-1' width={48} 
              // style={{background: "linear-gradient(120deg, #00000022, #000000cc)"}}
              style={{boxShadow: "0 0 15px #aaccff33"}}
            />
          </div>
          <div className='flex'>
            <a href="#about"
            style={{background: "linear-gradient(0deg, #00000000, #000000ee 15%, #000000ee 80%, #00000000)"}}
             className='pa-8 tx-altfont-1 opaci-chov--50 Q_md_x tx-white nodeco'>About</a>
             <a  href="#services"
             style={{background: "linear-gradient(0deg, #00000000, #000000ee 15%, #000000ee 80%, #00000000)"}}
              className='pa-8 tx-altfont-1 opaci-chov--50 tx-white nodeco'>Services</a>
            <a href="#contact"
            style={{background: "linear-gradient(0deg, #00000000, #000000ee 15%, #000000ee 80%, #00000000)"}}
             className='pa-8 tx-altfont-1 opaci-chov--50 Q_sm_x tx-white nodeco'>Contact</a>
          </div>
        </div>
        <div className='flex-col h-min-100vh w-100'>
          <div className='w-max-1080px w-100 z-10 flex mt-150'>
            <div className=' w-max-600px tx-xl' style={{}}>
              <div className='px-4'>Recuperacion Profesional de Datos, Analisis y Eliminacion Segura de Archivos</div>
            </div>
          </div>
          <div className='z-10  w-100 flex flex-justify-end w-max-1080px translate-y-50 '>
            <div className='mx-4 tx-xl px-8 py-2 opaci-chov--50'
              style={{background: "linear-gradient(85deg,#FB8300, #A93307)"}}
            >
              Start
            </div>
          </div>
          <div className='pos-abs w-100 flex-col top-0'>
            <img src='/sectionspng/artwork(29) - copia.png' className='block w-100' />
          </div>
        </div>



        <div id='about'></div>
        <div className='h-min-90vh pt-100 flex-col w-100 '>
          <img src='/sectionspng/gridimage.png' className='block w-100 pos-abs  opaci-50' />
          <div className='w-max-1080px w-100 flex-col flex-align-start z-5 '>
            <div className='tx-xl tx-altfont-1 tx-bold-8 w-max-700px px-4'>Tecnología de la información</div>
            <div className='tx-xl tx-altfont-1 tx-bold-8 w-max-700px px-4'>iRecovery Data Panamá</div>
            <div className='py-4'></div>
            <div className='tx-altfont-1 w-max-600px py-1 w-100 px-4'>
              El análisis forense de datos es esencial para cualquier empresa que busque protegerse contra el fraude y otros delitos informáticos.
            </div>
            <div className='tx-altfont-1 w-max-600px py-1 w-100 px-4'>
              Datos virtuales podrán ser presentados como pruebas electrónicas ante la justicia.
            </div>
            <div className='px-4 flex-col flex-align-start'>
              <div className='tx-altfont-1 tx-lg mt-4 py-2 bord-r-100 px-4  border-white opaci-chov--50 tx-bold-2'>
                <div className=''>Contacta nuestro equipo de expertos y recupera datos →</div>
              </div>
              <div className='tx-altfont-1 tx-lg mt-4 py-2 bord-r-100 px-4  border-white opaci-chov--50 tx-bold-2'>
                Analisis Gratis →
              </div>
            </div>
          </div>
        </div>

        <div id='services'></div>
        <img src='/sectionspng/moutnain.png' className='block w-100' />

        <div className=' pb-150 flex-col w-100 '
        style={{
          // minHeight: "70vh",
          background: "#02040B"
        }}
        >
          <div className='flex-wrap gap-4 px-4'>
            <div className='h-300px  flex-col py-100 bord-r-15 '  
              style={{background: ""} }
            >
              <div className='pa-2  flex-1 flex-col bord-r-25' style={{
                background: "linear-gradient(-50deg, #1B114B, #1551AE)"
                }}>
                <div className="tx-altfont-1 w-min-200px bg-b-90 flex-1 bord-r-25 py-6 px-4 flex-col box-shadow-i-5-b">
                  <div className="tx-center pb-2 tx-lgx">RECUPERACIÓN <br /> DE DATOS</div>
                  <div className='flex-1 flex-col'>
                  <div className='pa-8 bord-r-100p flex-col '
                    style={{background: "linear-gradient(150deg, #1B114B, #1551AE)"}}
                  >
                    <div className='pos-abs tx-lx'>📄</div>
                    
                  </div>
                  </div>
                  <div className='flex-1 w-max-200px pt-2 tx-smd'>
                    Recuperación de Datos de soporte de almacenamiento,
                    disco duro, SSD, NAS, RAID, server, DVR. 
                  </div>
                  <div className='pt-4 opaci-30 opaci-chov--75 '>Saber mas</div>
                  </div>
                <div className=' py-1 my-2 bg-b-50 px-4 bord-r-10 opaci-chov--50'
                  style={{boxShadow: "inset 5px 5px 15px #ffffff11, 3px 5px 5px #000000aa"}}
                >Request</div>
                </div>
                </div>
            <div className='h-400px  flex-col py-100 bord-r-15 '  
              style={{}}
            >
              <div className='pa-2  flex-1 flex-col bord-r-25 ' style={{
                    boxShadow: "0 0 50px #77bbff33",
                background: "linear-gradient(-50deg, #1B114B, #1551AE)"
                }}>
                <div className='pa-2 bord-r-100  mt-1 mb-2'
                  style={{
                    background: "radial-gradient(#77aaff, #223344, #001122, #00000000,#00000000,#00000000, #00000000), linear-gradient(150deg, #1B114B, #1551AE) "
                  }}
                ></div>
                <div className="tx-altfont-1 w-min-200px bg-b-90 flex-1 bord-r-25 py-6 px-4 flex-col box-shadow-i-5-b">
                  <div className="tx-center pb-2 tx-lgx">ANÁLISIS <br /> FORENSE</div>
                  <div className='flex-1 flex-col'>
                    <div className='pa-8 bord-r-100p flex-col '
                      style={{background: "linear-gradient(150deg, #1B114B, #1551AE)"}}
                    >
                      <div className='pos-abs tx-lx'>📝</div>
                      
                    </div>
                  </div>
                  <div className='flex-1 w-max-200px pt-2 tx-smd'>
                    La búsqueda de datos informáticos como una prueba fiable y legal. 
                    a través de profesionales.
                  </div>
                  <div className='pt-4 opaci-30 opaci-chov--75 '>Saber mas</div>
                  </div>
                <div className=' py-1 my-2 bg-b-50 px-4 bord-r-10 opaci-chov--50'
                  style={{boxShadow: "inset 5px 5px 15px #ffffff11, 3px 5px 5px #000000aa"}}
                >Request</div>
              </div>
            </div>
            <div className='h-300px  flex-col py-100 bord-r-15 '  
              style={{background: ""} }
            >
              <div className='pa-2  flex-1 flex-col bord-r-25' style={{
                background: "linear-gradient(-50deg, #1B114B, #1551AE)"
                }}>
                <div className="tx-altfont-1 w-min-200px bg-b-90 flex-1 bord-r-25 py-6 px-4 flex-col box-shadow-i-5-b">
                    <div className="tx-center pb-2 tx-lgx">ELIMINACIÓN <br /> SEGURA</div>
                    <div className='flex-1 flex-col'>
                    <div className='pa-8 bord-r-100p flex-col '
                      style={{background: "linear-gradient(150deg, #1B114B, #1551AE)"}}
                    >
                      <div className='pos-abs tx-lx'>🗑️</div>
                      
                    </div>
                    </div>
                  <div className='flex-1 w-max-200px pt-2 tx-smd'>
                    La eliminación segura borra permanentemente datos en medios de almacenamiento.
                  </div>
                  <div className='pt-4 opaci-30 opaci-chov--75 '>Saber mas</div>
                  </div>
                <div className=' py-1 my-2 bg-b-50 px-4 bord-r-10 opaci-chov--50'
                  style={{boxShadow: "inset 5px 5px 15px #ffffff11, 3px 5px 5px #000000aa"}}
                >Request</div>
                </div>
            </div>
          </div>
        </div>
<div className='flex-col pos-rel w-100'>
  
<div className='pos-abs bottom-0 mb-100 z-100 opaci-chov--50 '>
    <div className='tx-white tx-center tx-lgx px-8 py-2' style={{background: "#1D2A76"}}>
      Recuperamos datos de DVR
    </div>
  </div>
  <div className='pos-abs top-0 mt-100 z-100'>
    <div className='tx-white tx-lx px-8 py-2' style={{background: ""}}>
      Testimonials
    </div>
  </div>

        <div className=' w-100 flex-col pos-rel noverflow py-200'>
  <div className='pos-abs w-100 flex-col'>
    <img src='/sectionspng/hacker.jpg' className='block h-min-100vh opaci-50' 
      style={{filter: "blur(5px)"}}
    />
  </div>
  <div className='pos-rel flex-wrap gap-4 w-max-1080px '>
    <div className=' bg-white tx-black w-max-300px pa-4 tx-altfont-1'
      style={{clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 90% 0%)"}}
    >
      <div className='tx-altfont-2'>John D.</div>
      <div>Company X</div>
      <hr className='opaci-10 mb-2' />
      <i className=''>Excellent service! They recovered all our critical data after a major server crash. Highly recommend their IT support.</i>
    </div>
    <div className=' bg-white tx-black w-max-300px pa-4 tx-altfont-1'
      style={{clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 90% 0%)"}}
    >
      <div className='tx-altfont-2'>Jane S.</div>
      <div>Freelancer</div>
      <hr className='opaci-10 mb-2' />
      <i className=''>I thought I had lost all my work after my hard drive failed, but they managed to retrieve everything. Lifesavers!</i>
    </div>
    <div className=' bg-white tx-black w-max-300px pa-4 tx-altfont-1'
      style={{clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 90% 0%)"}}
    >
      <div className='tx-altfont-2'>Michael B.</div>
      <div>Startup Inc.</div>
      <hr className='opaci-10 mb-2' />
      <i className=''>Their IT consultancy helped us set up a reliable data backup system. Now we feel much more secure about our data.</i>
    </div>
    <div className=' bg-white tx-black w-max-300px pa-4 tx-altfont-1 Q_sm_x'
      style={{clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 90% 0%)"}}
    >
      <div className='tx-altfont-2'>Susan K.</div>
      <div>Photographer</div>
      <hr className='opaci-10 mb-2' />
      <i className=''>They recovered my entire photo library from a damaged drive. I can’t thank them enough!</i>
    </div>
    <div className=' bg-white tx-black w-max-300px pa-4 tx-altfont-1 Q_sm_x'
      style={{clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 90% 0%)"}}
    >
      <div className='tx-altfont-2'>David R.</div>
      <div>Small Business Owner</div>
      <hr className='opaci-10 mb-2' />
      <i className=''>Professional and efficient. They got our office network back up and running in no time after a malware attack.</i>
    </div>
    <div className=' bg-white tx-black w-max-300px pa-4 tx-altfont-1 Q_sm_x'
      style={{clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 90% 0%)"}}
    >
      <div className='tx-altfont-2'>Linda M.</div>
      <div>Graphic Designer</div>
      <hr className='opaci-10 mb-2' />
      <i className=''>I was in panic mode after my external hard drive crashed, but they managed to recover all my files. Truly amazing service!</i>
    </div>
    <div className=' bg-white tx-black w-max-300px pa-4 tx-altfont-1 Q_sm_x'
      style={{clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 90% 0%)"}}
    >
      <div className='tx-altfont-2'>Robert C.</div>
      <div>Law Firm</div>
      <hr className='opaci-10 mb-2' />
      <i className=''>Top-notch data recovery service. They were able to recover sensitive client data that we thought was lost forever.</i>
    </div>
    <div className=' bg-white tx-black w-max-300px pa-4 tx-altfont-1 Q_sm_x'
      style={{clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 90% 0%)"}}
    >
      <div className='tx-altfont-2'>Emily W.</div>
      <div>Writer</div>
      <hr className='opaci-10 mb-2' />
      <i className=''>When my laptop died, they recovered all my manuscripts and important documents. Highly grateful for their help!</i>
    </div>
  </div>
</div>
</div>






<div className='flex-col w-100 mt-100'
style={{background: "linear-gradient(0deg, #000000, #071319, #071319, #000000)"}}
>
  <div className='w-100 w-max-1080px flex-col'>
    <div className='tx-xxxl w-100 pl-4'>Recovery</div>
    <div className="flex w-100 gap-8 Q_xs_sm_flex-col">
      <div className='flex-1'>
        <div className='pt-1 my-8  w-100' style={{background: "#1A3DC6"}}></div>
        <div className='w-100 flex-col tx-altfont-1 flex-align-start px-4'>
          <div className='w-100 opaci-50 tx-lgx'>
            DATA EMERGENCY
          </div>
          <div className='opaci-20  w-100 my-4' style={{paddingTop:"3px",background: "#1A3DC6"}} ></div >
          <div className='w-100 opaci-50 tx-bold-2 tx-altfont-2 w-max-400px '>
          iRecovery es la única empresa en Europa y Latinoamérica que ofrece el primer servicio de Recuperación de Datos con cita previa
          </div>
        </div>

        <div className='pt-1 my-8  bg-w-10 w-100'></div>
        
        <div className='w-100 flex-col tx-altfont-1 flex-align-start px-4'>
          <div className='w-100 opaci-50 tx-lgx'>
            IPSP
          </div>
          <div className='opaci-20  w-100 my-4' style={{paddingTop:"3px",background: "#1A3DC6"}} ></div >
          <div className='w-100 opaci-50 tx-bold-2 tx-altfont-2 w-max-400px '>
          Para proteger todos tus datos contenidos en el Disco Duro o en cualquier otro medio de almacenamiento
          </div>
        </div>
        <div className='pt-1 my-8  bg-w-10 w-100'></div>
        </div>
        <div className=' flex-col pos-rel'>
          <img src="/sectionspng/screen1.png" alt="asd" className='w-100 w-max-400px' />
          <div className='box-shadow-5-t pos-abs tx-white  bottom-0 translate-y--75 opaci-chov--75 Q_sm_x' style={{background: "#16358F"}}>
            <div className=' tx-altfont-1 tx-xl px-8 py-2'>Enter App</div>
          </div>
          <div className='box-shadow-5-t pos-abs tx-white  bottom-0  opaci-chov--75 Q_xs' style={{background: "#16358F"}}>
            <div className=' tx-altfont-1 tx-xl px-8 py-2'>Enter App</div>
          </div>
        </div>
    </div>
    
  </div>
</div>
{/* 
<div className='py-100'>

</div> */}





<div id='contact'></div>



<div className='flex-col w-100 mt-100'
style={{background: "linear-gradient(0deg, #000000, #020D1A33, #020D1A33, #000000)"}}
>
  <div className='w-100 w-max-1080px flex-col'>
    {/* <div className='tx-xxxl w-100 pl-4'>Recovery</div> */}
    <div className="flex w-100 gap-8 Q_xs_sm_flex-col">
      <div className='flex-1 flex-col'>
        {/* <div className='pt-1 my-8  w-100' style={{background: "#1A3DC6"}}></div> */}
        <div className='w-100 flex-col tx-altfont- flex-align-start px-4 pos-rel'>
          <div  className='pos-abs pa-100 top-0'
            style={{filter: "blur(80px)", background: "#062243"}}
          ></div>
          <div className='pl-4 z-5 Q_xs w-100 tx-xl'>Contacta Tecnicos Profesionales para Analisis y 
            <div style={{textShadow: "35px 0  50px  #66330077"}}>Eliminacion</div>
          </div>
          <div className='pl-4 z-5 Q_sm_x w-100 tx-xxxl'>Contacta Tecnicos Profesionales para Analisis y 
            <div style={{textShadow: "35px 0  50px  #66330077"}}>Eliminacion</div>
          </div>
          {/* <div className='opaci-20  w-100 my-4' style={{paddingTop:"3px",background: "#1A3DC6"}} ></div >
          <div className='w-100 opaci-50 tx-bold-2 tx-altfont-2 w-max-400px '>
            No matter assumenda dolores non? Nulla ratione libero nesciunt error, placeat nostrum quae!
          </div> */}
        </div>

        {/* <div className='pt-1 my-8  bg-w-10 w-100'></div> */}
        
        {/* <div className='w-100 flex-col tx-altfont-1 flex-align-start px-4'>
          <div className='w-100 opaci-50 tx-lgx'>
            POOR COMUNICATION
          </div>
          <div className='opaci-20  w-100 my-4' style={{paddingTop:"3px",background: "#1A3DC6"}} ></div >
          <div className='w-100 opaci-50 tx-bold-2 tx-altfont-2 w-max-400px '>
            Existing non? Nulla ratione libero nesciunt error, placeat nostrumnesciunt error, placeat nostrum quae!
          </div>
        </div> */}
        {/* <div className='pt-1 my-8  bg-w-10 w-100'></div> */}
        </div>
        <div className=' flex-col pos-rel'>
        <div  className='pos-abs pa-100 '
            style={{filter: "blur(80px)", background: "#06224377"}}
          ></div>
          <img src="/sectionspng/forense.png" alt="asd" className=' z-5 w-100 w-max-400px' />
          <div className='pos-abs tx-white bg-w-20 z-10 tx-altfont-1 bg-glass-4 bottom-0 right-0 opaci-chov--75 Q_sm_x'>
            <div className='tx-xl px-8 py-2'>START</div>
          </div>
          <div className='pos-abs tx-white bg-w-20 z-10 tx-altfont-1 bg-glass-4 bottom-0 right-0 opaci-chov--75 Q_xs'>
            <div className='tx-xl px-8 py-2'>START</div>
          </div>
        </div>
    </div>
    
  </div>
</div>

<div className='py-100'>

</div>


<div id='contact'></div>














<div style={{transform: "scale(1,1.5)"}} className='tx-ls-5'>
  <div className='Q_xs tx-altfont-1 tx-xl'>CONTACT</div>
  <div className='Q_sm_x tx-xxxl tx-altfont-1'>CONTACT</div>
</div>
<div className='flex-col w-100 mt-100'
// style={{background: "linear-gradient(0deg, #000000, #020D1A33, #020D1A33, #000000)"}}
>
  <div className='w-100 w-max-1080px flex-col'>
    {/* <div className='tx-xxxl w-100 pl-4'>Recovery</div> */}
    <div className="flex w-100 gap-8 Q_xs_sm_flex-col">
      <div className='flex-1 flex-col'>
        {/* <div className='pt-1 my-8  w-100' style={{background: "#1A3DC6"}}></div> */}
        <div className='w-100 flex-col tx-altfont- flex-align-stretch px-4 pos-rel gap-4  '>
          <div className=' flex-col flex-align-stretch'>
            <input type="text" className='tx-altfont-1 tx-white px-4 bg-trans bord-r-5 tx-lg py-1 ' placeholder='NAME'
              style={{border: "1px solid #ffffff44"}}
             />
          </div>
          <div className=' flex-col flex-align-stretch'>
            <input type="text" className='tx-altfont-1 tx-white px-4 bg-trans bord-r-5 tx-lg py-1 ' placeholder='EMAIL'
              style={{border: "1px solid #ffffff44"}}
             />
          </div>
          <div className=' flex-col flex-align-stretch'>
            <textarea className='tx-altfont-1 tx-white px-4 bg-trans bord-r-5 tx-lg py-1 h-min-300px' placeholder='MESSAGE'
              style={{border: "1px solid #ffffff44"}}
             />
          </div>
          <div className='flex-center tx-altfont-1  gap-4 tx-white tx-center tx-lgx px-8 py-2' style={{background: "#1D2A76"}}>
      {/* Recuperamos datos de DVR */}
      <FaMessage /> 
      <div>Send</div>
    </div>
        </div>

        </div>
        <div className=' flex-col pos-rel flex-1'>
        {/* <div  className='pos-abs pa-100 '
            style={{filter: "blur(80px)", background: "#06224377"}}
          ></div> */}
          
          
          <div className='mb-8 flex-col px-4 flex-align-start tx-altfont-1'>
            <h2 className='tx-altfont-1 tx-bold-1 py-3'></h2>
            <div className='flex-col flex-align-start tx-lx'>
              <a className='  nodeco py-6 ' 
                style={{color: "#888888"}}
              >
                <FaMapLocation /> Panama City, Panama
              </a>
              <a className='  nodeco py-6 ' 
                style={{color: "#888888"}}
              >
                <FaPhone /> +507 6997-0742
              </a>
              <a className='  nodeco py-6  tx-lgx ' 
                style={{color: "#888888"}}
              >
                <FaMailBulk /> support@irecoverydata.com
              </a>
              <hr className='opaci-10 mb-8 w-100' />
              <div className='flex-wrap w-100 flex-justify-around'>
              <a className='bg-w-10 flex-col h-80px w-80px bord-r-100p opaci-chov--50 tx-white' href='/'>
                  <div className='pos-abs flex-col'>
                  <FaTwitter />
                  </div>
                </a>
                <a className='bg-w-10 flex-col h-80px w-80px bord-r-100p opaci-chov--50 tx-white' href='/'>
                  <div className='pos-abs flex-col'>
                  <FaInstagram />
                  </div>
                </a>
                <a className='bg-w-10 flex-col h-80px w-80px bord-r-100p opaci-chov--50 tx-white' href='/'>
                  <div className='pos-abs flex-col'>
                  <FaFacebook />
                  </div>
                </a>
              </div>
              {/* <a className='opaci-chov--75 tx-white opaci-50  nodeco pa-2 px-4' target='_blank' href="https://github.com/SrMessiETH">
          <FaGithub /> Github
        </a> */}
            </div>
          </div>
          
        </div>
    </div>
    
  </div>
</div>

<div className='py-100'>

</div>









        {/* <div className='w-100 w-max-1080px noverflow flex-col the_root'>
        <div className='w-100  noverflow flex-col the_app '>
       <AdvancedSwipe /> 
        </div>
        </div> */}


        {/* <img src='/sectionspng/section(1).png' className='block w-100' /> */}
        {/* <img src='/sectionspng/section(2).png' className='block w-100' /> */}
        {/* <img src='/sectionspng/section(3).png' className='block w-100' /> */}
        {/* <img src='/sectionspng/section(4).png' className='block w-100' /> */}
        {/* <img src='/sectionspng/section(5).png' className='block w-100' /> */}
        {/* <img src='/sectionspng/section(6).png' className='block w-100' /> */}
        {/* <img src='/sectionspng/section(7).png' className='block w-100' /> */}
        {/* <img src='/sectionspng/section(8).png' className='block w-100' /> */}

      <FooterSection />
      <ContactButton />



      </div>
    </main>
  )
}


