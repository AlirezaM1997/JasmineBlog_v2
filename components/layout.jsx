import React from "react";

//next
import { useRouter } from "next/router";

//components
import Footer from "./footer";
import Header from "./header";
import DashboardHeader from "./dashboardHeader";

function Layout({ children }) {
  const router = useRouter();
  if (
    router.pathname === "/user/dashboard" ||
    router.pathname === "/user/dashboard/createblog"
  ) {
    return (
      <>
      <DashboardHeader/>
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
