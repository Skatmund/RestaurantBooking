import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeaturedMenu from "../components/home/FeaturedMenu";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;