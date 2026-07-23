import { content } from "@/content/useContent";
import MobileInfoDisclosure from "@components/MobileInfoDisclosure/MobileInfoDisclosure";

export default function CoreFeature() {
  const { coreFeature } = content.services;
  const delays = [".2s", ".4s", ".6s", ".8s"];

  return (
    <div className="feature-section section-padding pb-90">
      <div className="container">
        <div className="row gx-5">
          <div className="col-xl-5 col-lg-4">
            <div className="section-title">
              <h6>{coreFeature.subtitle}</h6>
              <h2>{coreFeature.title}</h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-8">
            <div className="row gx-5 gy-5 feature-wrap">
              {coreFeature.items.map((feature, index) => (
                <div
                  key={feature.title}
                  className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp animated"
                  data-wow-delay={delays[index] ?? ".2s"}
                >
                  <div className="single-feature-item">
                    <div className="single-feat-inner">
                      <div className="icon-wrap">
                        <i className={feature.iconClass}></i>
                      </div>
                      <div className="service-title">
                        <h4>{feature.title}</h4>
                      </div>
                    </div>
                    <MobileInfoDisclosure summary="Ver detalle">
                      <p>{feature.description}</p>
                    </MobileInfoDisclosure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
