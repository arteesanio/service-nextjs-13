import { serviceCardsData, ServiceCardLLL } from "./ServicesCards";


export const ServicesCardsLLL = () => (
  <div className='flex-wrap gap-4 px-4'>
    {serviceCardsData.map(({ title, description, icon, height, chatMsg, chatMsgReq }) => (
      <ServiceCardLLL key={title} title={title} description={description} icon={icon} height={height} chatMsgReq={chatMsgReq} chatMsg={chatMsg} />
    ))}
  </div>
);
