import Image from "next/image";
import featuredImg from "../../../public/images/featured-min.webp"

const Featured = () => {
  return (
    <div className="text-gray-600 body-font container px-5 py-24 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <Image
          alt="feature"
          className="object-cover object-center h-full w-full"
          src={featuredImg}
        />
      </div>
      <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="flex-grow">
            <h2 className="text-white text-2xl title-font font-medium mb-3">
              Ekspert w mediach społecznościowych
            </h2>
            <p className="leading-relaxed text-lg">
              Nasza agencja specjalizuje się w tworzeniu efektywnych strategii i kampanii w mediach społecznościowych.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="flex-grow">
            <h2 className="text-white text-2xl title-font font-medium mb-3">
              Dostosowane rozwiązania
            </h2>
            <p className="leading-relaxed text-lg">
              Tworzymy spersonalizowane strategie i treści, dopasowane do unikalnych potrzeb i celów Twojej marki.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="flex-grow">
            <h2 className="text-white text-2xl title-font font-medium mb-3">
              Zasięg i zaangażowanie
            </h2>
            <p className="leading-relaxed text-lg">
              Pomagamy zwiększyć zasięg Twojej marki, zyskać większe zaangażowanie użytkowników i budować lojalność klientów.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="flex-grow">
            <h2 className="text-white text-2xl title-font font-medium mb-3">
              Trendy i innowacje
            </h2>
            <p className="leading-relaxed text-lg">
              Śledzimy najnowsze trendy i innowacje w mediach społecznościowych, aby Twoja marka była zawsze na czele.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="flex-grow">
            <h2 className="text-white text-2xl title-font font-medium mb-3">
              Analityka i optymalizacja
            </h2>
            <p className="leading-relaxed text-lg">
              Monitorujemy i analizujemy wyniki, aby optymalizować nasze strategie i osiągać lepsze rezultaty dla Twojej marki.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
