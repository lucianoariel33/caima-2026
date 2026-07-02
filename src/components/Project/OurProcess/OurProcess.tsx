import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax, Pagination } from "swiper/modules";
import SectionHeading from "@components/SectionHeading/SectionHeading";

import processSteps from "@/jsondata/processSteps.json";

interface ProcessData {
  id: number;
  number: string;
  title: string;
  description: string;
}

export default function OurProcess({ styleTwo }: { styleTwo?: boolean }) {
  return (
    <div
      className={`process-section ${!styleTwo ? "gray-bg" : "pt-0"
        } section-padding`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <SectionHeading subtitle="How We Do" title="Our Process" />
          </div>
        </div>
        <div className="row mt-40">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay, Parallax]}
            spaceBetween={30}
            slidesPerView={1}
            speed={1200}
            loop
            parallax
            watchSlidesProgress
            className="process-wrapper owl-carousel"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {processSteps.map((step: ProcessData, index: number) => (
              <SwiperSlide key={step.id} className="single-process-item wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`}>
                <div className="process-up">
                  <div className="process-num">
                    <span>{step.number}</span>
                  </div>
                  <div className="process-icon">
                    <i className="las la-dot-circle"></i>
                  </div>
                </div>
                <div className="process-down">
                  <p>{step.description}</p>
                  <h4>{step.title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
