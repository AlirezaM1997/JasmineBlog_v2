//next
import Link from "next/link";

//other
import { removeCookies } from "cookies-next";
import { useState } from "react";
import { toast,ToastContainer } from "react-toastify";

function DashboardHeader() {
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
      // setUserInfo();
      window.location.href = "/";
    }, 3000);
  };

  return (
    <>
      <header className="h-16 w-full flex items-center justify-between relative iphone:px-[8px] md:px-[20px] space-x-10 bg-[#EEEEEE]">
        <div>
          <Link href={"/"}>
            <a>
              <img src="/images/logopng.png" className="w-24"></img>
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href={"/user/dashboard"}>
            <a className="flex flex-shrink-0 items-center space-x-4">
              <div className="flex flex-col items-end ">
                <div className="text-sm font-medium font-[system-ui]">
                  Welcome 
                  {/* {userInfo.name} */}
                </div>
                <div className="text-sm font-regular"></div>
              </div>
              {/* <img
          src={`${process.env.REACT_APP_DOMAIN}/${userInfo.avatar}`}
          className="h-10 w-10 rounded-full border border-[#607027]"
        ></img> */}
            </a>
          </Link>
          <div className="ml-3 cursor-pointer relative" onClick={showMenu}>
            <i className="fa fa-cog" aria-hidden="true"></i>
            <div
              className={`w-[100px] h-[80px] absolute right-0 top-[34px] bg-white rounded-sm border text-sm ${
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
