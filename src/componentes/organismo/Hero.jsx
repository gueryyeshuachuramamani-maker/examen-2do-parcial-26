import Logo from "../atomos/Logo";
import HeroImage from "../atomos/HeroImage";
import Button from "../atomos/Button";
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