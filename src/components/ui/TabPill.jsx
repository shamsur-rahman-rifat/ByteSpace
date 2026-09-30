export default function TabPill({ label, active }) {
  return (
    <button 
      className={`px-5 py-2 rounded-full text-[13px] font-satoshi font-medium whitespace-nowrap transition-colors ${
        active 
          ? 'bg-accent text-[#1A1A1A]' 
          : 'bg-[#F5F5F5] text-[#555] hover:bg-[#EBEBEB]'
      }`}
    >
      {label}
    </button>
  );
}
