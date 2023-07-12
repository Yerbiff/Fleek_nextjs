import Link from "next/link";

import Testimonials from "@layouts/partials/Offer-Page/testimonials";
import Faq from "@layouts/partials/Offer-Page/faq";
import SectionTitle from "@layouts/partials/sectionTitle";
import Benefits from "@layouts/partials/Offer-Page/Benefits";
import { benefitOne, benefitTwo } from "../../layouts/components/data";

const Oferta = () => {
  const cities = [
    { name: 'Wrocław', nameSite: 'w  Wrocławiu', slug: 'agencja-marketingowa-wroclaw' },
    { name: 'Bydgoszcz', nameSite: 'w  Bydgoszczy', slug: 'agencja-marketingowa-bydgoszcz' },
    { name: 'Lublin', nameSite: 'w  Lublinie', slug: 'agencja-marketingowa-lublin' },
    { name: 'Zielona Góra', nameSite: 'w  Zielonej Górze', slug: 'agencja-marketingowa-zielona-gora' },
    { name: 'Łódź', nameSite: 'w  Łodzi', slug: 'agencja-marketingowa-lodz' },
    { name: 'Kraków', nameSite: 'w  Krakowie', slug: 'agencja-marketingowa-krakow' },
    { name: 'Warszawa', nameSite: 'w  Warszawie', slug: 'agencja-marketingowa-warszawa' },
    { name: 'Opole', nameSite: 'w  Opolu', slug: 'agencja-marketingowa-opole' },
    { name: 'Rzeszów', nameSite: 'w  Rzeszowie', slug: 'agencja-marketingowa-rzeszow' },
    { name: 'Białystok', nameSite: 'w  Białystoku', slug: 'agencja-marketingowa-bialystok' },
    { name: 'Gdańsk', nameSite: 'w  Gdańsku', slug: 'agencja-marketingowa-gdansk' },
    { name: 'Katowice', nameSite: 'w  Katowicach', slug: 'agencja-marketingowa-katowice' },
    { name: 'Kielce', nameSite: 'w  Kielcach', slug: 'agencja-marketingowa-kielce' },
    { name: 'Olsztyn', nameSite: 'w  Olsztynie', slug: 'agencja-marketingowa-olsztyn' },
    { name: 'Poznań', nameSite: 'w  Poznaniu', slug: 'agencja-marketingowa-poznan' },
    { name: 'Szczecin', nameSite: 'w  Szczecinie', slug: 'agencja-marketingowa-szczecin' },
  ];
  return (
    <div>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Referencje"
        title="Oto, co mówią nasi klienci">
        </SectionTitle>
      <Testimonials/>
      <SectionTitle pretitle="FAQ" title="Najczęściej zadawane pytania">
     
      </SectionTitle>
      <Faq/>
      <h3 className="mb-4 text-center">Obszar naszych działań</h3>
      <section className="relative">
          <div className="container border-t border-gray-100 dark:border-gray-700">
            {/* <h3 className="mb-4">Obszar naszych działań</h3> */}
            <div className="grid grid-cols-2 md:grid-cols-4 mt-5 lg:grid-cols-8 gap-2">
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
