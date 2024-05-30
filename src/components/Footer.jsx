import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <>

            <div className="max-w-screen-2xl container pt-2 pb-3 mx-auto px-4 md:px-20 my-5 items-center flex justify-around bg-blue-600 text-white">
                <div className=" flex flex-col items-center justify-center">
                    <div className=" flex flex-col items-center">
                        <p className="font-semibold text-sm">&copy;2024 AMIT KUMAR DHURWAY<sup>TM</sup>.</p>
                        <p className="text-sm mt-2">All Rights Reserved.</p>
                        <p className="flex mt-2 text-xs space-x-4">
                            <a className="flex text-orange-300 justify-between text-ml font-semibold" href="https://mail.google.com/" target='_blank'><MdEmail />amitdhurway018@gmail.com</a>
                            <a className="flex text-orange-300 justify-between text-ml font-semibold" href="http://wa.me/+918839668626" target='_blank'><IoLogoWhatsapp />+91 8839668626</a>



                        </p>
                    </div>
                </div>

            </div>
        </>

    );

};
export default Footer;