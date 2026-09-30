import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mx-auto mt-2 sm:mt-4 w-[280px] sm:w-[420px] md:w-[520px] lg:w-[600px] max-w-[95%]">
      {/* Search Input Pill */}
      <div className="flex-1 flex items-center bg-white rounded-full px-4 sm:px-6 shadow-[0px_8px_24px_rgba(0,0,0,0.1)] h-[44px] sm:h-[50px] md:h-[56px]">
        <Search className="text-[#9CA3AF] w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
        <input
          type="text"
          placeholder="Course, topic, creator"
          className="flex-1 outline-none text-[#4B5563] text-[13px] sm:text-[14px] md:text-base placeholder:text-[#9CA3AF] bg-transparent font-satoshi min-w-0"
        />
      </div>

      {/* Search Button Pill */}
      <button className="bg-accent text-[#0A0E1A] font-bold px-5 sm:px-7 md:px-10 rounded-full hover:bg-[#b5d900] transition-colors text-[13px] sm:text-[14px] md:text-[16px] h-[44px] sm:h-[50px] md:h-[56px] shadow-[0px_8px_24px_rgba(0,0,0,0.1)] flex-shrink-0 font-satoshi">
        Search
      </button>
    </div>
  );
}

