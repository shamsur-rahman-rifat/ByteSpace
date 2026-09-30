import logo1 from "../../assets/client-logo/Frame.png";
import logo2 from "../../assets/client-logo/Frame-1.png";
import logo3 from "../../assets/client-logo/Frame-2.png";
import logo4 from "../../assets/client-logo/Frame-3.png";
import logo5 from "../../assets/client-logo/Frame-4.png";

const logos = [
  { src: logo1, alt: "Client Logo 1" },
  { src: logo2, alt: "Client Logo 2" },
  { src: logo3, alt: "Client Logo 3" },
  { src: logo4, alt: "Client Logo 4" },
  { src: logo5, alt: "Client Logo 5" },
];

export default function LogoStrip() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-14 lg:gap-20">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-[24px] sm:h-[28px] md:h-[32px] lg:h-[36px] w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
