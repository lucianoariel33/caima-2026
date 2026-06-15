import FunFactItem from "./FunFactItem";

interface Counter {
  value: number;
  label: string;
  highlight?: boolean;
}

const COUNTERS: Counter[] = [
  { value: 1995, label: "Since", highlight: true },
  { value: 16, label: "Offices" },
  { value: 215, label: "Projects" },
  { value: 47, label: "Countries" },
];

export default function CounterSection() {
  return (
    <div className="counter-section section-padding pt-0 pt-md-60 pb-60 pb-md-0">
      <div className="container">
        <div className="row gx-5">
          {COUNTERS.map((item, index) => (
            <div className="col-lg-3 col-md-3 col-sm-6 wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`} key={index}>
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
