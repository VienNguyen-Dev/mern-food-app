import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" text-orange-500" />
      </SheetTrigger>
      <SheetContent className=" space-y-3">
        <SheetTitle>Wellcome to MernEats.com!</SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className=" font-bold flex-1 bg-orange-500 ">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
