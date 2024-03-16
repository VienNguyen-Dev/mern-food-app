import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLink() {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-col gap-4 ">
      <Link className=" text-xl font-bold hover:text-orange-500" to={"/user-profile"}>
        User profile
      </Link>
      <Button onClick={() => logout()} className="hover:bg-gray-500  text-xl flex-1">
        Log out
      </Button>
    </div>
  );
}
