import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-5 items-center flex justify-around">
                <div className="text-sm">@2024 AMIT KUMAR DHURWAY<sup>TM</sup>. All Rights Reserved.</div>
                <div className="flex text-xs space-x-4">
                    <a className="flex justify-between text-ml font-semibold" href="https://mail.google.com/" target='_blank'><MdEmail/>amitdhurway018@gmail.com</a>
                    <a className="flex justify-between text-ml font-semibold" href="http://wa.me/+918839668626" target='_blank'><IoLogoWhatsapp/>+91 8839668626</a>
                    
                    

                </div>

            </div>
        </>

    );

};
export default Footer;