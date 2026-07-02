import BackgroundImgSet from "@components/BackgroundImgSet/BackgroundImgSet";
import { content } from "@/content/useContent";

export default function FeatureLine() {
  const { featureLine } = content.home;
  const items = [...featureLine.items, ...featureLine.items];

  return (
    <div className="feature_wrap">
      <BackgroundImgSet className="feature_item_one" bgUrl={featureLine.background}>
        <div className="feature_scroller">
          <div className="scroller_track">
            {items.map((name, index) => (
              <div className="feature_item_one" key={`${name}-${index}`}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </BackgroundImgSet>
    </div>
  );
}
