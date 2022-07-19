import EditUser from "../../../components/editUser";

const EditUserPage=(props)=> {
  return (
    <>
      <EditUser data={props} />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const response = await fetch("http://localhost:4000/user/me", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      auth: `ut ${ctx.req.headers.cookie?.split("=")[1]}`,
    },
    body: JSON.stringify({}),
  });
  const userData = await response.json();
  return {
    props: {
      userData,
    },
  };
}
export default EditUserPage