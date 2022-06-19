//next
import { useRouter } from "next/router";

//other
import { getCookie } from 'cookies-next'
import { useAllState } from "../context/state";
import { useEffect, useState } from "react";

//components
import Loading from "./loading";

function RequireAuth({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const cookies = new Cookies();

  const [loading, setLoading] = useState(true);
  const { setUserInfo } = useAllState();
  const { token } = useAllState();

  useEffect(() => {
    fetch("http://localhost:4000/user/me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${token}`,
      },
      body: JSON.stringify({}),
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        if (res && res._id) {
          console.log("%c res", "background:red", res);
          setUserInfo(res);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
        setLoading(false);
    });
}, []);

if (loading) {
    return <Loading />;
} else {
    // console.clear()
    console.log("%c children", "background:blue", children);
    console.log("isAuthenticated", isAuthenticated);
    console.log("token", getCookie('token'));
    // return children

    return isAuthenticated ? children : router.push("/validation/login");
  }
}

export default RequireAuth;
