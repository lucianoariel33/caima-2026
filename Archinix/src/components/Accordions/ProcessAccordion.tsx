import React, { useState } from "react";
import SectionHeading from "@components/SectionHeading/SectionHeading";

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Listen & Collaborate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ad magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 2,
    title: "Envision & Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ad magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 3,
    title: "Partner & Build",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ad magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
];

const ProcessAccordion: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? 0 : id);
  };

  return (
    <div className="process-section section-padding pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <SectionHeading
              title="Every Steps Thoughtfully"
              subtitle="How We Work"
            />
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="cp-custom-accordion">
              {steps.map((step, index) => (
                <div key={step.id} className="accordion-items wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
                  <h2 className="accordion-header" id={`vision${step.id}`}>
                    <button
                      className={`accordion-buttons ${activeId === step.id ? "" : "collapsed"
                        }`}
                      type="button"
                      onClick={() => toggleAccordion(step.id)}
                      aria-expanded={activeId === step.id}
                    >
                      <span>{step.id.toString().padStart(2, "0")}/</span>{" "}
                      {step.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse${step.id}`}
                    className={`accordion-collapse collapse ${activeId === step.id ? "show" : ""
                      }`}
                    aria-labelledby={`vision${step.id}`}
                  >
                    <div className="accordion-body">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessAccordion;
