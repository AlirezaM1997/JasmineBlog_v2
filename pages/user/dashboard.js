import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import Loading from "../../components/loading";

const Dashboard = () => {
  return <h2>This is Dashboard......................</h2>;
};
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
        console.log("%c userData", "background:blue", userData);
        if (userData && userData._id) {
          setData(userData);
        } else {
          router.push("/validation/login");
        }
        setLoading(false)
      };
      getUser();
    }, []);
    if (loading) {
      return <Loading />;
    } else {
      return data ? <Component /> : null;
    }
  };
  return AuthenticatedComponent;
};
export default withAuth(Dashboard);
