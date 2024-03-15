import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" border-b-2 border-b-orange-500 py-6">
      <div className=" container mx-auto flex justify-between items-center">
        <Link to={"/"} className=" tracking-tight text-orange-500 text-3xl font-bold">
          MernEat.com
        </Link>
      </div>
    </div>
  );
}
