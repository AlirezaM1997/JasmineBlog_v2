//next
import { useRouter } from "next/router";
import Link from "next/link";
import Error from "next/error";
//components
import Loading from "./loading";

//other
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";

import { useAllState } from "../context/state";
import Layout from "./requireAuth";

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

  // useEffect(() => {
  //   // console.log("userInfo", "background:yellow", userInfo);
  //   // window.scrollTo(0, 0);
  //   fetch(`http://localhost:4000/blog/my-blogs`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       auth: `ut ${cookies.get("token")}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         return <Error />;
  //       }
  //     })
  //     .then((result) => {
  //       setMyBlogs(result);
  //       console.log(result);
  //       setLoading(false);
  //     });
  // }, []);

  const logout = () => {
    toast.warn("You have successfully logged out!");
    setTimeout(() => {
      cookies.remove("token");
      setToken("");
      setUserInfo();
      // window.location.href = "/";
    }, 3000);
  };

  return <h3>Dashboard!!!!!!!!!!!!</h3>;
}
