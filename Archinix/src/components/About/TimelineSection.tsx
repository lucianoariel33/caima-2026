import timelineOne from "/assets/img/timeline/1.jpg";
import timelineTwo from "/assets/img/timeline/2.jpg";
import timelineThree from "/assets/img/timeline/3.jpg";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  text: string;
  img: string;
  reverse?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2010",
    title: "Founding Year",
    text: "Inception: Florz was founded by a team of flooring enthusiasts with a vision to redefine flooring solutions for homeowners and businesses alike. Their goal was to combine quality materials with exceptional service.",
    img: timelineOne,
    reverse: false,
  },
  {
    id: 2,
    year: "2013",
    title: "Initial Launch",
    text: "Business Setup: Florz established its headquarters in New York, partnering with top manufacturers to offer a diverse range of flooring products, including hardwood, laminate, vinyl, and tile.",
    img: timelineTwo,
    reverse: true,
  },
  {
    id: 3,
    year: "2015",
    title: "Growth and Community Recognition",
    text: "Market Expansion: As demand grew, Florz expanded its product offerings to include eco-friendly flooring options, catering to environmentally conscious consumers.",
    img: timelineThree,
    reverse: false,
  },
];

export default function TimelineSection() {
  return (
    <div className="timeline-section section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="timeline-wrapper">
            {timelineData.map((item: TimelineItem) => (
              <div
                key={item.id}
                className={`timeline-item wow fadeInUp ${item.reverse ? "reverse" : "obverse"
                  }`}
                data-wow-delay={`${0.2 * item.id}s`}
              >
                <div className="timeline-line-wrap">
                  <span className="timeline-line"></span>
                </div>

                <div className="timeline-inner">
                  <div className="time-line-point-wrap">
                    <div className="time-line-point"></div>
                  </div>

                  <div
                    className={`timeline-img-wrap ${item.reverse ? "order-1 order-md-2" : ""
                      }`}
                  >
                    <img src={item.img} alt={item.title} />
                  </div>

                  <div
                    className={`timeline-content-wrap ${item.reverse ? "order-2 order-md-1" : ""
                      }`}
                  >
                    <span className="timeline-date">{item.year}</span>
                    <h5 className="timeline-title">{item.title}</h5>
                    <p className="timeline-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
