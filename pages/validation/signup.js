//next
import { useRouter } from "next/router";

//components
import SignUp from "../../components/signup";
import Loading from "../../components/loading";

//other
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

function signup() {
  return <SignUp />;
}

const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const getUser = async () => {
        const response = await fetch("http://localhost:4000/user/me", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            auth: `ut ${getCookie("token")}`,
          },
          body: JSON.stringify({}),
        });
        const userData = await response.json();
        setData(userData);
        setTimeout(() => setLoading(false), 2000);
      };
      getUser();
    }, []);
    if (loading) {
      return <Loading />;
    } else {
      if (data && data._id) {
        router.push("/user/dashboard");
      } else {
        return <Component />;
      }
    }
  };
  return AuthenticatedComponent;
};

export default withAuth(signup);
