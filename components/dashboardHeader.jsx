//next
import Link from "next/link";
import Image from "next/image";

//other
import { removeCookies } from "cookies-next";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

//redux
import { useSelector } from "react-redux";


function DashboardHeader() {
  const userInfo = useSelector((state) => state.userInfo.value);

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const showMenu = () => {
    setIsMenuOpened(true);
  };
  const hideMenu = () => {
    if (isMenuOpened) {
      setIsMenuOpened(false);
    }
  };
  const logout = () => {
    toast.warn("You have successfully logged out!");
    setTimeout(() => {
      removeCookies("token");
      // setToken("");
      setUserInfo();
      window.location.href = "/";
    }, 2000);
  };

  return (
    <>
      <header className="h-16 w-full flex items-center justify-between relative iphone:px-[8px] md:px-[20px] space-x-10 bg-[#EEEEEE]">
        <div>
          <Link href={"/"}>
            <a>
              <img src="/images/logopng.png" className="w-24"/>
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href={"/user/dashboard"}>
            <a className="flex flex-shrink-0 items-center space-x-4">
              <div className="flex flex-col items-end ">
                <div className="text-sm font-medium font-[system-ui] mr-2">
                  Welcome {userInfo?.name}
                </div>
                <div className="text-sm font-regular"></div>
              </div>
              <Image
                loader={() => `${process.env.domainKey}/${userInfo?.avatar}`}
                src={`${process.env.domainKey}/${userInfo?.avatar}`}
                width="40px"
                height="40px"
                className="h-10 w-10 rounded-full border border-[#607027]"
              ></Image>
            </a>
          </Link>
          <div
            className="ml-3 cursor-pointer relative"
            onClick={!isMenuOpened ? showMenu : hideMenu}
          >
            <i className="fa fa-cog" aria-hidden="true"></i>
            <div
              className={`w-[100px] h-[80px] absolute right-0 top-[34px] bg-white rounded-sm border text-sm z-10 ${
                isMenuOpened ? "" : "hidden"
              }`}
            >
              <ul className="h-full">
                <Link href={"/user/dashboard/edituser"}>
                  <a>
                    <li
                      className="h-1/2 flex items-center border-b hover:bg-gray-100 p-2 transition-colors"
                      onClick={hideMenu}
                    >
                      setting
                    </li>
                  </a>
                </Link>
                <li
                  className="h-1/2 flex items-center hover:bg-gray-100 p-2 transition-colors"
                  onClick={logout}
                >
                  <p>log out</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <ToastContainer />
    </>
  );
}

export default DashboardHeader;
