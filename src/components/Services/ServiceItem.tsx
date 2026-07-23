import { content } from "@/content/useContent";
import MobileInfoDisclosure from "@components/MobileInfoDisclosure/MobileInfoDisclosure";

export default function ServiceItem() {
  const services = content.services.items;

  return (
    <div className="service-section section-padding">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 * (index + 1)}s`}
            >
              <div className="single-service-wrap">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h4 className="service-title">{service.title}</h4>
                <MobileInfoDisclosure summary="Ver detalle">
                  <p className="service-content">{service.description}</p>
                </MobileInfoDisclosure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
