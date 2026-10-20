import Logo from "../atoms/Logo";
import HeroImage from "../atoms/HeroImage";
import Button from "../atoms/Button";
import HeroText from "../moleculas/HeroText";

export default function Hero() {
  return (
    <section className="hero">
      <Logo />
      <HeroImage />
      <HeroText />
      <Button onClick={() => console.log("Get Started")}>Get Started</Button>
    </section>
  );
}