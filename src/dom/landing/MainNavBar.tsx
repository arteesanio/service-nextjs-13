"use client";
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

const navLinkStyle = {
  background: "linear-gradient(0deg, #00000000, #000000ee 15%, #000000ee 80%, #00000000)"
};

const menuItemStyle = {
  background: "#11111144",
};

const buttonStyle = {
  background: "#222222ee",
  color: "#ffffff"
};

export default function MainNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <div className='flex w-max-1080px w-100 pos-fix z-100 top-0'>
      <a className='flex-1 flex-col flex-align-start pl-8' href='/'> 
        <img 
          src='/sectionspng/logo.png'
          className='block bg-glass-6 bg-b-90 bord-r-100p opaci-chov--75 px-2 py-1'
          width={48}
          style={{ boxShadow: "0 0 15px #aaccff33" }}
        />
      </a>
      <div className='flex Q_sm_x'>
        
<div className="flex-center  mt-8 mr-4 ">
  

  <a
                  href={`/?lang=${"es".toLowerCase()}`}
                  className='px-2 py-1 tx-altfont-1 opaci-chov--75 tx-white bg-b-90 bord-r-l-5  nodeco'
                >
                  {"ES"}
                </a>
                <a
                  href={`/?lang=${"en".toLowerCase()}`}
                  className='px-2 py-1 tx-altfont-1 opaci-chov--75 tx-white bg-b-90 bord-r-r-5  nodeco'
                >
                  {"EN"}
                </a>
            </div>
      </div>
      <div className='flex'>
        {['Nosotros', 'Servicios', 'Contacto'].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            style={navLinkStyle}
            className='pa-8 tx-altfont-1 opaci-chov--75 Q_md_x mt-8 tx-white nodeco'
          >
            {section}
          </a>
        ))}

<div
            key={"section"}
            style={navLinkStyle}
            className='pa-8 px-2 tx-altfont-1 opaci-chov--75 Q_sm_x mt-8 tx-white nodeco'
          >
            {/* {"section"} */}
              
<a
              key={"LOGIN"}
              href={`/?LOGIN=${"LOGIN".toLowerCase()}`}
              style={buttonStyle}
              className='px-5 py-1 tx-altfont-1 opaci-chov--75 tx-white bord-r-5  nodeco'
            >
              {"LOGIN"}
            </a>

          </div>
        
        <div
          onClick={toggleMenu}
          style={navLinkStyle}
          className='pa-8 tx-altfont-1 pointer tx-white nodeco pointer Q_xs_md mt-8 '
        >
          <FaBars />
        </div>
      </div>
      {menuOpen && (
        <div className='flex-col bg-black pos-abs top-0 right-0 shadow-md flex-align-start gap-2 w-100 h-100vh flex-justify-start Q_xs_md pt-8'>
          <div
            onClick={toggleMenu}
            style={buttonStyle}
            className='pa-4 ma-4 tx-altfont-1 bord-r-100p pointer tx-white nodeco cursor-pointer'
          >
            <FaTimes />
          </div>
          <div
            onClick={() => alert("Coming Soon...")}
            style={buttonStyle}
            className='px-8 py-3 tx-altfont-1 border-white tx-ls-5 opaci-chov--75 tx-white bord-r-5 ml-4 nodeco'
          >
            <FaUser /> LOGIN
          </div>
          <div className="flex-wrap ml-4 gap-2">
            {['English', 'Spanish'].map((lang) => (
              <a
                key={lang}
                href={`/?lang=${lang.toLowerCase()}`}
                style={buttonStyle}
                className='px-5 py-1 tx-altfont-1 opaci-chov--75 tx-white bord-r-5  nodeco'
              >
                {lang}
              </a>
            ))}
          </div>
            <hr className='opaci-10 w-90 my-2' />
          <div className="flex-col w-100 flex-align-stretch gap-2">
            {['Nosotros', 'Servicios', 'Contacto'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={toggleMenu}
                style={menuItemStyle}
                className='px-5 py-3 tx-altfont-1 opaci-chov--75 tx-white bord-r-5 mx-4 nodeco'
              >
                {section}
              </a>
            ))}
          </div>

            <hr className='opaci-10 w-90 my-2' />
          
          <div className="flex-col w-100  gap-2">
            {['Análisis Gratis', 'Abrir App'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={()=>alert("Coming Soon...")}
                className='px-5 py-3 border-white tx-altfont-1 opaci-chov--75 tx-white bord-r-100 mx-4 nodeco'
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
