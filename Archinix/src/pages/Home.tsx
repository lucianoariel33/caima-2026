import HeroOne from "@components/Hero/HeroOne";
import StudioAbout from "@components/About/StudioAbout";
import OurServices from "@components/Services/OurServices";
import FeatureLine from "@components/Feature/FeatureLine";
import RecentProject from "@components/Project/RecentProject/RecentProject";
import OurProcess from "@components/Project/OurProcess/OurProcess";
import Testimonial from "@components/Testimonial/Testimonial";
import Cta from "@components/CTA/Cta";
import Counter from "@components/Counter/Counter";
import Blog from "@components/HomeBlog/Blog";

export default function Home() {
  return (
    <>
      <HeroOne />
      <StudioAbout />
      <OurServices />
      <FeatureLine />
      <RecentProject />
      <OurProcess />
      <Testimonial />
      <Cta />
      <Counter />
      <Blog />
    </>
  );
}
