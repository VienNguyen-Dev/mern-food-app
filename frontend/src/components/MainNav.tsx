import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button onClick={async () => await loginWithRedirect()} variant={"ghost"} className="text-lg font-bold hover:bg-white hover:text-orange-500">
          Log In
        </Button>
      )}
    </div>
  );
}
