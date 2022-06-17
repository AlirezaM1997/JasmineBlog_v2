//next
import { useRouter } from "next/router";
import Link from "next/link";

//components
import Loading from "./loading";

//other
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";

import { useAllState } from "../context/state";

export default function Dashboard() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const showMenu = () => {
    setIsMenuOpened(true);
  };
  const hideMenu = () => {
    if (isMenuOpened) {
      setIsMenuOpened(false);
    }
  };

  const { setToken } = useAllState();
  const { setUserInfo } = useAllState();
  const { userInfo } = useAllState();

  const [myBlogs, setMyBlogs] = useState();
  const [loading, setLoading] = useState(true);
  const cookies = new Cookies();

  const { parsIsoDate } = useAllState();
  const router = useRouter();

  useEffect(() => {
    // console.log(userInfo);
    // window.scrollTo(0, 0);
    fetch(`http://localhost:4000/blog/my-blogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${cookies.get("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.status);
        }
      })
      .then((result) => {
        setMyBlogs(result);
        console.log(result);
        setLoading(false);
      });
  }, []);

  const logout = () => {
    toast.warn("You have successfully logged out!");
    setTimeout(() => {
      cookies.remove("token");
      setToken("");
      setUserInfo();
      window.location.href = "/";
    }, 3000);
  };

  return (
    <>
      <div className="w-full bg-white relative flex" onClick={hideMenu}>
        <div className="w-full h-full flex flex-col justify-between">
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
                      Welcome {userInfo.name}
                    </div>
                    <div className="text-sm font-regular"></div>
                  </div>
                  <img
                    src={`${process.env.REACT_APP_DOMAIN}/${userInfo.avatar}`}
                    className="h-10 w-10 rounded-full border border-[#607027]"
                  ></img>
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

          {router.pathname === "/user/dashboard" ? (
            <main className="max-w-full h-full flex flex-col pt-3 min-h-screen fablet:mx-10 tablap:px-14 LCD:px-20">
              <div className="h-full w-full flex flex-wrap justify-center mb-[55px]">
                {loading ? (
                  <Loading />
                ) : myBlogs.length === 0 ? (
                  <div className="flex flex-col items-center">
                    <div className="text-lg w-[200px] h-[200px] bg-gray-800 p-4 rounded-full text-white mb-4 flex justify-center items-center ">
                      <p className="text-center text-[1.4rem]">
                        You have not created any post
                      </p>
                    </div>
                    <Link href="/user/dashboard/createblog">
                      <a className="bg-[#607027] text-sm font-medium px-3 py-2 rounded text-white w-fit">
                        + Add The First Blog
                      </a>
                    </Link>
                  </div>
                ) : (
                  <section className="text-gray-600 body-font w-full iphone:px-4">
                    <div className="container py-10 px-0">
                      <div className="mb-3 text-right">
                        <Link href={"/user/dashboard/createblog"}>
                          <a className="bg-[#607027] text-sm font-medium px-3 py-2 rounded text-white">
                            + Add a New Blog
                          </a>
                        </Link>
                      </div>
                      <div className="flex flex-wrap -m-4">
                        {myBlogs.map((item, i) => (
                          <div
                            key={i}
                            className="p-4 sm:w-full w-full dashboardCard"
                          >
                            <div className="h-full shadow rounded overflow-hidden">
                              <img
                                className="w-full h-60 object-cover object-center"
                                src={item.imgurl}
                                style={{ height: "15rem" }}
                                alt="blog"
                              />
                              <div className="py-3 px-4">
                                <h2 className="text-xs tracking-wide title-font font-medium text-gray-400 mb-1">
                                  {parsIsoDate(item.updatedAt)}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-600 mb-1">
                                  {item.title}
                                </h1>
                                <p
                                  className="summeryContentInDashboard leading-relaxed mb-3 text-sm overflow-hidden truncate whitespace-nowrap"
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                ></p>
                                <div className="flex items-center justify-center flex-wrap ">
                                  <Link
                                    href={`/user/dashboard/editblog/${item._id}`}
                                  >
                                    <a className="px-8 py-2 w-2/6 text-center bg-[#607027] text-white transition-all duration-300 rounded">
                                      Edit
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </main>
          ) : (
            ""
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
