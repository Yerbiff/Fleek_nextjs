import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
  } from "@heroicons/react/24/solid";
  
  import benefitOneImg from "../../public/images/benefits_one.png";
  import benefitTwoImg from "../../public/images/featured-min.webp";
  
  const benefitOne = {
    title: "Wyróżnij się z Ideascape",
    desc: "Możesz wykorzystać to miejsce, aby podkreślić korzyści lub cechy swojej firmy, Ideascape. Może także zawierać obraz lub ilustrację, jak w przykładzie, wraz z kilkoma punktami wyliczeniowymi.",
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
    title: "Offer more benefits here",
    desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Mobile Responsive Template",
        desc: "Nextly is designed as a mobile first responsive template.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Powered by Next.js & TailwindCSS",
        desc: "This template is powered by latest technologies and tools.",
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: "Dark & Light Mode",
        desc: "Nextly comes with a zero-config light & dark mode. ",
        icon: <SunIcon />,
      },
    ],
  };
  
  
  export {benefitOne, benefitTwo};