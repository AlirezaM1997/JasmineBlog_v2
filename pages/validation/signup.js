//components
import SignUp from "../../components/signup";

//other
import loginAuth from "../../feature/loginAuth";

function signup() {
  return <SignUp />;
}

export default loginAuth(signup);
