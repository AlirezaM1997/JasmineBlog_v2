//next
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

//othetr
import { OffCanvas, OffCanvasMenu } from "react-offcanvas";
import { useState } from "react";

//redux
import { useSelector } from "react-redux";

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const userInfo = useSelector((state) => state.userInfo.value);

  const showMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };
  return (
    <>
      <div
        className={`backdropOffCanvas bg-[#00000066] fixed h-screen w-screen z-30 ${
          isMenuOpened ? "" : "hidden"
        }`}
        onClick={showMenu}
      ></div>

      <header className={`${styles.header} block relative z-20 bg-white`}>
        <nav
          className={`${styles.navigationBarFullWidth} tablet:hidden h-[100px] z-[1] relative text-center block`}
        >
          <div
            className="navigation-bar_inner pl-[43px] pr-[15px] container mx-auto relative flex items-center text-center"
            style={{ flexWrap: "initial" }}
          >
            <div className="navigation-bar_section first:pl-0 min-w-0 pr-2 truncate text-center">
              <div className="header-logo inline-block align-middle">
                <Link href="/">
                  <a className="block">
                    <Image
                      src="/images/logo.jpg"
                      alt="Jasmine"
                      className="logoImg p-0 max-h-[70px] max-w-full"
                      width={173}
                      height={65}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="navigation-wrapper overflow-hidden flex-1">
              <div className="main-menu">
                <ul className="navigation-main text-[0] inline-block align-middle whitespace-nowrap m-0 p-0 list-none ">
                  <li className="inline-block text-left whitespace-normal text-base">
                    <Link href={"/"}>
                      <a
                        className={`${styles.navLink} py-0 px-[10px] text-[14.5px] font-medium h-[100px] leading-[100px] text-[#000000cc] inline-block uppercase relative`}
                      >
                        home
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block text-left whitespace-normal text-base">
                    <Link href={"/"}>
                      <a
                        className={`${styles.navLink} py-0 px-[10px] text-[14.5px] font-medium h-[100px] leading-[100px] text-[#000000cc] inline-block uppercase relative`}
                      >
                        category
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block text-left whitespace-normal text-base">
                    <Link href={"/about"}>
                      <a
                        className={`${styles.navLink} py-0 px-[10px] text-[14.5px] font-medium h-[100px] leading-[100px] text-[#000000cc] inline-block uppercase relative`}
                      >
                        about
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block text-left whitespace-normal text-base">
                    <Link href={"/contact"}>
                      <a
                        className={`${styles.navLink} py-0 px-[10px] text-[14.5px] font-medium h-[100px] leading-[100px] text-[#000000cc] inline-block uppercase relative`}
                      >
                        contact
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block text-left whitespace-normal text-base">
                    <Link href={"/"}>
                      <a
                        className={`${styles.navLink} py-0 px-[10px] text-[14.5px] font-medium h-[100px] leading-[100px] text-[#000000cc] inline-block uppercase relative`}
                      >
                        menu
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navigation-bar_section last:pr-0">
              {!userInfo ? (
                <div className="flex">
                  <Link href="/validation/login">
                    <a className="hover:text-gray-700 text-gray-800 font-semibold py-2 px-2 rounded mr-2 outline-none">
                      Log in
                    </a>
                  </Link>
                  <Link href={"/validation/signup"}>
                    <a className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-2 rounded">
                      Sign up
                    </a>
                  </Link>
                </div>
              ) : (
                <Link href={"/user/dashboard"}>
                  <a>
                    <div className="flex flex-shrink-0 items-center text-white px-2">
                      <div className="flex flex-col items-end ">
                        <div className="text-md font-medium text-gray-600 mr-1">
                          {userInfo?.username}
                        </div>
                        <div className="text-sm font-regular"></div>
                      </div>
                      <Image
                        loader={() =>
                          `${process.env.domainKey}/${userInfo?.avatar}`
                        }
                        src={`${process.env.domainKey}/${userInfo?.avatar}`}
                        width="40px"
                        height="40px"
                        className="h-10 w-10 rounded-full border border-[#607027]"
                      ></Image>
                    </div>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </nav>
        <div
          className={`${styles.mobileHeader} fablet:block makbook:hidden relative bg-white`}
        >
          <div
            className={`${styles.mobileHeaderInner} flex justify-between w-full items-center px-4`}
          >
            <div className="header-branding pr-5 whitespace-nowrap min-w-0 text-left">
              <div className="header-logo text-left">
                <Link href={"/"}>
                  <a>
                    <img
                      className="logo-image md:max-h-[66px] py-2 max-h-[50px] md:min-h-[70px]"
                      src="/images/logo.jpg"
                      alt="Jasmine"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="mobile-header__section pr-0 whitespace-nowrap text-right">
              <div className="flexbox-header-icon">
                <i
                  className={`${styles.iconMenu} inline-block align-middle cursor-pointer`}
                  onClick={showMenu}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffCanvas
        width={300}
        transitionDuration={300}
        effect={"parallax"}
        isMenuOpened={isMenuOpened}
        position={"left"}
      >
        <OffCanvasMenu
          className={`${styles.offCanvasMenu} z-30 bg-white h-full`}
        >
          <div className="offcanvas__title relative text-sm py-[20px] pl-5 pr-[50px] border-b">
            <h2 className="site-logo md:text-[2.074rem] leading-5 ">
              <Link href={"/"} onClick={showMenu}>
                <Image
                  src="/images/logo.jpg"
                  alt="Jasmine"
                  className="w-full max-w-[140px]"
                  width={70}
                  height={30}
                />
              </Link>
            </h2>
            <div className="mt-3">
              {true ? (
                <div className="flex">
                  <Link href={"/user/login"} onClick={showMenu}>
                    <a className="bg-[#607027] hover:text-gray-700 text-white py-2 px-2 rounded mr-2 outline-none">
                      Log in
                    </a>
                  </Link>

                  <Link href={"/user/signup"} onClick={showMenu}>
                    <a className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-2 rounded">
                      Sign up
                    </a>
                  </Link>
                </div>
              ) : (
                <Link href={"/user/dashboard"} onClick={showMenu}>
                  {/* <div className="flex flex-shrink-0 items-center space-x-4 text-white">
                    <img
                      src={userInfo.avatar}
                      className="h-10 w-10 rounded-full border border-[#607027]"
                    ></img>
                    <div className="text-md font-medium text-black font-[cursive]">
                    {userInfo.username}
                    </div>
                  </div> */}
                </Link>
              )}
            </div>
            <span
              className="absolute top-2 right-2 bottom-auto left-auto border-[1px] rounded-full h-[30px] w-[30px] flex items-center justify-center cursor-pointer"
              onClick={showMenu}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
          <div className="offcanvas__section p-[20px]">
            <div className="offcanvas-menu-mobile">
              <ul className="p-0 -mx-5 my-0">
                <li className="text-[#00000099]">
                  <Link href={"/"} onClick={showMenu}>
                    <a className="text-sm text-black font-normal py-[10px] px-[20px] block uppercase relative">
                      home
                    </a>
                  </Link>
                </li>
                <li className="text-[#00000099]">
                  <Link href={"/"} onClick={showMenu}>
                    <a className="text-sm text-black font-normal py-[10px] px-[20px] block uppercase relative">
                      category
                    </a>
                  </Link>
                </li>
                <li className="text-[#00000099]">
                  <Link href={"/about"} onClick={showMenu}>
                    <a className="text-sm text-black font-normal py-[10px] px-[20px] block uppercase relative">
                      about
                    </a>
                  </Link>
                </li>
                <li className="text-[#00000099]">
                  <Link href={"/contact"} onClick={showMenu}>
                    <a className="text-sm text-black font-normal py-[10px] px-[20px] block uppercase relative">
                      contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </OffCanvasMenu>
      </OffCanvas>
    </>
  );
}
