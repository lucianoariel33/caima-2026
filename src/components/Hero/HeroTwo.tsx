import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import { content } from "@/content/useContent";
import { projects } from "@/content/projects";
import MobileInfoDisclosure from "@components/MobileInfoDisclosure/MobileInfoDisclosure";

const HERO_PROJECT_SLUGS = [
  "loom-pinamar",
  "casa-altoe-parque-leloir",
  "sentires-ituzaingo",
  "brg-lavalle",
  "honorio-1915-1",
  "edificio-durban-ll",
];

export default function HeroSlider() {
  const { hero } = content.home;
  const heroProjects = HERO_PROJECT_SLUGS.map((slug) =>
    projects.find((project) => project.slug === slug)
  ).filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <div id="home-2" className="homepage-slides owl-carousel">
      <Swiper
        modules={[Autoplay, Parallax, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        speed={1000}
        parallax={true}
      >
        {heroProjects.map((project, index) => (
          <SwiperSlide key={project.slug}>
            <div
              className="single-slide-item d-flex align-items-center"
              data-background={project.cover}
              style={{
                backgroundImage: `url(${project.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay-3"></div>

              <div className="hero-area-content">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-10 col-lg-11 col-md-12 wow fadeInUp animated" data-wow-delay=".2s">
                      <div className="hero-copy">
                        <p className="hero-copy__eyebrow">
                          {hero.label}
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <span>{project.category}</span>
                        </p>
                        <h1 className="text-white">{project.title}</h1>
                        <div className="hero-copy__rule"></div>
                        <MobileInfoDisclosure summary="Ver resumen" mobileClassName="mobile-info-disclosure--hero">
                          <h3 className="text-white">
                            {project.summary || hero.slogan}
                          </h3>
                        </MobileInfoDisclosure>
                        <Link
                          to={`/project-details/${project.slug}`}
                          className="hero-copy__project-link"
                          aria-label={`Ver proyecto ${project.title}`}
                        >
                          Ver proyecto
                          <i className="las la-arrow-right" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
