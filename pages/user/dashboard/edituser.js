//components
import EditUser from "../../../components/editUser";

//other
import { getCookie } from "cookies-next";
import dashboardAuth from "../../../feature/dashboardAuth";

const EditUserPage=(props)=> {
  console.log(props);
  return (
    <>
      <EditUser dataFromStaticProps={props} />
    </>
  );
}

export default dashboardAuth(EditUserPage)

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/user/me", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      auth: `ut ${getCookie("token")}`,
    },
    body: JSON.stringify({}),
  });
  const user = await res.json();
console.log('user',user);
  return {
    props: {
      user,
    },
  };
}
