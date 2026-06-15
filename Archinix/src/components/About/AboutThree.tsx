import AboutProgress from "./AboutProgress";
import aboutImg1 from "/assets/img/about/1-1.jpg";

interface AboutData {
    subtitle: string;
    title: string;
    description: string;
    image: string;
}

const defaultData: AboutData = {
    subtitle: "About Us",
    title: "Architecture Renovation",
    description:
        "We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion. Since the 1980s, as the complexity of buildings began to increase, the field of architecture technological expertise.",
    image: aboutImg1,
};

export default function AboutThree() {
    const { subtitle, title, description, image } = defaultData;

    return (
        <div className="about-section section-padding pb-0 pb-md-60">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="about-content-wrapper">
                            <div className="section-title">
                                <div>
                                    <h6>{subtitle}</h6>
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            <div className="p-animation">
                                <p>{description}</p>
                            </div>

                            <AboutProgress />
                        </div>
                    </div>
                    <div
                        className="col-xl-6 col-lg-6 wow fadeInUp animated"
                        data-wow-delay="200ms"
                    >
                        <div className="about-img-wrapper">
                            <img src={image} alt="About Architecture Renovation" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
