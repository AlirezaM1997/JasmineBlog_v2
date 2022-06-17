//next
import Head from "next/head";
import Image from "next/image";

//other
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="p-12 flex opaAnimate" style={{ minHeight: "65vh" }}>
        <div className="w-full md:w-1/2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-2xl md:rounded-r-none md:rounded-l-2xl p-8 text-white ">
          <h1 className="text-orange-500 text-4xl font-bold mb-5">
            About Jasmine Blog
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui
            perspiciatis libero, maiores obcaecati cum impedit nisi? Maxime
            dolorum doloremque minus fugit odio ratione quos eveniet aspernatur
            voluptates rem velit, asperiores, reprehenderit nihil cum iusto
            earum natus ducimus. Architecto atque perferendis possimus dolores
            laudantium adipisci blanditiis dolorum eveniet nobis alias.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui
            perspiciatis libero, maiores obcaecati cum impedit nisi? Maxime
            dolorum doloremque minus fugit odio ratione quos eveniet aspernatur
            voluptates rem velit.
          </p>
        </div>
        <div className="w-1/2 hidden md:block relative">
          <Image
            src="/images/blog.jpg"
            alt="about"
            layout="fill"
            objectFit="cover"
            className="h-full rounded-r-2xl object-cover object-center"
          ></Image>
        </div>
      </div>
    </>
  );
}

export default About;
