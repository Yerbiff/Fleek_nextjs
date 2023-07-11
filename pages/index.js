import Hero from "@layouts/partials/Landing-Page/Hero"
import Metrics from "@layouts/partials/Landing-Page/Metrics";
import Featured from "@layouts/partials/Landing-Page/Featured";

const LandingPage = () => {

  return (
      <section class="text-black body-font lg:pt-20">
        <Hero />
        <Metrics/>
        <Featured/>
      </section>
  );
}

export default LandingPage;
