import landingImage from "../assets/landingimage.jpg";
import appDowload from "../assets/appDownload.png";
export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col items-center justify-center gap-8 rounded-lg bg-white py-10 -mt-16 shadow-md">
        <span className=" text-5xl font-bold text-center text-orange-600 tracking-tight">Tuck into a takeway today</span>
        <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <img src={landingImage} />
        <div className="flex flex-col justify-center items-center space-y-4 text-center">
          <span className=" font-bold text-3xl tracking-tighter">Order takeaway even faster!</span>
          <span className=" text-md">Dowload the VegetarianFood App for faster ordering and personalised recommentdations</span>
          <img src={appDowload} />
        </div>
      </div>
    </div>
  );
}
