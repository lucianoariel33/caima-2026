

const features = [
    { title: "Design for Sustainability", stroke: false },
    { title: "Innovative Design", stroke: true },
    { title: "Experienced Team", stroke: false },
    { title: "Honesty & Integrity", stroke: true },
    { title: "24/7 Accessibility", stroke: false },
    { title: "Quality Craftsmanship", stroke: true },
];

export default function FeatureSlider() {
    return (
        <div className="feature_slider_wrap border-top border-bottom pt-60 pb-60">
            <div className="feature_item">
                {[...features, ...features].map((item, index) => (
                    <h2 key={index} className={item.stroke ? "stroke" : ""}>
                        <img src="/assets/img/asterisk-dark.png" alt="feat-icon" />
                        {item.title}
                    </h2>
                ))}
            </div>
        </div>
    );
}
