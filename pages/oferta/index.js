import Link from "next/link";
import Image from "next/image";
import ofertaImg from "../../public/images/oferta-min.webp"
import ofertaTopImg from "../../public/images/ofertaTop-min.webp"
// import icon from "../../public/images/icon-min.webp"

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
    <section className="text-gray-400 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center xl:w-2/2 text-gray-200">
            Indywidualne podejście do klientów
          </h1>
          <p className="mb-8 xl:w-3/4 text-gray-400 text-lg">
            Wiemy, że każdy klient jest inny i ma swoje unikalne potrzeby.
            Dlatego oferujemy indywidualne podejście do każdego z naszych
            klientów. Nasze rozwiązania są dostosowane do Twoich wymagań,
            zapewniając skuteczne rezultaty. Sprawdź nasz{" "}
            <Link href="/cennik" className="underline">
              Cennik
            </Link>{" "}
            , aby dowiedzieć się więcej o naszych usługach i cenach.
          </p>
          <div className="flex justify-center"></div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <Image
            className="w-80 md:ml-1 ml-24  rounded-lg"
            alt="New ideas"
            src={ofertaTopImg}
          />
        </div>
      </div>
      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
      Zaufaj naszej agencji social mediowej
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
      Jesteśmy gotowi dostarczyć kompleksowe rozwiązania, dopasowane do Twoich potrzeb.
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          {/* <Image className="w-10" src={icon}/> */}
          <h3 class="pt-3 font-semibold text-lg text-white">
          Profesjonalne podejście
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Nasza zgrana drużyna ekspertów doskonale rozumie dynamikę mediów
            społecznościowych i pomoże Ci skutecznie dotrzeć do swojej grupy
            docelowej.
          </p>
        </div>
        <div class="ktq4">
          {/* <Image className="w-10" src={icon}/> */}
          <h3 class="pt-3 font-semibold text-lg text-white">
          Pełen zakres usług
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Oferujemy pełen zakres usług, w tym zarządzanie profilami
            społecznościowymi, tworzenie atrakcyjnych treści, kampanie reklamowe
            oraz monitorowanie i analizę wyników.
          </p>
        </div>
        <div class="ktq4">
          {/* <Image className="w-10" src={icon}/> */}
          <h3 class="pt-3 font-semibold text-lg text-white">
          Skuteczne działania
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Nasze działania opierają się na badaniach rynku i analizie
            konkurencji. Dążymy do osiągnięcia mierzalnych wyników, które
            przekładają się na wzrost Twojej obecności w mediach
            społecznościowych.
          </p>
        </div>
        <div class="ktq4">
          {/* <Image className="w-10" src={icon}/> */}
          <h3 class="pt-3 font-semibold text-lg text-white">
          Zwiększona widoczność
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Zaufaj nam, aby pomóc Ci osiągnąć sukces w mediach
            społecznościowych. Jesteśmy tu, aby wesprzeć Cię w realizacji Twoich
            celów i zwiększyć widoczność Twojej marki.
          </p>
        </div>
      </div>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-200">
          Skuteczne strategie, lepsze wyniki
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-400 text-center">
          Pozwól nam pomóc ci osiągnąć sukces w mediach społecznościowych
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <Image
            className=" object-center mb-10 rounded-lg"
            alt="Do something great"
            src={ofertaImg}
          />
        </div>
      </div>
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
    </section>
  );
};

export default Oferta;
