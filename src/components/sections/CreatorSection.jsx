import { CheckCircle2 } from 'lucide-react';
import girlImage from '../../assets/growth-section/Image-girl.png';
import icon3d from '../../assets/growth-section/3d-icon.png';
import happyStudentsCard from '../../assets/growth-section/happy-students-card.png';

export default function CreatorSection() {
  return (
    <section className="py-12 relative overflow-hidden bg-white" id="creators">
      {/* Background Blobs - Left Blue and Bottom Left Lime */}
      <div className="absolute top-[10%] left-[-15%] w-[900px] h-[900px] bg-[#0445ff]/20 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute bottom-[-30%] left-[-10%] w-[800px] h-[800px] bg-[#cbfc01]/25 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-16 flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Image & Mockups */}
        <div className="lg:w-1/2 relative flex justify-center mt-16 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-xl flex justify-center scale-100 lg:scale-125 mt-10 lg:mt-16">
            
            {/* Total Revenue (z-10, behind girl) - Made Wider */}
            <div className="absolute top-16 left-0 sm:-left-6 lg:-left-12 bg-[#0445ff] rounded-xl p-4 text-white shadow-xl z-10 w-40 sm:w-48 lg:w-60 scale-[0.8] sm:scale-90 lg:scale-100 origin-left">
              <div className="text-xs text-blue-200 mb-1">Total Revenue</div>
              <div className="text-xs text-blue-300 mb-2">July 1-28</div>
              <div className="text-xl sm:text-2xl font-bold mb-3">$120.29</div>
              <div className="w-full h-1.5 bg-blue-800 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[40%]"></div>
              </div>
            </div>

            {/* Year to Date (z-10, behind girl) */}
            <div className="absolute top-44 sm:top-52 left-0 sm:-left-6 lg:-left-12 bg-[#0445ff] rounded-xl p-4 text-white shadow-xl z-10 w-36 sm:w-40 lg:w-48 scale-[0.8] sm:scale-90 lg:scale-100 origin-left">
              <div className="text-xs text-blue-200 mb-1">Year to Date</div>
              <div className="text-xs text-blue-300 mb-2">2023</div>
              <div className="text-xl sm:text-2xl font-bold mb-2">$1,200.38</div>
              <div className="inline-block bg-accent text-dark text-[10px] font-bold px-2 py-0.5 rounded-full">
                +12$
              </div>
            </div>

            {/* 3D Icon (z-15, near girl's shoulder) */}
            <img 
              src={icon3d} 
              alt="3D Icon" 
              className="absolute top-[20%] lg:top-[18%] -right-0 sm:-right-2 lg:-right-6 w-20 sm:w-28 lg:w-32 h-20 sm:h-28 lg:h-32 z-15 object-contain rotate-[-5deg]" 
            />

            {/* The Girl Image (z-20) */}
            <img src={girlImage} alt="Creator" className="w-full z-20 relative object-contain" />
            
            {/* Happy Students Card Image (z-30) */}
            <img 
              src={happyStudentsCard} 
              alt="Happy Students" 
              className="absolute bottom-6 sm:bottom-12 -right-2 sm:-right-4 lg:-right-10 w-44 sm:w-56 lg:w-64 z-30 drop-shadow-2xl scale-100 origin-bottom-right" 
            />

          </div>
        </div>

        {/* Right Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Create & Manage <br/> Courses Easily.
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            <strong className="text-gray-900">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>
          
          <ul className="space-y-4">
            {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-lg">
                <CheckCircle2 className="text-white w-6 h-6 fill-[#0445ff]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
