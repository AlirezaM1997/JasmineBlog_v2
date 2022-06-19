
// import { useAllState } from "../../context/state";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

const Dashboards=()=> {
  return <h2>hiiiiiiiiiiiiiiiiiiiiiii</h2>;
}

const withAuth = (Component) => {

  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [data, setData] = useState()
    
    useEffect(() => {
      const getUser = async () => {
            // const { token } = useAllState();
            const response = await fetch("http://localhost:4000/user/me", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                auth: `ut ${getCookie('token')}`,
              },
              body: JSON.stringify({}),
            });
              const userData = await response.json();
              console.log('%c userData','background:blue',userData);
              if (userData && userData._id) {
                setData(userData);
              } else {
                router.push('/validation/login');
              }  
          };
          getUser();
      }, []);

      return data ? <Component /> : null; 
  };

  return AuthenticatedComponent;
};


export default withAuth(Dashboards);
