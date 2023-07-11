import Link from "next/link";

const Pakiety = ({ pakiety }) => {
  return (
    <div class="my-14  md:px-24">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
        
      {pakiety.map((pakiet, i) => (
          <div className="mb-6 lg:mb-0 text-left" key={`key-${i}`}>
            <div className={`block h-full rounded-lg ${pakiet.frontmatter.color} shadow-md light:bg-gray-800`}>
              <div className="border-b-2 border-gray-200 border-opacity-50 p-6 text-center light:border-opacity-50">
                <p className="mb-4 text-sm uppercase light:text-gray-200 light:text-gray-300">
                  <strong>{pakiet.frontmatter.title}</strong>
                </p>
                <h3 className="mb-6 text-3xl light:text-neutral-200">
                  <strong>{pakiet.frontmatter.price}</strong>
                  <small className="text-base light:text-neutral-500 light:text-neutral-400">/mies</small>
                </h3>
                <Link href={`/kontakt`} className="block hover:text-primary">
                  <button type="button" className="inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-ripple-init data-te-ripple-color="light">
                    Skontaktuj się
                  </button>
                </Link>
              </div>
              <div className="p-6 text-align-left">
                <ol className="list-inside">
                  {pakiet.frontmatter.cechy.map((cecha, index) => (
                    <li key={index} className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary light:text-primary-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {cecha}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Pakiety;