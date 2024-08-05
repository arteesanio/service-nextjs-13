"use client"
import { useState } from 'react';
import { FaMessage } from "react-icons/fa6";
import { RegionalContact } from "./RegionalContact";

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!name) { return }
    if (!email) { return }
    if (!message) { return }
    const url = `https://api.whatsapp.com/send?phone=50769970742&text=${encodeURIComponent(name)}%20${encodeURIComponent(email)}%20${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="flex w-100 gap-8 Q_xs_sm_flex-col">
        <div className='flex-1 flex-col w-100'>
          <div className='w-90 flex-col tx-altfont- flex-align-stretch pos-rel gap-4'>
            <div className='flex-col flex-align-stretch'>
              <input
                type="text"
                className='tx-altfont-1 tx-white bg-trans px-2 bord-r-5 tx-lg py-1'
                placeholder='NAME'
                style={{ border: "1px solid #ffffff44" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex-col flex-align-stretch'>
              <input
                type="text"
                className='tx-altfont-1 tx-white bg-trans px-2 bord-r-5 tx-lg py-1'
                placeholder='EMAIL'
                style={{ border: "1px solid #ffffff44" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex-col flex-align-stretch'>
              <textarea
                className='tx-altfont-1 tx-white bg-trans px-2 bord-r-5 tx-lg py-1 h-min-300px'
                placeholder='MESSAGE'
                style={{ border: "1px solid #ffffff44" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div
              className='flex-center tx-altfont-1 gap-4 tx-white tx-center tx-lgx px-8 py-2 opaci-chov--75'
              style={{ background: "#1D2A76" }}
              onClick={handleSend}
            >
              <FaMessage />
              <div>Send</div>
            </div>
          </div>
        </div>
        <RegionalContact />
      </div>
    </>
  );
};
