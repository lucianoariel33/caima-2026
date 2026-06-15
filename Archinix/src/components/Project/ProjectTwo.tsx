import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

interface ProjectItem {
    id: number;
    title: string;
    category: string;
    img: string;
    to: string;
}

const projects: ProjectItem[] = [
    {
        id: 1,
        title: "Exhibition Center",
        category: "Interior",
        img: "/assets/img/project/project-1-1.jpg",
        to: "/project-details/1",
    },
    {
        id: 2,
        title: "Hall Room",
        category: "Interior",
        img: "/assets/img/project/project-1-2.jpg",
        to: "/project-details/2",
    },
    {
        id: 3,
        title: "Residential Block",
        category: "Interior",
        img: "/assets/img/project/project-1-3.jpg",
        to: "/project-details/3",
    },
    {
        id: 4,
        title: "Commercial Room",
        category: "Interior",
        img: "/assets/img/project/project-1-4.jpg",
        to: "/project-details/4",
    },
    {
        id: 5,
        title: "Exhibition Center",
        category: "Interior",
        img: "/assets/img/project/project-1-5.jpg",
        to: "/project-details/5",
    },
    {
        id: 6,
        title: "Hall Room",
        category: "Interior",
        img: "/assets/img/project/project-1-6.jpg",
        to: "/project-details/6",
    },
    {
        id: 7,
        title: "Residential Block",
        category: "Interior",
        img: "/assets/img/project/project-1-7.jpg",
        to: "/project-details/7",
    },
    {
        id: 8,
        title: "Commercial Room",
        category: "Interior",
        img: "/assets/img/project/project-1-8.jpg",
        to: "/project-details/8",
    },
];

export default function ProjectTwo() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div id="project-2" className="project-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-9">
                        <div className="section-title">
                            <h6>Showcase</h6>
                            <h2>Featured work</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container position-relative">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{
                        nextEl: ".project-next",
                        prevEl: ".project-prev",
                    }}
                    className="project-slider swiper"
                >
                    {projects.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className="single-project-item bg-cover"
                                style={{ backgroundImage: `url(${item.img})` }}
                            >
                                <div className="project-inner">
                                    <Link to={item.to} className="project-icon">
                                        <i className="las la-plus"></i>
                                    </Link>
                                    <div className="hover-info">
                                        <h4>
                                            {item.title} <span>{item.category}</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    className="project-prev swiper-nav-btn border-2"
                    onClick={() => swiperRef.current?.slidePrev()}
                    role="button"
                    aria-label="Previous Slide"
                >
                    <i className="las la-arrow-left"></i>
                </div>
                <div
                    className="project-next swiper-nav-btn border-2"
                    onClick={() => swiperRef.current?.slideNext()}
                    role="button"
                    aria-label="Next Slide"
                >
                    <i className="las la-arrow-right"></i>
                </div>
            </div>
        </div >
    );
}
