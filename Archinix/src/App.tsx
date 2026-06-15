import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@/layout/Layout";
import Home from "@pages/Home";
import Services from "@pages/Services";
import Teams from "@pages/Teams";
import Pricing from "@pages/Price";
import Testimonial from "@pages/Testimonial";
import Process from "@pages/Process";
import Faq from "@pages/Faq";
import ProjectStandard from "@pages/ProjectStandard";
import ProjectMetro from "@pages/ProjectMetro";
import ProjectGrid from "@pages/ProjectGrid";
import ProjectList from "@pages/ProjectList";
import ProjectMasonry from "@pages/ProjectMasonry";
import ProjectSlider from "@pages/ProjectSlider";
import ProjectDetails from "@pages/ProjectDetails";
import Blogs from "@pages/Blogs";
import BlogDetails from "@pages/BlogDetails";
import Contact from "@pages/Contact";
import About from "@pages/About";
import HomeTwo from "@pages/HomeTwo";
import HomeThree from "@pages/HomeThree";
import Preloader from "@/components/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home-one" element={<Home />} />
          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/home-three" element={<HomeThree />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/project-standard" element={<ProjectStandard />} />
          <Route path="/project-metro" element={<ProjectMetro />} />
          <Route path="/project-grid" element={<ProjectGrid />} />
          <Route path="/project-list" element={<ProjectList />} />
          <Route path="/project-masonry" element={<ProjectMasonry />} />
          <Route path="/project-slider" element={<ProjectSlider />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/coming-soon" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
