interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  active?: boolean;
  subtitle?: string;
}
interface PricingTitle {
  title: string;
  subtitle: string;
  shorttitle: string;
  description: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic Plan",
    price: "$2,500 - $5,000",
    features: [
      "Interior Design",
      "Custom design concept",
      "3D Rendering of proposed design",
      "Detailed shopping list of decor items",
      "Floor plan and elevations",
      "Ideal for refreshing a single space",
    ],
  },
  {
    name: "Premium Plan",
    price: "$10,000 - $20,000",
    features: [
      "Architectural Design",
      "Consultation with principal architect",
      "Detailed analysis and feasibility study",
      "Custom design concept",
      "Full set of construction documentation",
      "Assistance with permit applications",
      "Ideal for a building major renovation",
    ],
    active: true,
  },
  {
    name: "Deluxe Plan",
    price: "10%",
    subtitle: "of Project Cost",
    features: [
      "Project Management",
      "Full project management services",
      "Co-ordination with contractors",
      "Project Scheduling",
      "Budget Management",
      "Quality Control",
      "Regular Process Report",
      "Ideal for ensure project highest standard",
    ],
  },
];

const defaultTitle: PricingTitle = {
  title: "Pricing Plan",
  subtitle: "Affordable",
  shorttitle: "Cost Rate",
  description:
    "  Our pricing is designed to provide exceptional value to our clients while ensuring that our team is able to deliver the highest quality design services.",
};

export default function PricingSection() {
  return (
    <div className="pricing-section pt-50 px-2 pt-md-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title">
              <h6>{defaultTitle.title}</h6>
              <h2>
                {defaultTitle.subtitle} <br /> {defaultTitle.shorttitle}
              </h2>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 text-lg-end">
            <p>{defaultTitle.description}</p>
          </div>
        </div>
        <div className="row gx-5">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`}>
              <div
                className={`single-price-item ${plan.active ? "active" : ""}`}
              >
                <h5>{plan.name}</h5>
                <div className="price-box">
                  <h3>
                    {plan.price} <span>{plan.subtitle}</span>
                  </h3>
                </div>
                <div className="price-list">
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="las la-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
