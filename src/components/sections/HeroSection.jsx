import SearchBar from "../ui/SearchBar";

// Import images from assets/hero
import ornaments from "../../assets/hero/3d ornament.png";
import uiUxCard from "../../assets/hero/Auto Layout Vertical-1.png";
import happyStudentsCard from "../../assets/hero/Auto Layout Vertical-2.png";
import progressCard from "../../assets/hero/Auto Layout Vertical.png";
import greenCircle from "../../assets/hero/Ellipse 7.png";
import bgGrid from "../../assets/hero/Group 4.png";
import studentImage from "../../assets/hero/Image.png";

export default function HeroSection() {
  return (
    <section 
      id="home"
      className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[820px] lg:min-h-[920px] bg-primary pt-24 sm:pt-28 md:pt-36 lg:pt-44 pb-0 overflow-hidden flex flex-col justify-start items-center"
    >
      {/* Background Grid */}
      <img
        src={bgGrid}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0"
      />

      {/* 3D Ornaments — only shown on large screens (lg+) to avoid clashing with smaller layouts */}
      <img
        src={ornaments}
        alt=""
        className="hidden lg:block absolute top-[80px] left-0 w-full h-auto object-contain pointer-events-none z-30"
      />

      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center relative z-20 text-center flex-1 w-full max-w-[1200px]">
        {/* Text Content */}
        <div className="w-full flex flex-col items-center mt-2 mb-6 sm:mb-8 md:mb-10">
          {/* Heading L — Poppins SemiBold, 72px desktop → scales down */}
          <h1 className="font-poppins font-semibold text-[32px] sm:text-[44px] md:text-[58px] lg:text-[72px] leading-[1.2] text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-sm">
            Get Access to Hundreds <br className="hidden sm:block" /> Courses Available
          </h1>
          {/* Body L — Satoshi Regular, 18px desktop */}
          <p className="font-satoshi font-normal text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] text-white/80 max-w-[280px] sm:max-w-[480px] md:max-w-[620px] lg:max-w-[900px] mb-6 sm:mb-8 md:mb-12">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <SearchBar />
        </div>

        {/* Hero Image & Cards Composition */}
        <div className="relative w-full max-w-[1440px] h-[320px] sm:h-[420px] md:h-[550px] lg:h-[720px] flex justify-center items-end flex-1 mx-auto">
          {/* Green Circle Background */}
          <img
            src={greenCircle}
            alt=""
            className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] sm:bottom-[-50px] md:bottom-[-80px] lg:bottom-[-120px] w-[380px] sm:w-[560px] md:w-[900px] lg:w-[1530px] max-w-none -z-10"
          />

          {/* Student Image */}
          <img
            src={studentImage}
            alt="Student with laptop"
            className="w-[220px] sm:w-[320px] md:w-[480px] lg:w-[750px] object-contain object-bottom relative z-10 drop-shadow-2xl"
          />

          {/* Floating Card 1: Happy Students (Left, mid-height) */}
          <img
            src={happyStudentsCard}
            alt="Happy Students"
            className="absolute top-[30%] sm:top-[32%] md:top-[30%] left-[0%] sm:left-[2%] md:left-[5%] lg:left-[8%] w-[90px] sm:w-[130px] md:w-[190px] lg:w-[270px] shadow-[0px_10px_30px_rgba(0,0,0,0.15)] rounded-xl lg:rounded-2xl z-20"
          />

          {/* Floating Card 2: Learning Progress (Right, slightly higher) */}
          <img
            src={progressCard}
            alt="Learning Progress 55%"
            className="absolute top-[22%] sm:top-[22%] md:top-[24%] right-[0%] sm:right-[2%] md:right-[4%] lg:right-[8%] w-[95px] sm:w-[135px] md:w-[200px] lg:w-[285px] shadow-[0px_10px_30px_rgba(0,0,0,0.15)] rounded-xl lg:rounded-2xl z-20"
          />

          {/* Floating Card 3: UI/UX Design (Bottom-left, near elbow) */}
          <img
            src={uiUxCard}
            alt="UI/UX Design"
            className="absolute bottom-[10px] sm:bottom-[14px] md:bottom-[30px] lg:bottom-[50px] left-[2%] sm:left-[4%] md:left-[6%] lg:left-[10%] w-[100px] sm:w-[145px] md:w-[210px] lg:w-[290px] shadow-[0px_10px_30px_rgba(0,0,0,0.15)] rounded-xl lg:rounded-2xl z-30"
          />
        </div>
      </div>
    </section>
  );
}
