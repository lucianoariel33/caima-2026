import FunFactItem from "./FunFactItem";
import { content } from "@/content/useContent";

export default function CounterSection() {
  const counters = content.home.counters;

  return (
    <div className="counter-section section-padding pt-0 pt-md-60 pb-60 pb-md-0">
      <div className="container">
        <div className="row gx-5">
          {counters.map((item, index) => (
            <div
              className="col-lg-3 col-md-3 col-sm-6 wow fadeInUp"
              data-wow-delay={`${0.2 * (index + 1)}s`}
              key={item.label}
            >
              <div className={item.highlight ? "highlights" : undefined}>
                <FunFactItem value={item.value} label={item.label} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
