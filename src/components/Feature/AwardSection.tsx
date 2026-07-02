interface Award {
  year: string;
  title: string;
  icon?: string;
}

const awards: Award[] = [
  { year: "2025", title: "AIA Award", icon: "las la-arrow-right" },
  { year: "2022", title: "ASID Award", icon: "las la-arrow-right" },
  { year: "2000", title: "Leed Gold Certify", icon: "las la-arrow-right" },
];

export default function AwardSection() {
  return (
    <div className="award-section pt-0 pb-60">
      <div className="container">
        <div className="award-wrap">
          <div className="row mt-30 mb-30">
            {awards.map((award, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp"
                data-wow-delay={`${0.2 * (index + 1)}s`}
              >
                <div className="single-award-item">
                  <div className="award-icon">
                    {award.icon && <i className={award.icon}></i>}
                  </div>
                  <div className="award-info">
                    <p>{award.year}</p>
                    <h3>{award.title}</h3>
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
