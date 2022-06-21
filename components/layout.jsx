import React from "react";

//next
import { useRouter } from "next/router";

//components
import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  const router = useRouter();
  if (router.pathname === "/user/dashboard" || router.pathname==='/user/dashboard/createblog') {
    return (
      <>
        
        {children}
        <Footer />
      </>
    );
  } else {
    return (
      <>
      <Header />
        {children}
        <Footer />
      </>
    );
  }
}

export default Layout;
