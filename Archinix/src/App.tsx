import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@/layout/Layout";
import HomeMain from "@pages/HomeMain";
import Services from "@pages/Services";
import ProjectStandard from "@pages/ProjectStandard";
import ProjectDetails from "@pages/ProjectDetails";

// OCULTOS temporalmente - se eliminan al terminar el proyecto
// import ProjectMetro from "@pages/ProjectMetro";
// import ProjectGrid from "@pages/ProjectGrid";
// import ProjectList from "@pages/ProjectList";
// import ProjectMasonry from "@pages/ProjectMasonry";
// import ProjectSlider from "@pages/ProjectSlider";
import Contact from "@pages/Contact";
import About from "@pages/About";
import Preloader from "@/components/Preloader/Preloader";

// OCULTOS temporalmente - se eliminan al terminar el proyecto
// import Home from "@pages/Home";
// import HomeTwo from "@pages/HomeTwo";
// import HomeThree from "@pages/HomeThree";
// import Teams from "@pages/Teams";
// import Pricing from "@pages/Price";
// import Testimonial from "@pages/Testimonial";
// import Process from "@pages/Process";
// import Faq from "@pages/Faq";
// import Blogs from "@pages/Blogs";
// import BlogDetails from "@pages/BlogDetails";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeMain />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project-standard" element={<ProjectStandard />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />

          {/* RUTAS DE PROYECTOS OCULTAS temporalmente
          <Route path="/project-metro" element={<ProjectMetro />} />
          <Route path="/project-grid" element={<ProjectGrid />} />
          <Route path="/project-list" element={<ProjectList />} />
          <Route path="/project-masonry" element={<ProjectMasonry />} />
          <Route path="/project-slider" element={<ProjectSlider />} />
          */}
          <Route path="/contact" element={<Contact />} />

          {/* RUTAS OCULTAS temporalmente - se eliminan al terminar el proyecto
          <Route path="/home-one" element={<Home />} />
          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/home-three" element={<HomeThree />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
