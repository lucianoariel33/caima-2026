import BackgroundImgSet from "@components/BackgroundImgSet/BackgroundImgSet";
import { content } from "@/content/useContent";
import MobileInfoDisclosure from "@components/MobileInfoDisclosure/MobileInfoDisclosure";

export default function FeatureLine() {
  const { featureLine } = content.home;
  const items = [...featureLine.items, ...featureLine.items];

  return (
    <MobileInfoDisclosure
      summary="Ver áreas"
      desktopWrapperClassName="feature_wrap"
      mobileClassName="mobile-info-disclosure--feature-line"
    >
      <BackgroundImgSet className="feature_item_one" bgUrl={featureLine.background}>
        <div className="feature_scroller">
          <div className="scroller_track">
            {items.map((name, index) => (
              <div className="feature_item_one__text" key={`${name}-${index}`}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </BackgroundImgSet>
    </MobileInfoDisclosure>
  );
}
