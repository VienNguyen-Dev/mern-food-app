import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
export default function UsernameMenu() {
  const { user, logout } = useAuth0();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className="flex gap-2 font-bold hover:text-orange-500 text-lg items-center">
            <CircleUserRound className=" text-orange-500" />
            {user?.email}
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link className="p-1 bg-white font-bold hover:text-orange-500 flex-1 items-center text-center text-sm" to={"/user-profile"}>
              User profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button className=" hover:bg-gray-500 flex-1 ite px-3" onClick={() => logout()}>
              Log out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
