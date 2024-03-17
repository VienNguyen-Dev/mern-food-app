import { useCreateUser } from "@/api/MyUserAPI";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallBackPage() {
  const { user } = useAuth0();
  const { createUser } = useCreateUser();
  const hasCreateUser = useRef(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.sub && user?.email && !hasCreateUser.current) {
      createUser({
        auth0Id: user?.sub,
        email: user?.email,
      });
      navigate("/");
      hasCreateUser.current = true;
    }
  }, []);
  return <>Loading...</>;
}
