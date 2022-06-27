//react
import { useEffect, useState } from "react";

//next
import Link from "next/link";
import styles from "./home.module.css";
import Head from "next/head";

//components
import Loading from "./loading";
import MySlider from "./mySlider";

//other
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

//redux
import { useDispatch, useSelector } from "react-redux";
import { topBlogsAction } from "../slices/topBlogsSlice";

export default function Home(props) {
  const dispatch = useDispatch();
  const slideNum= useSelector((state) => state.counter.value)

  // const { parsIsoDate } = useAllState();

  const [topUsers, setTopUsers] = useState();
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(5);

  useEffect(() => {
    setBlogs(props.props.data1);
    setTopUsers(props.props.data3);
    dispatch(topBlogsAction(props.props.data2));
    setLoading(false);
  }, []);
  
  const loadMore = () => {
    setCount(count + 3);
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="site-content transform-none md:pt-10 md:pb-0 pt-8">
        <div className="slider-block laptop:mb-[50px] LCD:mb-[55px] relative">
          <div
            className="container LCD:px-16"
            style={{ padding: "0 !important" }}
          >
            <div className="slider-block_inner before:content-[''] before:absolute before:bg-[#607027] before:top-0 before:left-0 before:w-[370px] before:h-[650px] tablet:before:hidden laptop:before:h-[520px] laptop:before:w-[296px] relative pt-12 md:px-5 px-0">
              <div className="main-section relative ml-[200px] mb-9 tablet:m-0">
                <MySlider />
                <div className="slideNumber absolute top-0 right-full w-[200px] text-[85px] leading-[1.33] text-white font-black text-center laptop:w-[180px] laptop:text-[68px] tablet:hidden ">
                  <span className="current-slide">
                    0{slideNum}
                  </span>
                  <span className="total-slides text-[#0000223b] text-[40px] align-super">
                    /03
                  </span>
                </div>
              </div>
              <div className="sub-section overflow-hidden tablet:ml-0 tablap:ml-[325px] LCD:ml-[400px] tablet:mt-[40px] ">
                <div className="posts-list md:flex block flex-wrap -m-[10px]">
                  {
                    <div className="list-item p-4 md:w-1/2">
                      <article
                        className={`postOverlay w-[calc(100%+15px)] tablet:h-[350px] pl-4 -mx-4 bg-transparent flex relative overflow-hidden`}
                      >
                        <div
                          className={`postThumbOverlay absolute w-full h-full after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent `}
                        >
                          <Link href={"#"}>
                            <a className="w-full h-full block">
                              <img
                                className="w-full h-full object-cover align-middle block"
                                src="/images/post-overlay1.jpg"
                              ></img>
                            </a>
                          </Link>
                        </div>
                        <div
                          className={`postTextOverlay tablap:min-h-[220px] LCD:min-h-[280px] z-10 pointer-events-none flex items-end pt-10 relative w-full text-white`}
                        >
                          <div
                            className={`${styles.postTextWrap} mb-0 pl-4 relative w-full`}
                          >
                            <div className="post__text-inner px-6 pb-6 -ml-4 relative">
                              <Link href={"#"}>
                                <a
                                  className={`${styles.postCatOverlay} pointer-events-auto absolute block mb-4 text-xs font-normal uppercase text-white mr-2`}
                                >
                                  fashion
                                </a>
                              </Link>
                              <h6 className="post__title-overlay text-white font-medium mb-2 whitespace-normal break-words pointer-events-auto">
                                <Link href={"#"}>
                                  <a className="inline-block text-white">
                                    Some Men See Things as They Are and Ask Why
                                  </a>
                                </Link>
                              </h6>
                              <div className={`text-[#ffffff99] my-0 text-sm`}>
                                <time
                                  className={`text-[12px] leading-[1.5] font-light whitespace-nowrap`}
                                >
                                  Mar 6, 2019
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  }
                  <div className="list-item p-4 md:w-1/2">
                    <article
                      className={`postOverlay w-[calc(100%+15px)] tablet:h-[350px] pl-4 -mx-4 bg-transparent flex relative overflow-hidden`}
                    >
                      <div
                        className={`postThumbOverlay absolute w-full h-full after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent`}
                      >
                        <Link href={"#"}>
                          <a className="w-full h-full block">
                            <img
                              className="w-full h-full object-cover align-middle block"
                              src="/images/post-overlay2.jpg"
                            ></img>
                          </a>
                        </Link>
                      </div>
                      <div
                        className={`postTextOverlay tablap:min-h-[220px] LCD:min-h-[280px] z-10 pointer-events-none flex items-end pt-10 relative w-full text-white`}
                      >
                        <div
                          className={`${styles.postTextWrap} mb-0 pl-4 relative w-full`}
                        >
                          <div className="post__text-inner px-6 pb-6 -ml-4 relative">
                            <Link href={"#"}>
                              <a
                                className={`${styles.postCatOverlay} pointer-events-auto absolute block mb-4 text-xs font-normal uppercase text-white mr-2`}
                              >
                                House
                              </a>
                            </Link>
                            <h6 className="post__title-overlay text-white font-medium mb-2 whitespace-normal break-words pointer-events-auto">
                              <Link href={"#"}>
                                <a className="inline-block text-white">
                                  Some Men See Things as They Are and Ask Why
                                </a>
                              </Link>
                            </h6>
                            <div className={`text-[#ffffff99] my-0 text-sm`}>
                              <time
                                className={`text-[12px] leading-[1.5] font-light whitespace-nowrap`}
                              >
                                Mar 6, 2019
                              </time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="aboutSection relative"
          style={{ marginBottom: "120px" }}
        >
          <div className="container makbook:px-14 mx-auto iphone:px-8">
            <div className="about__inner pt-40 tablet:pt-0">
              <div className="about__content px-[70px] pb-20 tablap:pb-[61px] fablet:p-[40px] fablet:border-[4px] iphone:p-[30px] iphone:flex-col border-[5px] border-[#607027] flex w-full">
                <div className="about__thumb relative flex-none w-[370px] h-[500px] -mt-[155px] mr-[55px] tablap:-mt-[120px] tablap:w-[330px] tablap:h-[440px] fablet:m-0 fablet:mr-[35px] fablet:w-[250px] fablet:h-[360px] iphone:m-0 iphone:mb-[25px] iphone:w-full iphone:h-[295px]">
                  <div
                    className={`${styles.backgroundImg} absolute overflow-hidden bg-cover bg-no-repeat bg-scroll top-0 right-0 left-0 bottom-0 bg-[#333]`}
                  >
                    <Link href={"#"}>
                      <a className="link-overlay"></a>
                    </Link>
                  </div>
                </div>
                <div
                  className={`aboutText flex-initial text-[15px] text-[#333] font-normal flex-grow leading-6 makbook:pt-[60px]`}
                >
                  <h3 className="mb-[25px] font-[initial] mt-0 font-bold laptop:text-[26px] laptop:leading-[1.38] makbook:text-[2.57rem]">
                    We Are Better Than Others
                  </h3>
                  <div className="about__bio mb-11 md:max-w-3xl leading-6  opacity-80">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco labori
                  </div>
                  <div
                    className="about__signature"
                    style={{ marginBottom: "55px" }}
                  >
                    <img
                      className="laptop:h-[34px]"
                      src="/images/signature.jpg"
                    ></img>
                  </div>
                  <ul className="about__social md:text-lg m-0 p-0 list-none text-right">
                    <li className="py-0 inline-block">
                      <Link href={"#"}>
                        <a className="text-inherit inline-block py-0 px-2 leading-5 transition-all">
                          <span className="social-links__icon rounded-full inline-flex h-5 w-5 relative mx-1 bg-opacity-0 hover:text-gray-600">
                            <FontAwesomeIcon
                              title="Follow us on facebook"
                              icon={faFacebookF}
                            ></FontAwesomeIcon>
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="py-0 inline-block">
                      <Link href={"#"}>
                        <a className="text-inherit inline-block py-0 px-2 leading-5 transition-all">
                          <span className="social-links__icon rounded-full inline-flex h-5 w-5 relative mx-1 bg-opacity-0 hover:text-gray-600">
                            <FontAwesomeIcon
                              title="Follow us on linkedin"
                              icon={faLinkedinIn}
                            ></FontAwesomeIcon>
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="py-0 inline-block">
                      <Link href={"#"}>
                        <a className="text-inherit inline-block py-0 px-2 leading-5 transition-all">
                          <span className="social-links__icon rounded-full inline-flex h-5 w-5 relative mx-1 bg-opacity-0 hover:text-gray-600">
                            <FontAwesomeIcon
                              title="Follow us on twitter"
                              icon={faTwitter}
                            ></FontAwesomeIcon>
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="py-0 inline-block">
                      <Link href={"#"}>
                        <a className="text-inherit inline-block py-0 px-2 leading-5 transition-all">
                          <span className="social-links__icon rounded-full inline-flex h-5 w-5 relative mx-1 bg-opacity-0 hover:text-gray-600">
                            <FontAwesomeIcon
                              title="Follow us on instagram"
                              icon={faInstagram}
                            ></FontAwesomeIcon>
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blogList relative mb-[110px] laptop:mb-[100px]">
          <div className="container mx-auto">
            <div className="jasmine-heading relative text-center mb-10 after:content-[''] after:w-full after:h-[1px] after:bg-[#0000001c] after:absolute after:top-1/2 after:left-0 after:z-0">
              <h4 className="heading__title inline-block relative m-0 text-4xl leading-6 pr-12 pl-16 z-10 before:content-[''] before:w-[75px] before:h-[75px] before:bg-[#000] before:opacity-10 before:absolute before:left-[50px] before:top-1/2 before:-translate-y-[50%] after:content-[''] after:w-full after:h-full after:bg-[#fff] after:absolute after:top-0 after:left-0 after:-z-[1]">
                Fashion Blogs
              </h4>
            </div>
          </div>
          <div className="container makbook:px-11 iphone:px-8">
            <div className="blogList__inner px-2">
              <div className="new-posts-list -m-4 flex flex-wrap">
                {blogs
                  .filter((item) => item.cat === "Fashion")
                  .sort((a, b) => {
                    return b.averageScore - a.averageScore;
                  })
                  .slice(0, 6)
                  .map((item, i) => (
                    <div
                      key={i}
                      className="new-posts-item p-[15px] w-[calc(100%/3)] fablet:w-1/2 iphone:w-full iphone:p-[10px]"
                    >
                      <article
                        className={`postOverlay w-[calc(100%+15px)] tablet:h-[350px] post-overlay-new fablet:h-[350px] iphone:h-[280px] pl-4 -mx-4 bg-transparent flex relative overflow-hidden`}
                      >
                        <div className="post__thumb-overlay-fashion absolute w-full h-full">
                          <Link href={`/blog/${item._id}`} className="">
                            <a>
                              <img
                                className="w-full h-full object-cover align-middle block"
                                src={item.imgurl}
                              ></img>
                            </a>
                          </Link>
                        </div>
                        <div
                          className={`postTextOverlay post__text-new min-h-[350px] tablap:min-h-[280px] iphone:min-h-[280px] z-10 pointer-events-none flex items-end pt-10 relative w-full text-white`}
                        >
                          <div
                            className={`${styles.postTextWrap} mb-0 pl-4 relative w-full`}
                          >
                            <div className="post__text-inner px-6 pb-6 -ml-4 relative">
                              <Link href={`/category/${item.cat}`}>
                                <a
                                  className={`${styles.postCatOverlay} pointer-events-auto absolute block mb-4 text-xs font-normal uppercase text-white mr-2`}
                                >
                                  {item.cat}
                                </a>
                              </Link>
                              <h3 className="post__title-overlay text-white text-base font-medium mb-2 whitespace-normal break-words pointer-events-auto">
                                <Link href={"#"}>
                                  <a className="inline-block text-white">
                                    {item.title}
                                  </a>
                                </Link>
                              </h3>
                              <div className={`text-[#ffffff99] my-0 text-sm`}>
                                <time
                                  className={`text-[12px] leading-[1.5] font-light whitespace-nowrap`}
                                >
                                  {/* {parsIsoDate(item.createdAt)} */}
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="allBlogs relative mb-10 laptop:mb-[70px]">
          {/* <div className="container mx-auto">
            <div className="jasmine-heading relative text-center mb-16">
              <h4 className="heading__title inline-block relative m-0 text-4xl leading-6 pr-12 pl-16 z-10">
                The Latest Blogs
              </h4>
            </div>
          </div> */}
          <div className="makbook:px-[6rem] container px-[15px]">
            <div className="allBlogs-content">
              <div className="row -mx-[15px] before:table before:content-[' ']">
                <div className="col px-[15px] float-left tablet:w-full tablet:pr-[15px] tablap:w-[680px] LCD:w-[900px]">
                  <div className="main-col flex my-0 relative">
                    <div className="main-col-inner w-full relative">
                      <div className="allBlogs-posts flex flex-col p-0 -my-10">
                        {blogs.slice(0, count).map((i, index) => (
                          <div
                            key={index}
                            className="allBlogs-post w-full border-b border-[#0000000d] py-10"
                          >
                            <article className="w-full flex iphone:flex-col relative">
                              <div className="post-image tablet:h-[300px] iphone:w-full w-1/2 laptop:mt-0 LED:mr-[30px] LED:mb-[50px] LED:ml-[50px]  tablap:h-[365px] md:float-left  LCD:mt-0 LCD:mr-[75px] LCD:mb-[70px] LCD:ml-[70px]  LCD:h-[385px] relative before:iphone:left-0 before:iphone:bottom-0  before:LCD:-left-[70px] before:LCD:-bottom-[70px] before:LED:-left-[50px] before:LED:-bottom-[50px] before:content-[''] before:absolute before:w-full before:h-full before:bg-[#607027] before:-z-[1]">
                                <Link href={`/blog/${i._id}`}>
                                  <a className="w-full h-full black">
                                    <img
                                      className="w-full h-full object-cover"
                                      src={i.imgurl}
                                    ></img>
                                  </a>
                                </Link>
                                <div className="post__tags laptop:w-[calc(100%-50px)] laptop:h-[50px] flex items-center overflow-hidden text-left text-[#ffffffb3] w-[calc(100%-70px)] h-[70px]">
                                  <ul className="tag-list inline-block -m-1 p-0 align-middle">
                                    {i.hashtag?.slice(0, 3).map((j, k) => (
                                      <li
                                        key={k}
                                        className="m-1 inline-block py-0 leading-4"
                                      >
                                        <Link href={`/hashtag/${j.name}`}>
                                          <a className="post-tag text-[#CDD2BB] w-full h-full text-xs before:content-['#'] hover:text-white">
                                            {j.name}
                                          </a>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="post-text md:w-1/2 pt-[35px] md:text-center overflow-hidden">
                                <Link href={`/category/${i.cat}`}>
                                  <a className="mb-[15px] mr-2 font-normal text-[11px] uppercase inline-block py-[7px] px-[14px] md:py-2 md:px-[18px] bg-[#607027] text-white">
                                    {i.cat}
                                  </a>
                                </Link>
                                <h3 className="iphone:text-[1.5rem] iphone:leading-[1.4] iphone:mb-[15px] mb-[20px] fablet:text-[1.7rem] fablet:leading-[1.3] makbook:text-[1.8rem] font-bold mx-auto whitespace-normal break-words">
                                  <Link
                                    href={`/blog/${i._id}`}
                                    // style={{ display: "-webkit-box" }}
                                  >
                                    <a className="overflow-hidden text-[#373737]">
                                      {i.title}
                                    </a>
                                  </Link>
                                </h3>
                                <div className="post__excerpt iphone:mb-0 md:mb-[20px] md:mx-auto text-[#888] text-[1.07rem] leading-6">
                                  <div className="excerpt">
                                    <p
                                      className={`${styles.blogTextHomePage} overflow-hidden text-ellipsis`}
                                      dangerouslySetInnerHTML={{
                                        __html: i.content,
                                      }}
                                    ></p>
                                  </div>
                                </div>
                                <ul className="social-list iphone:hidden mb-0 opacity-80 text-base">
                                  <li className="py-0 inline-block">
                                    <Link href={"#"}>
                                      <a className="px-[0.4em] inline-block hover:text-gray-600 text-[#000000cc] leading-5 w-[22px] h-[22px] bg-opacity-0 mx-[5px] relative rounded-full">
                                        <div className="share-item__icon">
                                          <FontAwesomeIcon
                                            title="twitter"
                                            icon={faTwitter}
                                          ></FontAwesomeIcon>
                                        </div>
                                      </a>
                                    </Link>
                                  </li>
                                  <li className="py-0 inline-block">
                                    <Link href={"#"}>
                                      <a className="px-[0.4em] inline-block hover:text-gray-600 text-[#000000cc] leading-5 w-[22px] h-[22px] bg-opacity-0 mx-[5px] relative rounded-full">
                                        <div className="share-item__icon">
                                          <FontAwesomeIcon
                                            title="facebook"
                                            icon={faFacebookF}
                                          ></FontAwesomeIcon>
                                        </div>
                                      </a>
                                    </Link>
                                  </li>
                                  <li className="py-0 inline-block">
                                    <Link href={"#"}>
                                      <a className="px-[0.4em] inline-block hover:text-gray-600 text-[#000000cc] leading-5 w-[22px] h-[22px] bg-opacity-0 mx-[5px] relative rounded-full">
                                        <div className="share-item__icon">
                                          <FontAwesomeIcon
                                            title="linkedin"
                                            icon={faLinkedinIn}
                                          ></FontAwesomeIcon>
                                        </div>
                                      </a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </article>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-gray-200 sub-col tablap:w-[290px] relative overflow-visible float-left px-[15px] LCD:w-[300px]"></div> */}
              </div>
            </div>

            <div className="load-more flex justify-center">
              <button
                className="bg-[#607027] py-[10px] px-[50px] text-base font-normal border-0 focus:outline-0 uppercase tracking-[1px] outline-none text-white mt-[70px]"
                onClick={() => loadMore()}
              >
                <span className="">Load more</span>
                <span className="loading"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
