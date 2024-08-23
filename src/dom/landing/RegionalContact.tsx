import { FaPhone, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const contactData = [
  {
    country: "Panama",
    flag: "🇵🇦",
    phone: "+507 6997-0742",
  },
  // {
  //   country: "Colombia",
  //   flag: "🇨🇴",
  //   phone: "+57 3023075161",
  // },
  {
    country: "Costa Rica",
    flag: "🇵🇦",
    phone: "+506 8745-3528",
  },
  {
    country: "Venezuela",
    flag: "🇻🇪",
    phone: "+58 424-381-5757",
  },
  {
    country: "Trinidad & Tobago",
    flag: "🇹🇹",
    phone: "+58 424-381-5757",
  },
];

const socialLinks = [
  { icon: FaTwitter, link: 'https://www.instagram.com/irecoverypanama/' },
  { icon: FaInstagram, link: 'https://www.instagram.com/irecoverypanama/' },
  { icon: FaFacebook, link: 'https://www.instagram.com/irecoverypanama/' },
];

export const RegionalContact = () => {
  return (
    <div className="flex-col pos-rel flex-1">
      <div className="mb-8 flex-col px-4 flex-align-start tx-altfont-1">
        <h2 className="tx-altfont-1 tx-bold-1 py-3"></h2>
        <div className="flex-col flex-align-start">
          {contactData.map(({ country, flag, phone }) => (
            <div key={country}>
              <a className="nodeco py-3 flex-center gap-3 w-max-200px">
                {flag}
                <div className="tx-lgx">{country}</div>
              </a>
              <div className="nodeco pb-3 flex flex-align-center gap-3 " style={{ color: "#888888" }}>
                <FaPhone />
                <div>{phone}</div>
              </div>
            </div>
          ))}

          <hr className="opaci-10 bb-8 w-100" />
          <div className="flex-wrap w-100 flex-justify-around gap-3 tx-lx mt-4">
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                className="bg-w-10 flex-col h-80px w-80px bord-r-100p opaci-chov--50 tx-white"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="pos-abs flex-col">
                  <Icon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
