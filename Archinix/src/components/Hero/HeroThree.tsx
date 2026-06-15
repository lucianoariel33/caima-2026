import { Link } from "react-router-dom";

interface HeroData {
    subtitle: string;
    title: string;
    titleSpan: string;
    description: string;
    videoLink: string;
    videoText: string;
}

const defaultData: HeroData = {
    subtitle: "Wecome to Archinix",
    title: "Award Winning ",
    titleSpan: "Architect Studio",
    description:
        "We are a London-based architecture and design firm with a global reputation for creating innovative spaces.",
    videoLink: "https://www.youtube.com/watch?v=uySn1BZiWWs",
    videoText: "View Details",
};

export default function HeroThree() {
    const { subtitle, title, titleSpan, description, videoLink, videoText } = defaultData;

    return (
        <div id="home-3" className="hero-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="hero-content-wrap">
                            <div className="section-title">
                                <h6>{subtitle}</h6>
                                <h1>
                                    {title} <br /> <span>{titleSpan}</span>
                                </h1>
                            </div>
                            <p>{description}</p>
                            <div className="hero-btn mt-40 wow fadeInUp animated" data-wow-delay="500ms">
                                <Link to="/services" className="theme-btn mr-40">
                                    Get Started
                                </Link>
                                <div className="video-wrap d-inline-flex align-items-center">
                                    <a href={videoLink} className="video-play-btn mfp-iframe">
                                        <i className="las la-play"></i>
                                    </a>
                                    <span>{videoText}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
