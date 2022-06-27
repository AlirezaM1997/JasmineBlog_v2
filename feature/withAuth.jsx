//next
import { useRouter } from "next/router";

//components
import Loading from "../components/loading";

//redux
import { useDispatch } from "react-redux";
import { userInfoAction } from "../slices/userInfoSlice";

//other
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";

const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const dispatch = useDispatch();
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
        dispatch(userInfoAction(userData));
        setLoading(false);
      };
      getUser();
    }, []);

    if (loading) {
      return <Loading />;
    } else {
      if (data && data._id) {
        return <Component />;
      } else {
        router.push("/validation/login");
      }
    }
  };
  return AuthenticatedComponent;
};
export default withAuth;
