import Link from "next/link";
import heroImg from "../../../public/images/hero.webp"
import Image from "next/image";
import Container from "../container";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            IdeaScape - Wizje stają się rzeczywistością
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Ideascape to agencja marketingu i mediów społecznościowych, która pomaga firmom rozwijać swoją obecność online i skutecznie dotrzeć do swojej grupy docelowej. Dzięki zespołowi ekspertów w strategiach marketingu cyfrowego, budowaniu marki i zarządzaniu mediami społecznościowymi, oferujemy spersonalizowane rozwiązania zarówno dla startupów, jak i dla ugruntowanych firm.
          </p>


            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/oferta"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Zobacz więcej
              </Link>
              
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="480"
              height="476"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Zaufało nam <span className="text-indigo-600">1000+</span>{" "}
            na całym świecie
          </div>

          
        </div>
      </Container>
    </>
  );
}

export default Hero;