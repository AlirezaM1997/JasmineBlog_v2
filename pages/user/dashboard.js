//components
// import Dashboard from "../../components/dashboard";
import RequireAuth from "../../components/requireAuth";

function dashboard() {
  return (
    <RequireAuth>
     <h2>hiiiiiiiiiiiiiiiiiiiiiii</h2>
    </RequireAuth>
  );
}

export default dashboard;
