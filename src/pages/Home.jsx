import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import LogoSlider from "../components/LogoSlider";
import ReviewSection from "../components/ReviewSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <LogoSlider />
      <ReviewSection />
    </div>
  );
}
