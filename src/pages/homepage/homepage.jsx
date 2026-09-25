import Contacto from "../../components/contato/contato";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import HeroSection from "../../components/hero-section/hero-section";
import Service from "../../components/our-service/service";
import Price from "../../components/price/price";

function Homepage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Service />
            <Price />
            <Contacto />
            <Footer />
        </div>
    )
}

export default Homepage