import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";

import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Pricing"
          description="Get Started With Free 2 Months Trial Available Now!"
        >
          <Pricing />
        </Section>
        <FAQ />

        <Section
          id="testimonials"
          title="Join the Future of Automated Refunds"
          description="Partner with us to automate refunds, streamline workflows, and enhance operational efficiency."
        >
          <Testimonials />
        </Section>
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
