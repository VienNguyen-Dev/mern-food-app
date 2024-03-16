import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <div>
      <img src={heroImage} className="w-full max-h-[600px] object-cover" />
    </div>
  );
}
