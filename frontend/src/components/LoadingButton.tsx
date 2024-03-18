import React from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function LoadingButton() {
  return (
    <Button disabled>
      <Loader2 className=" w-4 h-4 mr-2 animate-spin" /> {/* animate-spin co nghia la tao hieu ung quay xoay */}
      Loading
    </Button>
  );
}
