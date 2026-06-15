import { useState } from "react";
import faqImg from "/assets/img/faq-img.jpg";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What services do architects provide?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
  {
    id: 2,
    question: "What is the timeline for a typical project?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
  {
    id: 3,
    question: "How do I find the right architect for my project?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
  {
    id: 4,
    question: "Don't architects add substantial cost to a project?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
  {
    id: 5,
    question: "How much does a project cost?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section bg-cover section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center mt-60">
          <div className="col-xl-12">
            <img src={faqImg} alt="FAQ" loading="lazy" />
          </div>

          <div className="col-xl-12 mt-100 text-center">
            <div className="section-title wow fadeInUp">
              <h2 className="visible-slowly-right">Frequently Asked Question</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-30">
          <div className="col-xl-8">
            <div className="cp-custom-accordion">
              <div className="accordions">
                {faqData.map((item, index) => (
                  <div className="accordion-items wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`} key={item.id}>
                    <h2 className="accordion-header">
                      <button
                        onClick={() => handleToggle(index)}
                        className={`accordion-buttons ${activeIndex === index ? "" : "collapsed"
                          }`}
                      >
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {item.question}
                      </button>
                    </h2>

                    {activeIndex === index && (
                      <div className="accordion-body show">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
