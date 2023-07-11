import Link from "next/link";

import Testimonials from "@layouts/partials/Offer-Page/testimonials";
import Faq from "@layouts/partials/Offer-Page/faq";
import SectionTitle from "@layouts/partials/sectionTitle";
import Benefits from "@layouts/partials/Landing-Page/Benefits";
import { benefitOne, benefitTwo } from "../../layouts/components/data";

const Oferta = () => {
  const cities = [
    { name: 'Wrocław', nameSite: 'Wrocławiu', slug: 'agencja-social-media-wroclaw' },
    { name: 'Bydgoszcz', nameSite: 'Bydgoszczy', slug: 'agencja-social-media-bydgoszcz' },
    { name: 'Lublin', nameSite: 'Lublinie', slug: 'agencja-social-media-lublin' },
    { name: 'Zielona Góra', nameSite: 'Zielonej Górze', slug: 'agencja-social-media-zielona-gora' },
    { name: 'Łódź', nameSite: 'Łodzi', slug: 'agencja-social-media-lodz' },
    { name: 'Kraków', nameSite: 'Krakowie', slug: 'agencja-social-media-krakow' },
    { name: 'Warszawa', nameSite: 'Warszawie', slug: 'agencja-social-media-warszawa' },
    { name: 'Opole', nameSite: 'Opolu', slug: 'agencja-social-media-opole' },
    { name: 'Rzeszów', nameSite: 'Rzeszowie', slug: 'agencja-social-media-rzeszow' },
    { name: 'Białystok', nameSite: 'Białystoku', slug: 'agencja-social-media-bialystok' },
    { name: 'Gdańsk', nameSite: 'Gdańsku', slug: 'agencja-social-media-gdansk' },
    { name: 'Katowice', nameSite: 'Katowicach', slug: 'agencja-social-media-katowice' },
    { name: 'Kielce', nameSite: 'Kielcach', slug: 'agencja-social-media-kielce' },
    { name: 'Olsztyn', nameSite: 'Olsztynie', slug: 'agencja-social-media-olsztyn' },
    { name: 'Poznań', nameSite: 'Poznaniu', slug: 'agencja-social-media-poznan' },
    { name: 'Szczecin', nameSite: 'Szczecinie', slug: 'agencja-social-media-szczecin' },
  ];
  return (
    <div>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials/>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate a
      </SectionTitle>
      <Faq/>
      <section className="relative">
          <div className="container">
            <h3 className="mb-4">Działamy w</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-5">
              {cities.map((city, index) => (
                <div key={index}>
                  <h3 className="h7 ">
                    <Link
                      className="block hover:text-primary"
                      href={` oferta/${city.slug}`}
                    >
                      {city.name}
                    </Link>
                  </h3>
                </div>
              ))}
            </div>
          </div>
      </section>
      </div>
  );
};

export default Oferta;
