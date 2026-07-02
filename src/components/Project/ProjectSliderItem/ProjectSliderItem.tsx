import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { projects } from "@/content/projects";

export default function ProjectSliderItem() {
  const swiperRef = useRef<SwiperType | null>(null);

  const goPrev = () => {
    swiperRef.current?.slidePrev();
  };

  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <>
      <div id="project-standard" className="project-section pt-60 pb-120">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Navigation]}
          className="project-slider-2"
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                to={`/project-details/${item.slug}`}
                className="single-project-wrapper"
              >
                <div className="project-img">
                  <img src={item.cover} alt={item.title} loading="lazy" />
                </div>
                <div className="project-title">
                  <h3>{item.title}</h3>
                  <h6>{item.category}</h6>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container">
          <div className="project-slider-2 position-relative">
            <div className="owl-nav d-flex gap-3 mb-3">
              <button className="owl-prev" onClick={goPrev}>
                <i className="las la-arrow-left"></i>
              </button>

              <button className="owl-next" onClick={goNext}>
                <i className="las la-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
