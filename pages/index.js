import Hero from "@layouts/partials/Landing-Page/Hero"
import Metrics from "@layouts/partials/Landing-Page/Metrics";
import Benefits from "@layouts/partials/Landing-Page/Benefits";
import { benefitOne, benefitTwo } from "../layouts/components/data";

const LandingPage = () => {

  return (
      <section class="text-black body-font lg:pt-20">
        <Hero />
        <Metrics/>
        {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}
      </section>
  );
}

export default LandingPage;
