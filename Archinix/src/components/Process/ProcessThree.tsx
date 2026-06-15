import { useState } from "react";

interface AccordionItem {
    id: string;
    step: string;
    title: string;
    content: string;
}

const processSteps: AccordionItem[] = [
    {
        id: "One",
        step: "01/",
        title: "Listen & Collaborate",
        content:
            "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmo tempor incididunt ut labore et dolore ad magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
        id: "Two",
        step: "02/",
        title: "Envision & Design",
        content:
            "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmo tempor incididunt ut labore et dolore ad magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
        id: "Three",
        step: "03/",
        title: "Partner & Build",
        content:
            "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmo tempor incididunt ut labore et dolore ad magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
];

export default function ProcessThree() {
    const [activeId, setActiveId] = useState<string>("One");

    return (
        <div className="process-section section-padding pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5">
                        <div className="section-title">
                            <h6>Our Process</h6>
                            <h2>Every Steps Thoughtfully</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="cp-custom-accordion">
                            <div className="accordions" id="visionExample">
                                {processSteps.map((item) => {
                                    const isActive = activeId === item.id;
                                    return (
                                        <div className="accordion-items" key={item.id}>
                                            <h2 className="accordion-header" id={`vision${item.id}`}>
                                                <button
                                                    className={`accordion-buttons ${isActive ? "" : "collapsed"}`}
                                                    type="button"
                                                    onClick={() => setActiveId(isActive ? "" : item.id)}
                                                    aria-expanded={isActive ? "true" : "false"}
                                                    aria-controls={`collapse${item.id}`}
                                                >
                                                    <span>{item.step}</span>
                                                    {item.title}
                                                </button>
                                            </h2>

                                            <div
                                                id={`collapse${item.id}`}
                                                className={`accordion-collapse collapse ${isActive ? "show" : ""}`}
                                                aria-labelledby={`vision${item.id}`}
                                                data-bs-parent="#visionExample"
                                            >
                                                <div className="accordion-body">{item.content}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
