import { content } from "@/content/useContent";

export default function FeatureSlider() {
  const { featureSlider } = content.home;
  const items = [...featureSlider.items, ...featureSlider.items];

  return (
    <div className="feature_slider_wrap border-top border-bottom pt-60 pb-60">
      <div className="feature_item">
        {items.map((item, index) => (
          <h2 key={index} className={item.stroke ? "stroke" : ""}>
            <img src={featureSlider.icon} alt="feat-icon" />
            {item.title}
          </h2>
        ))}
      </div>
    </div>
  );
}
