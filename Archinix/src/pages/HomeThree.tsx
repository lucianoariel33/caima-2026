import HeroThree from "@components/Hero/HeroThree";
import FeatureThree from "@components/Feature/FeatureThree";
import AboutThree from "@components/About/AboutThree";
import CounterSection from "@components/Counter/Counter";
import ProjectThree from "@components/Project/ProjectThree/ProjectThree";
import ProcessThree from "@components/Process/ProcessThree";
import AwardSection from "@components/Feature/AwardSection";
import PricingSection from "@components/Pricing/PricingSection";
import Cta from "@components/CTA/Cta";
import Blog from "@components/HomeBlog/Blog";

export default function HomeThree() {
    return (
        <>
            <HeroThree />
            <FeatureThree />
            <AboutThree />
            <CounterSection />
            <ProjectThree />
            <ProcessThree />
            <AwardSection />
            <PricingSection />
            <Cta />
            <Blog />
        </>
    );
}
