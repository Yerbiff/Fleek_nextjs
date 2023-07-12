import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
  } from "@heroicons/react/24/solid";
  
  import benefitOneImg from "../../public/images/benefits_one.png";
  import benefitTwoImg from "../../public/images/benefits_two.png";
  
  const benefitOne = {
    title: "Wyróżnij się z Ideascape",
    desc: "Nasza filozofia opiera się na innowacji, jakości i doskonałej obsłudze klienta. Przywiązujemy ogromną wagę do zrozumienia branży naszych klientów, ich konkurencji i docelowych grup odbiorców. Dzięki temu możemy opracować strategie, które skutecznie przyciągają uwagę, budują zaufanie i generują zwiększone wyniki biznesowe.",
    image: benefitOneImg,
    bullets: [
        {
          title: "Osiągnij lepsze rezultaty marketingowe",
          desc: "Nasza agencja marketingowa pomoże Ci zrozumieć potrzeby Twoich klientów i skutecznie dotrzeć do nich.",
          icon: <FaceSmileIcon />,
        },
        {
          title: "Zwiększ swoją widoczność online",
          desc: "Dzięki naszym strategiom i zarządzaniu mediów społecznościowych poprawisz pozyskiwanie klientów.",
          icon: <ChartBarSquareIcon />,
        },
        {
          title: "Zachowaj lojalność klientów",
          desc: "Wspomożemy Ci w utrzymaniu długotrwałych relacji z klientami i zwiększeniu retencji.",
          icon: <CursorArrowRaysIcon />,
        },
    ],
  };
  
  const benefitTwo = {
    title: "Osiągnij sukces w mediach społecznościowych",
    desc: "Dzięki możesz osiągnąć sukces i zwiększyć swoją obecność w mediach społecznościowych.",
    image: benefitTwoImg,
    bullets: [
        {
        title: "Strategia social media",
        desc: "Ideascape pomoże Ci opracować efektywną strategię social media, dostosowaną do Twojej marki i celów biznesowych.",
        icon: <DevicePhoneMobileIcon />,
        },
        {
        title: "Kreatywne treści",
        desc: "Nasi eksperci tworzą oryginalne i atrakcyjne treści, które przyciągają uwagę Twojej docelowej grupy odbiorców.",
        icon: <AdjustmentsHorizontalIcon />,
        },
        {
        title: "Analiza i raportowanie",
        desc: "Dostarczamy regularne raporty i analizy, abyś mógł śledzić skuteczność swoich działań w mediach społecznościowych.",
        icon: <SunIcon />,
        },
    ],
  };
  
  
  export {benefitOne, benefitTwo};