import { Outlet, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts.ts";
import { login } from "../utils.ts";

export default function PrivateRoute({ forAdmin }: { forAdmin?: boolean }) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      if (localStorage.getItem("token") == null) {
        navigate("/login");
      } else {
        login().then((value) => setUser(value));
      }
    } else {
      if (forAdmin && !user.role.includes("ADMIN")) {
        navigate("/");
      }
    }
  }, [navigate, setUser, user]);

  return <Outlet />;
}
