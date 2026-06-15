import service1 from "/assets/img/service/service-1.jpg";
import service2 from "/assets/img/service/service-2.jpg";
import service3 from "/assets/img/service/service-3.jpg";
import service4 from "/assets/img/service/service-4.jpg";
import service5 from "/assets/img/service/service-5.jpg";
import service6 from "/assets/img/service/service-6.jpg";

interface ServiceItem {
  id: number;
  title: string;
  imgSrc: string;
}

const services: ServiceItem[] = [
  { id: 1, title: "Architectural Design", imgSrc: service1 },
  { id: 2, title: "Interior Design", imgSrc: service2 },
  { id: 3, title: "Project Management", imgSrc: service3 },
  { id: 4, title: "Historic Preservation", imgSrc: service4 },
  { id: 5, title: "Landscape Design", imgSrc: service5 },
  { id: 6, title: "Home Renovation", imgSrc: service6 },
];

export default function OurServices() {
  return (
    <div className="service-section section-padding px-2 pt-90 pb-100">
      <div className="container pr-20">
        <div className="row">
          <div className="section-title mb-30 mt-0">
            <h3>Our Services</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            {services.map((service, index) => (
              <div className="single-service-item " key={service.id}>
                <div
                  className="single-service-inner wow fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.2}s`}
                >
                  <h5>
                    <span>{service.id.toString().padStart(2, "0")}</span>{" "}
                    {service.title}
                  </h5>
                  <div className="details-link">
                    <i className="las la-arrow-right"></i>
                  </div>
                </div>
                <div className="service-img">
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
