import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";
import Forbidden from "./Forbidden";

export default function PrivateRoute() {
  const [ready, setReady] = useState(null);

  // this useEffect makes it so the conditional default element is not shown when the app is checking if currentUser exists
  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const { currentUser } = useContext(AuthContext);
  return ready && (currentUser ? <Outlet /> : <Forbidden />);
}
