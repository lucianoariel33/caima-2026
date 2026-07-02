import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination } from "swiper/modules";
import SectionHeading from "@components/SectionHeading/SectionHeading";

import services from "@/jsondata/services.json";

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export default function ServicesSlide({ styleTwo }: { styleTwo?: boolean }) {
  return (
    <div className={`service-section section-padding ${!styleTwo ? "pb-0 pb-lg-120" : "pt-0 pb-0 pb-lg-120"}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <SectionHeading
              subtitle="Our Services"
              title="Building The Future"
            />
          </div>
        </div>
        <div className="row mt-0">
          <Swiper
            modules={[Autoplay, Parallax, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={1200}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            parallax
            watchSlidesProgress
            className="service-slider swiper mt-0"
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {services.map((service: Service) => (
              <SwiperSlide
                key={service.id}
              >
                <div className="single-service-wrap">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-content">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}