import Image from "next/image";
import instagram from "../assets/images/instagramIcon.png";
import whatsapp from "../assets/images/whatsappIcon.png";
import playstore from "../assets/images/playstoreicon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="bg-black gap-4 flex items-center justify-center p-4">
        <Image src={playstore} className="w-5 h-5" alt="playstore" />
        <Image src={instagram} className="w-5 h-5" alt="instagram" />
        <Image src={whatsapp} className="w-5 h-5" alt="instagram" />
      </div>
      <footer className="bg-[#0802A3] text-white p-4 text-center">
        &copy; {currentYear} Copyrights: Hyra.
      </footer>
    </div>
  );
};

export default Footer;
