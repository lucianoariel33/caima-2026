import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination } from "swiper/modules";
import SectionHeading from "@components/SectionHeading/SectionHeading";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ryans Gigs",
    role: "Managing Director",
    image: "assets/img/testimonial/4.jpg",
    message:
      "I was especially impressed by their attention to detail and their ability to incorporate unique design elements that truly make my home one of kind.",
  },
  {
    id: 2,
    name: "Paul Scholes",
    role: "Director",
    image: "assets/img/testimonial/5.jpg",
    message:
      "I was especially impressed by their attention to detail and their ability to incorporate unique design elements that truly make my home one of kind.",
  },
  {
    id: 3,
    name: "Alex Ferguson",
    role: "Chief Executive Officer",
    image: "assets/img/testimonial/6.jpg",
    message:
      "I was especially impressed by their attention to detail and their ability to incorporate unique design elements that truly make my home one of kind.",
  },
  {
    id: 4,
    name: "Eric Cantona",
    role: "Chief Advisor",
    image: "assets/img/testimonial/7.jpg",
    message:
      "I was especially impressed by their attention to detail and their ability to incorporate unique design elements that truly make my home one of kind.",
  },
];
export default function OurClients() {
  return (
    <div id="testimonial-2" className="testimonial-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 text-center">
            <SectionHeading subtitle="Testimonial" title="Our Clients Saying" />
          </div>
        </div>
        <div className="row mt-40">
          <Swiper
            modules={[Autoplay, Parallax, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            speed={2000}
            loop
            autoplay={{ delay: 1200, disableOnInteraction: false }}
            pagination={{
              el: ".testimonial__pagination",
              clickable: true,
            }}
            parallax
            watchSlidesProgress
            className="testimonial-carousel owl-carousel"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {" "}
            {testimonials.map((testimonial) => (
              <SwiperSlide
                className="single-testimonial-item"
                key={testimonial.id}
              >
                <div className="testimonial-img mb-30">
                  <img src={testimonial.image} alt="" />
                </div>
                <p>“{testimonial.message}”</p>
                <div className="separator"></div>
                <div className="testimonial-author">
                  <h6>{testimonial.name}</h6>
                  <p>{testimonial.role}</p>
                </div>
              </SwiperSlide>
            ))}{" "}
          </Swiper>
        </div>
        <div className="testimonial__pagination"></div>
      </div>
    </div>
  );
}
