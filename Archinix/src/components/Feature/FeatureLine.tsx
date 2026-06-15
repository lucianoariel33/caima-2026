import BackgroundImgSet from "@components/BackgroundImgSet/BackgroundImgSet";
import bgUrl from "/assets/img/feature-bg.jpg";

interface FeatureItem {
  id: number;
  name: string;
}

const features: FeatureItem[] = [
  { id: 1, name: "Construction Project" },
  { id: 2, name: "Interior Design" },
  { id: 3, name: "Concept Drawings" },
  { id: 4, name: "Building Venture" },
  { id: 5, name: "Construction Project" },
  { id: 6, name: "Interior Design" },
  { id: 7, name: "Concept Drawings" },
  { id: 8, name: "Building Venture" },
];

export default function FeatureLine() {
  return (
    <div className="feature_wrap">
      <BackgroundImgSet className="feature_item_one" bgUrl={bgUrl}>
        <div className="feature_scroller">
          <div className="scroller_track">
            {[...features, ...features].map((feature, index) => (
              <div className="feature_item_one" key={`${feature.id}-${index}`}>
                {feature.name}
              </div>
            ))}
          </div>
        </div>
      </BackgroundImgSet>
    </div>
  );
}
