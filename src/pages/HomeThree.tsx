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
import SectionMarker from "@components/SectionMarker/SectionMarker";

export default function HomeThree() {
    return (
        <>
            <SectionMarker code="22" name="Home 3 - Hero principal">
                <HeroThree />
            </SectionMarker>
            <SectionMarker code="23" name="Home 3 - Features">
                <FeatureThree />
            </SectionMarker>
            <SectionMarker code="24" name="Home 3 - About">
                <AboutThree />
            </SectionMarker>
            <SectionMarker code="25" name="Home 3 - Contadores">
                <CounterSection />
            </SectionMarker>
            <SectionMarker code="26" name="Home 3 - Proyectos">
                <ProjectThree />
            </SectionMarker>
            <SectionMarker code="27" name="Home 3 - Proceso">
                <ProcessThree />
            </SectionMarker>
            <SectionMarker code="28" name="Home 3 - Awards">
                <AwardSection />
            </SectionMarker>
            <SectionMarker code="29" name="Home 3 - Precios">
                <PricingSection />
            </SectionMarker>
            <SectionMarker code="30" name="Home 3 - CTA">
                <Cta />
            </SectionMarker>
            <SectionMarker code="31" name="Home 3 - Blog">
                <Blog />
            </SectionMarker>
        </>
    );
}
