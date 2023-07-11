import Link from "next/link";
import heroImg from "../../../public/images/hero-min.webp"
import Image from "next/image";

const Hero = () => {
    return (
      <div>
        <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
          <div className="flex flex-col w-full mb-2 text-left md:text-center ">
            <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
                <span>Tworzymy sztuke</span>
                <br className="hidden lg:block" />
                 w social mediach
            </h1>
            <br />
            <p className="mx-auto text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
                ArtEffect to agencja specjalizująca się w tworzeniu unikalnych i atrakcyjnych treści dla mediów społecznościowych. Dowiedz się wiecej o naszej{" "}
                <Link href="/oferta" className="underline">
                    Ofercie
                </Link>{" "}
                i rozpocznij współprace już dziś
            </p>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
          <Image
            className="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
            alt="hero"
            src={heroImg}
          />
        </div>
      </div>
    );
  };
  
  export default Hero;
  