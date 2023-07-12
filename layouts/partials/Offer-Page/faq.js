import React from "react";
import Container from "../container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-gray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                    {index === 3 && <Link href="/cennik" className="underline">Cennik</Link>}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
    {
    question: "Jakie usługi oferuje agencja marketingowa Ideascape?",
    answer: "Agencja marketingowa Ideascape oferuje szeroki zakres usług, w tym strategię marketingową, kreację reklam, zarządzanie kampaniami reklamowymi, optymalizację strony internetowej, zarządzanie mediami społecznościowymi i wiele więcej.",
    },
    {
    question: "Czy agencja Ideascape ma doświadczenie w pracy z różnymi branżami?",
    answer: "Tak, agencja Ideascape ma doświadczenie w pracy z różnymi branżami, w tym e-commerce, usługami B2B, usługami finansowymi, edukacją, zdrowiem i wieloma innymi. Dopasowujemy nasze strategie do specyfiki każdej branży i dostosowujemy się do potrzeb klienta.",
    },
    {
    question: "Jakie są korzyści z zatrudnienia agencji marketingowej?",
    answer: "Zatrudnienie agencji marketingowej, takiej jak Ideascape, pozwala skorzystać z wiedzy i doświadczenia ekspertów w dziedzinie marketingu. Otrzymujesz dostęp do nowoczesnych narzędzi, kreatywnych pomysłów i profesjonalnej strategii, co przekłada się na skuteczne kampanie marketingowe i zwiększoną widoczność Twojej marki.",
    },
    {
    question: "Jakie są koszty usług agencji marketingowej Ideascape?",
    answer: "Koszty usług agencji marketingowej Ideascape zależą od zakresu prac i indywidualnych potrzeb klienta. Nasze ceny są konkurencyjne i dostosowane do wartości, jaką dostarczamy. Zapewniamy transparentność kosztów i szczegółową wycenę przed rozpoczęciem projektu. Sprawdź ",
    },
];

export default Faq;