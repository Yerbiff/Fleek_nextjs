import React from "react";
import Container from "../container";

const Testimonials  = () => {
  return (
    <Container>
  <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-gray-800">
        <p className="text-2xl leading-normal">
        Wieloletnia współpraca z Ideascape to kluczowy czynnik naszego sukcesu. Ich umiejętność <Mark>zrozumienia naszej marki</Mark>, docelowych odbiorców i rynku była niezwykle cenna. </p>
    <Avatar
      name="Katarzyna Szymańska"
      title="Dyrektor Marketingu w Nexus Innovations"
    />
  </div>
</div>
<div className="">
  <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-gray-800">
    <p className="text-2xl leading-normal">
      Wybierając Ideascape jako naszą agencję marketingową, trafiliśmy na prawdziwych <Mark>profesjonalistów</Mark>. Ich kreatywne pomysły i skuteczne strategie przyczyniły się do znacznego wzrostu naszej widoczności i wyników sprzedażowych.
    </p>

    <Avatar
      name="Piotr Nowakowski"
      title="Prezes Zarządu w Nexus Innovations"
    />
  </div>
</div>
<div className="">
  <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-gray-800">
    <p className="text-2xl leading-normal">
      Ideascape to niezawodny partner w dziedzinie marketingu. Dzięki ich profesjonalizmowi, kreatywności i elastycznemu podejściu, nasza firma zyskała mocną pozycję na rynku i zdobyła <Mark>nowych lojalnych klientów</Mark>.
    </p>

    <Avatar
      name="Magdalena Kowalczyk"
      title="Właścicielka Firmy Apex Systems"
    />
  </div>
</div>
  </div>
</Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;