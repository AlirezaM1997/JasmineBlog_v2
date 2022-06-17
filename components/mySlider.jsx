//next
import Link from "next/link";
import styles from "./mySlider.module.css";
import Head from "next/head";
import Image from "next/image";

//other
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//context
import { useAllState } from "../context/state";

export default function MySlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 10,
  };

  const { setSlideNumber } = useAllState();
  const { topBlogs } = useAllState();

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <script
          type="text/javascript"
          src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"
        ></script>
      </Head>
      <Slider {...settings} afterChange={(e) => setSlideNumber(e + 1)}>
        {topBlogs.map((item, i) => (
          <div key={i} className="slide-content">
            <article className="postHorizontalLarge relative w-full after:table after:clear-both after:content-none">
              <div className={`${styles.postThumb} relative`}>
                <Link href={`/blog/${item._id}`}>
                  <a className="w-full h-full block">
                    <img src={item.imgurl}></img>
                  </a>
                </Link>
              </div>
              <div className={`${styles.postText} pt-5 overflow-hidden`}>
                <div>
                  <Link href={`/category/${item.cat}`}>
                    <a
                      className={`${styles.postCat} bg-[#607027] inline-block mb-4 mr-2 py-2 md:px-4 px-3 text-white font-normal text-xs uppercase`}
                    >
                      {item.cat}
                    </a>
                  </Link>
                  <div className="inline-block mb-4 mr-2 py-2 md:px-3 px-2 font-bold text-xs">
                    <i
                      className="fa fa-star text-yellow-400 mr-1"
                      aria-hidden="true"
                    ></i>
                    <span className="font-[system-ui]">High Score</span>
                  </div>
                </div>
                <h3 className="post__title md:mb-5 mb-3 font-bold text-2xl ">
                  <Link href={`/blog/${item._id}`}>
                    <a className="text-[#333333]">{item.title}</a>
                  </Link>
                </h3>
                <div
                  className={`${styles.postExcerpt} mb-9 mt-0 text-base text-[#888]`}
                >
                  <div className="excerpt overflow-hidden">
                    <p
                      className={`${styles.blogTextSlider} overflow-hidden text-ellipsis`}
                      dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}
                    ></p>
                  </div>
                </div>
                <div className="post__readmore mb-0 md:block hidden">
                  <Link href={"#"}>
                    <a className="button__readmore relative text-[#888] text-sm">
                      <span>READ MORE</span>
                    </a>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </>
  );
}
