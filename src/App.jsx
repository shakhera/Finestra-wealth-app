import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { Button } from "./components/ui/button";
import AccountSection from "./pages/Home/AccountSection";
import BrandSection from "./pages/Home/BrandSection";
import FeaturesSection from "./pages/Home/FeaturesSection";
import HeroSection from "./pages/Home/HeroSection";
import TestimonialsSection from "./pages/Home/TestimonialsSection";

function App() {
  return (
    <>
      <Header />
      <div className="">
        <HeroSection />
        <BrandSection />
        <FeaturesSection />
        <AccountSection />
        <TestimonialsSection />
      </div>

      <Footer />
    </>
  );
}

export default App;
