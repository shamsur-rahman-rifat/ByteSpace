import FloatingCard from '../ui/FloatingCard';
import { courses } from '../../data/courses';
import CourseCard from '../ui/CourseCard';
import boyImage from '../../assets/growth-section/Image-boy.png';
import icon3d from '../../assets/growth-section/3d-icon.png';

export default function GrowthSection() {
  const sampleCourse = courses[0];
  
  return (
    <section className="pt-24 pb-12 relative overflow-hidden bg-white">
      {/* Background Blobs - Top Left Lime */}
      <div className="absolute top-[-30%] left-[-20%] w-[1000px] h-[1000px] bg-[#cbfc01]/25 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Path to Professional <br/> Growth Starts Here!
          </h2>
          <p className="text-gray-600 mb-10 text-lg max-w-lg">
            Explore our curated selection of courses tailored to capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>
          
          <div className="flex items-center gap-12">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">12K</div>
              <div className="text-gray-500 text-sm">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">70+</div>
              <div className="text-gray-500 text-sm">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">16</div>
              <div className="text-gray-500 text-sm">Creators</div>
            </div>
          </div>
        </div>

        {/* Image Mockup */}
        <div className="lg:w-1/2 relative flex justify-center mt-12 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-xl flex justify-center scale-100 lg:scale-125 mt-10 lg:mt-16">
            
            {/* Embedded Course Card (z-10, behind boy) */}
            <div className="absolute top-10 -left-4 sm:-left-12 transform scale-[0.5] sm:scale-[0.6] lg:scale-[0.65] z-10 origin-top-left -rotate-2 shadow-2xl rounded-3xl bg-white">
              <CourseCard course={sampleCourse} />
            </div>

            {/* The Boy Image (z-20) */}
            <img src={boyImage} alt="Student" className="w-full z-20 relative object-contain" />

            {/* Overlapping Learning Progress (z-30) */}
            <FloatingCard className="-right-2 sm:-right-6 lg:-right-10 top-[40%] lg:top-[45%] shadow-2xl z-30 scale-[0.8] sm:scale-90 lg:scale-100 origin-right">
              <h3 className="text-xs font-medium text-gray-700">Learning Progress</h3>
              <div className="text-4xl font-bold text-gray-900 mt-1">55%</div>
              <div className="w-40 h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-accent w-[55%]"></div>
              </div>
            </FloatingCard>
            {/* 3D Icon (z-40) - Reversely placed near learning card */}
            <img src={icon3d} alt="3D Icon" className="absolute top-[20%] lg:top-[22%] -right-2 sm:-right-4 lg:-right-6 w-20 sm:w-28 lg:w-32 h-20 sm:h-28 lg:h-32 z-40 object-contain drop-shadow-xl -scale-x-100 rotate-12" />
            
          </div>
        </div>

      </div>
    </section>
  );
}
