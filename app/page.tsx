import CallToAction from "@/components/landing/call-to-action";
import About from "@/components/landing/about";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import LogoTicket from "@/components/landing/logo-ticket";
import ProductShowcase from "@/components/landing/product-showcase";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicket />
      <ProductShowcase />
      <About />
      <CallToAction />
      <Footer />
    </>
  );
}
