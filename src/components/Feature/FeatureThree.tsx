import { content } from "@/content/useContent";

export default function FeatureThree() {
  const { features } = content.home;
  const delays = [".2s", ".4s", ".6s", ".8s"];

  return (
    <div className="feature-section gray-bg section-padding px-2 pb-90">
      <div className="container">
        <div className="row gx-5">
          <div className="col-xl-5 col-lg-4">
            <div className="section-title">
              <h6>{features.subtitle}</h6>
              <h2>{features.title}</h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-8">
            <div className="row gx-5 gy-5 feature-wrap">
              {features.items.map((feature, index) => (
                <div
                  key={feature.title}
                  className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp animated"
                  data-wow-delay={delays[index] ?? ".2s"}
                >
                  <div className="single-feature-item">
                    <span className="single-feature-item__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="single-feat-inner">
                      <div className="icon-wrap">
                        <i className={feature.iconClass}></i>
                      </div>
                      <div className="service-title">
                        <h4>{feature.title}</h4>
                      </div>
                    </div>
                    <p>{feature.description}</p>
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
