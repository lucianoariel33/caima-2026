import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";

interface TestimonialData {
  id: number;
  image: string;
  text: string;
  authorName: string;
  authorTitle: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    image: "assets/img/testimonial/1-4.jpg",
    text: "We hired Archinix to design the addition to our home and we couldn't be happier with the results. The team was professional, responsive, and listened to our needs throughout the process. The final product exceeded our expectations and we would highly recommend Metalo to anyone looking for top-notch architectural services.",
    authorName: "Danial elliott",
    authorTitle: "Founder & CEO at Design studio",
  },
  {
    id: 2,
    image: "assets/img/testimonial/1-5.jpg",
    text: "We hired Metalo to design the addition to our home and we couldn't be happier with the results. The team was professional, responsive, and listened to our needs throughout the process. The final product exceeded our expectations and we would highly recommend Metalo to anyone looking for top-notch architectural services.",
    authorName: "Jacob Nilson",
    authorTitle: "Founder & CEO at Alfa Inc.",
  },
  {
    id: 3,
    image: "assets/img/testimonial/1-6.jpg",
    text: "We hired Metalo to design the addition to our home and we couldn't be happier with the results. The team was professional, responsive, and listened to our needs throughout the process. The final product exceeded our expectations and we would highly recommend Metalo to anyone looking for top-notch architectural services.",
    authorName: "Jacob Nilson",
    authorTitle: "Founder & CEO at Alfa Inc.",
  },
  {
    id: 4,
    image: "assets/img/testimonial/1-6.jpg",
    text: "We hired Metalo to design the addition to our home and we couldn't be happier with the results. The team was professional, responsive, and listened to our needs throughout the process. The final product exceeded our expectations and we would highly recommend Metalo to anyone looking for top-notch architectural services.",
    authorName: "Jacob Nilson",
    authorTitle: "Founder & CEO at Alfa Inc.",
  },
  {
    id: 5,
    image: "assets/img/testimonial/1-6.jpg",
    text: "We hired Metalo to design the addition to our home and we couldn't be happier with the results. The team was professional, responsive, and listened to our needs throughout the process. The final product exceeded our expectations and we would highly recommend Metalo to anyone looking for top-notch architectural services.",
    authorName: "Jacob Nilson",
    authorTitle: "Founder & CEO at Alfa Inc.",
  },
];

export default function Testimonial() {
  return (
    <>
      <div
        id="testimonial-1"
        className="testimonial-section section-padding pb-90"
      >
        <div className="container">
          <div className="row">
            <Swiper
              modules={[Navigation, Autoplay, Parallax]}
              spaceBetween={30}
              slidesPerView={1}
              speed={2000}
              loop
              parallax
              watchSlidesProgress
              className="testimonial-wrapper owl-carousel"
              navigation={{
                nextEl: ".cc__slider__next--btn",
                prevEl: ".cc__slider__prev--btn",
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide
                  className="single-testimonial-item"
                  key={testimonial.id}
                >
                  <div className="testimonial-img-wrap">
                    <img src={testimonial.image} alt={testimonial.authorName} />
                  </div>
                  <div className="testimonial-content-wrap">
                    <div className="testimonial-text">
                      <p>"{testimonial.text}"</p>
                    </div>
                    <div className="testimonial-author">
                      <h6>{testimonial.authorName}</h6>
                      <p>{testimonial.authorTitle}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="testimonial__controller">
            <button className="cc__slider__next--btn">
              <i className="las la-arrow-left"></i>
            </button>
            <button className="cc__slider__prev--btn">
              <i className="las la-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
