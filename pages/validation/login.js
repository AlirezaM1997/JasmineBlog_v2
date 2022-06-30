//components
import Login from "../../components/login";

//other
import loginAuth from "../../feature/loginAuth";

function login() {
  return <Login />;
}

export default loginAuth(login);
