import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination } from "swiper/modules";
import { content } from "@/content/useContent";
import MobileInfoDisclosure from "@components/MobileInfoDisclosure/MobileInfoDisclosure";

export default function HeroSlider() {
  const { hero } = content.home;

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
        {hero.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="single-slide-item d-flex align-items-center"
              data-background={slide.image}
              style={{
                backgroundImage: `url(${slide.image})`,
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
                          <span>{slide.year}</span>
                        </p>
                        <h1 className="text-white">{slide.title}</h1>
                        <div className="hero-copy__rule"></div>
                        <MobileInfoDisclosure summary="Ver resumen" mobileClassName="mobile-info-disclosure--hero">
                          <h3 className="text-white">{hero.slogan}</h3>
                        </MobileInfoDisclosure>
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
