export default function Footer() {
  return (
    <div className=" bg-orange-500 py-10">
      <div className=" container flex flex-col justify-between items-center  text-white font-bold md:flex-row gap-2">
        <span className="text-3xl">MernEats.com</span>
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
}
