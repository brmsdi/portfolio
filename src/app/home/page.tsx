import InitialSection from "@/app/components/Initial/initial-section";
import AboutMe from "@/app/components/about/about-me";
import ProjectSection from "@/app/components/projectsSection/project-section";
import TechnologiesSection from "@/app/components/technologiesSection/technologies-section";
import ContactSection from "@/app/components/contactSection/contact-section";
import FooterSection from "@/app/components/footerSection/footer-section";

export default function HomePage() {
    return (
        <>
        <InitialSection />
        <AboutMe />
        <ProjectSection />
        <TechnologiesSection />
        <ContactSection />
        <FooterSection />
        </>
    )
}