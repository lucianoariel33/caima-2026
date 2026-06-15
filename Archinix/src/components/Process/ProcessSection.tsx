

interface ProcessStep {
  id: number;
  title: React.ReactNode;
  description: string;
  delay: string;
}

const steps: ProcessStep[] = [
  {
    id: 1,
    title: (
      <>
        Concept <br />
        Design_
      </>
    ),
    description:
      "Interior Design is the art and science of enhancing the interiors, sometimes including exterior, of a course",
    delay: ".2s",
  },
  {
    id: 2,
    title: (
      <>
        Schematic <br />
        Design_
      </>
    ),
    description:
      "Interior Design is the art and science of enhancing the interiors, sometimes including exterior, of a course",
    delay: ".4s",
  },
  {
    id: 3,
    title: (
      <>
        Construction <br />
        Drawings_
      </>
    ),
    description:
      "Interior Design is the art and science of enhancing the interiors, sometimes including exterior, of a course",
    delay: ".6s",
  },
  {
    id: 4,
    title: (
      <>
        Project <br />
        Administration_
      </>
    ),
    description:
      "Interior Design is the art and science of enhancing the interiors, sometimes including exterior, of a course",
    delay: ".8s",
  },
];

export default function ProcessSection() {
  return (
    <div id="process-2" className="process-section section-padding px-2 pt-0 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="section-title">
              <h6>The Process</h6>
              <h2>We Build with Integrity</h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="row mt-0">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp animated"
                  data-wow-delay={step.delay}
                >
                  <div className="single-process-wrap">
                    <div className="process-num">
                      <span>{step.id.toString().padStart(2, "0")}</span>
                    </div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
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
