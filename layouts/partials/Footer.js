import Social from "@components/Social";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";

const Footer = () => {
  return (
    <footer className="text-white body-font flex-shrink-0 flex-basis-auto">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
       <Logo/>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Social source={social} className="social-icons mb-8" />
        </span>
      </div>
    </footer>
    
  );
};

export default Footer;
