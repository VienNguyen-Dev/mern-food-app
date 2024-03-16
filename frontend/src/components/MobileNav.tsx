import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

import MobileNavLink from "./MobileNavLink";

export default function MobileNav() {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" text-orange-500" />
      </SheetTrigger>
      <SheetContent className=" space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex gap-2 items-center">
              <CircleUserRound className=" text-orange-500" />
              <span className=" hover:text-orange-500"> {user?.email}</span>
            </span>
          ) : (
            <span>Wellcome to MernEats.com!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col">
          {isAuthenticated ? (
            <MobileNavLink />
          ) : (
            <Button onClick={() => loginWithRedirect()} className=" font-bold flex-1 bg-orange-500 ">
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
