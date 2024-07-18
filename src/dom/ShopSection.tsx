"use client"
import { FaPlay, FaPlusCircle } from "react-icons/fa"
import { ProjectCalc } from "./ProjectCalc";
import { useRef } from "react";

export const ShopSection = () => {
    const projectCalcRef = useRef<any>(null);

    const handleQuote = () => {
        if (projectCalcRef.current) {
            const order = projectCalcRef.current.getOrder();

            // Construct the message based on order labels
            const message = `
                *Order Details*\n
                🌐 *Dominio*: ${order.labels.dominio}
                🏠 *Hosting*: ${order.labels.hosting}
                🎨 *Diseno*: ${order.labels.diseno}
                💻*Admin*: ${order.labels.admin}
                📦 *Modulos*: ${order.labels.modulos}
                🤖 *Bots*: ${order.labels.bots}
                ⏳ *Tiempo*: ${order.labels.tiempo}
            `;

            // Encode the message to be URL-safe
            const encodedMessage = encodeURIComponent(message);

            // Replace with your WhatsApp number (including country code)
            const number = '584145630853'; // Add your recipient's phone number here

            // Construct the WhatsApp URL
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${number}&text=${encodedMessage}`;

            // Open the WhatsApp URL in a new tab
            window.open(whatsappUrl, '_blank');

            // Log the order to console for debugging purposes (optional)
            console.log("Current Order:", order);
        }
    };

    // if (typeof window === "undefined") {return (
    //     <div></div>
    // )}

    return (<>
        <div className="flex-col w-100 tx-altfont-1 gap-2 w-max-1080px ">
            <div className="">Data Recovery</div>
            <div className="flex-col w-90 ">
                <div id="calc"></div>
                <ProjectCalc ref={projectCalcRef} />
                <div className="flex-col opaci-chov--50 bord-r-t-50" 
                        onClick={handleQuote}
                        style={{boxShadow: "inset 5px 5px 15px #ffffffaa",background: "linear-gradient(145deg, #aaeeff, #44aaff)"}} >
                    <img src='/img2/HARDDDRIVEz.png' className='w-100 w-max-200px pt-8 px-2  translate-y--'  />
                    <div className="tx-white px-5 py-2 w-100 w-max-300px bord-r-100 tx-center tx-altfont-1 tx-bold-8 tx-lgx" 
                        style={{
                            background: "#0073FA",
                            boxShadow: "inset 5px 5px 15px #ffffffaa"
                        }}
                    >
                        Send
                    </div>
                </div>
                <div id="send" ></div>
            </div>
        </div>
    </>)
}

