import { courses } from '../../data/courses';
import TabPill from '../ui/TabPill';
import CourseCard from '../ui/CourseCard';

const tabs1 = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"];
const tabs2 = ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"];
const tabs3 = ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"];

export default function CoursesSection() {
  return (
    <section className="py-16 md:py-20 bg-white" id="courses">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* Header — Heading M: Poppins SemiBold 44px */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-poppins font-semibold text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-[#1A1A1A] mb-4">
            Discover Your Passion, <br/> Build Your Skills
          </h2>
          {/* Body S — Satoshi Regular 14px */}
          <p className="font-satoshi font-normal text-[13px] sm:text-[14px] leading-[1.6] text-[#666] max-w-[640px] mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col items-center gap-3 mb-14 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex flex-nowrap gap-3">
            {tabs1.map(tab => <TabPill key={tab} label={tab} active={tab === "Featured"} />)}
          </div>
          <div className="flex flex-nowrap gap-3">
            {tabs2.map(tab => <TabPill key={tab} label={tab} />)}
          </div>
          <div className="flex flex-nowrap gap-3">
            {tabs3.map(tab => (
              <TabPill 
                key={tab} 
                label={tab} 
                active={false} 
              />
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
}
