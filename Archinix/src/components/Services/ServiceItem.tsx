import services from "@/jsondata/services.json";

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export default function ServiceItem() {
  return (
    <div className="service-section section-padding">
      <div className="container">
        <div className="row">
          {services.map((service: Service, index: number) => (
            <div key={service.id} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`}>
              <div className="single-service-wrap">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-content">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
