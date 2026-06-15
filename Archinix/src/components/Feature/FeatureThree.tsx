interface FeatureData {
    id: number;
    iconClass: string;
    title: string;
    description: string;
    delay: string;
}

const features: FeatureData[] = [
    {
        id: 1,
        iconClass: "flaticon-architecture",
        title: "Schematic",
        description: "In dignissim libero et tincidunt congue. Mauris sed tellus lectus. Duis at consect Lorem, ipsum dolor. quam.",
        delay: ".2s"
    },
    {
        id: 2,
        iconClass: "flaticon-home",
        title: "Concept",
        description: "In dignissim libero et tincidunt congue. Mauris sed tellus lectus. Duis at consect Lorem, ipsum dolor. quam.",
        delay: ".4s"
    },
    {
        id: 3,
        iconClass: "flaticon-floor-plan",
        title: "Floor Planning",
        description: "In dignissim libero et tincidunt congue. Mauris sed tellus lectus. Duis at consect Lorem, ipsum dolor. quam.",
        delay: ".6s"
    },
    {
        id: 4,
        iconClass: "flaticon-sketch",
        title: "Landscape",
        description: "In dignissim libero et tincidunt congue. Mauris sed tellus lectus. Duis at consect Lorem, ipsum dolor. quam.",
        delay: ".8s"
    }
];

export default function FeatureThree() {
    return (
        <div className="feature-section gray-bg section-padding px-2 pb-90">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-xl-5 col-lg-4">
                        <div className="section-title">
                            <h6>Core Feature</h6>
                            <h2>Building The Future</h2>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-8">
                        <div className="row gx-5 gy-5 feature-wrap">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp animated"
                                    data-wow-delay={feature.delay}
                                >
                                    <div className="single-feature-item">
                                        <div className="single-feat-inner">
                                            <div className="icon-wrap">
                                                <i className={feature.iconClass}></i>
                                            </div>
                                            <div className="service-title">
                                                <h4>{feature.title}</h4>
                                            </div>
                                        </div>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
