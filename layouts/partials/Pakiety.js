// import Link from "next/link";

// const Pakiety = ({ pakiety }) => {
//   return (
//     <div class="my-14  md:px-24">
//       <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
        
//       {pakiety.map((pakiet, i) => (
//           <div className="mb-6 lg:mb-0 text-left" key={`key-${i}`}>
//             <div className={`block h-full rounded-lg ${pakiet.frontmatter.color} shadow-md light:bg-gray-800`}>
//               <div className="border-b-2 border-gray-200 border-opacity-50 p-6 text-center light:border-opacity-50">
//                 <p className="mb-4 text-sm uppercase light:text-gray-200 light:text-gray-300">
//                   <strong>{pakiet.frontmatter.title}</strong>
//                 </p>
//                 <h3 className="mb-6 text-3xl light:text-neutral-200">
//                   <strong>{pakiet.frontmatter.price}</strong>
//                   <small className="text-base light:text-neutral-500 light:text-neutral-400">/mies</small>
//                 </h3>
//                 <Link href={`/kontakt`} className="block hover:text-primary">
//                   <button type="button" className="inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-ripple-init data-te-ripple-color="light">
//                     Skontaktuj się
//                   </button>
//                 </Link>
//               </div>
//               <div className="p-6 text-align-left">
//                 <ol className="list-inside">
//                   {pakiet.frontmatter.cechy.map((cecha, index) => (
//                     <li key={index} className="mb-4 flex">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary light:text-primary-400">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                       </svg>
//                       {cecha}
//                     </li>
//                   ))}
//                 </ol>
//               </div>
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Pakiety;
import Link from "next/link";

const Pakiety = ({ pakiety }) => {
  return (
    <div class="relative w-full h-full">
      <div class="absolute hidden w-full lg:block h-96" />
      <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
             <span class="relative">Przystępne</span>
            </span>{' '}
            dla każdego
          </h2>
          <p class="text-base dark:text-gray-500 md:text-lg">
          Wybierz idealny plan cenowy dopasowany do Twoich potrzeb i budżetu.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
        {pakiety.map((pakiet, i) => (
        
          <div key={`key-${i}`} className="flex flex-col justify-between">
            <div class="p-8 dark:bg-gray-700 bg-gray-300 rounded h-full flex flex-col justify-between">
              <div class="mb-4 text-center">
                <h3 class="text-xl font-medium tracking-wide ">
                {pakiet.frontmatter.title}
                </h3>
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-5xl  font-semibold lg:text-6xl">
                  {pakiet.frontmatter.price}
                  </p>
                  <p class="text-lg dark:text-gray-300 light:text-gray-200">/ mies</p>
                </div>
              </div>
              <ul class="mb-8 space-y-2">
                {pakiet.frontmatter.cechy.map((cecha, index) => (
                     <li class="flex items-center text-left">
                     <div class="mr-3">
                       <svg
                         class="w-4 h-4 text-teal-accent-400"
                         viewBox="0 0 24 24"
                         strokeLinecap="round"
                         strokeWidth="2"
                       >
                         <polyline
                           fill="none"
                           stroke="currentColor"
                           points="6,12 10,16 18,8"
                         />
                         <circle
                           cx="12"
                           cy="12"
                           fill="none"
                           r="11"
                           stroke="currentColor"
                         />
                       </svg>
                     </div>
                      {cecha}
                    </li>
                  ))}
                
              </ul>
              <Link 
              href={'/kontakt'}
                class={`w-full h-12 px-6 font-medium pt-3 tracking-wide text-white transition duration-200 rounded shadow-md ${pakiet.frontmatter.color} hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}
        >
                Skontaktuj się
              </Link>
            </div>
            <div class="w-11/12 h-2 mx-auto dark:bg-gray-700  bg-gray-300 light:bg-gray-700 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto dark:bg-gray-700  bg-gray-300 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto dark:bg-gray-700  bg-gray-300 rounded-b opacity-25" />
          </div>
      
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pakiety;
