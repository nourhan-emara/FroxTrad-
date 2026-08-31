// Sections Import
import Footer from "../components/Footer"
import CtaSection from "../sections/CtaSection"
import FeaturesSection from "../sections/featuresSection"
import HeroSection from "../sections/HeroSection"
import LogoCarousal from "../sections/LogoCarousal"
import PricingSection from "../sections/PricingSection"
import TestimonialsSection from "../sections/TestimonialsSection"


function HomePage() {
    return (
        <div className='bg-black mx-auto'>

            {/* Hero Section */}
            <HeroSection />

            {/* Logo Carousal Section */}
            <LogoCarousal />

            {/* Features Section */}
            <FeaturesSection />

            {/* Pricing Section */}
            <PricingSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Cta Section */}
            <CtaSection />

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default HomePage