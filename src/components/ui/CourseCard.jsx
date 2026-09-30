import { Star, BarChart2 } from 'lucide-react';
import avatarsImg from '../../assets/avatars.png';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow p-3">
      {/* Thumbnail with inner padding & rounded corners */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[14px]">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        {/* Bottom pills overlay — span full width of card */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between gap-2">
          <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-satoshi font-medium text-[#333]">
            {course.lessons} Lessons
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-satoshi font-medium text-[#333]">
            {course.duration}
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-satoshi font-medium text-[#333]">
            {course.comments} Comments
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="px-3 pt-5 pb-3">
        {/* Title + Rating */}
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-poppins font-semibold text-[#1A1A1A] text-[17px] leading-[1.3] truncate mr-3">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 whitespace-nowrap flex-shrink-0">
            <span className="font-satoshi font-medium text-[14px] text-[#1A1A1A]">{course.rating}</span>
            <Star className="w-[15px] h-[15px] text-yellow-400 fill-yellow-400" />
          </div>
        </div>

        {/* Creator */}
        <p className="font-satoshi text-[13px] text-[#888] mb-5">
          by <a href="#" className="text-primary hover:underline">{course.creator}</a>
        </p>

        {/* Level Badge + Avatars */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-1.5 border border-[#E5E5E5] px-3 py-2 rounded-full">
            <BarChart2 className="w-[14px] h-[14px] text-[#555]" />
            <span className="font-satoshi font-medium text-[12px] text-[#333]">{course.level}</span>
          </div>
          <img
            src={avatarsImg}
            alt="Students"
            className="h-[30px] w-auto object-contain"
          />
        </div>

        {/* Price */}
        <div>
          <span className="font-poppins font-bold text-[24px] text-primary">${course.price}</span>
          <span className="font-satoshi font-normal text-[13px] text-[#999]">/lifetime</span>
        </div>
      </div>
    </div>
  );
}
