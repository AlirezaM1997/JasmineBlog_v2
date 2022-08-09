//next
import Head from "next/head";
import Image from "next/image";
//other
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="p-12 flex opaAnimate" style={{ minHeight: "65vh" }}>
        <div className="w-1/2 hidden md:block relative">
          <Image
            src="/images/contact.jpg"
            alt="contact"
            layout="fill"
            objectFit="cover"
            className="h-full w-full rounded-l-2xl object-cover object-center"
          ></Image>
        </div>
        <div className="w-full md:w-1/2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-2xl md:rounded-l-none md:rounded-r-2xl p-8 text-white ">
          <h1 className="text-orange-500 text-4xl font-bold mb-5">
            Contact Us
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui
            perspiciatis libero, maiores obcaecati cum impedit nisi.
          </p>
          <div className="mt-8">
            <div className="mt-4 flex items-center">
              <AiOutlineMail className="text-2xl text-orange-600" />
              <span className="ml-2 text-xl">example@gmail.com</span>
            </div>
            <div className="mt-4 flex items-center">
              <AiOutlineWhatsApp className="text-2xl text-green-500" />
              <span className="ml-2 text-xl">+98 938 52 78 120</span>
            </div>
            <div className="mt-4 flex items-center">
              <AiOutlineInstagram className="text-2xl text-pink-600" />
              <span className="ml-2 text-xl">@trial-blog</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
