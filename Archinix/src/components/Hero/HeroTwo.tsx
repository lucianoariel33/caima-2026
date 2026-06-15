import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination } from "swiper/modules";

const slides = [
  {
    id: 1,
    image: "/assets/img/slider/1.jpg",
    title: "Kaave Academy",
  },
  {
    id: 2,
    image: "/assets/img/slider/2.jpg",
    title: "Bungalow",
  },
  {
    id: 3,
    image: "/assets/img/slider/3.jpg",
    title: "Casa Palermo",
  },
];

export default function HeroSlider() {
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
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
                    <div
                      className="col-xl-12 col-lg-12 col-md-12 col-sm-8 wow fadeInUp animated"
                      data-wow-delay=".2s"
                    >
                      <div className="project-info-wrapper">
                        <div className="project-title">
                          <h6>Feature Project / 2025</h6>
                          <h1 className="text-white">{slide.title}</h1>
                        </div>
                      </div>

                      <div className="project-slogan">
                        <h3 className="text-white">
                          Beyound Architecture. Creating Experience.
                        </h3>
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
