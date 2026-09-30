export default function CategoryCard({ label, iconUrl }) {
  return (
    <div className="flex flex-col items-center gap-5 p-7 bg-white rounded-3xl border border-gray-200 hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1">
      <img src={iconUrl} alt={label} className="w-[72px] h-[72px] object-contain" />
      <span className="font-medium text-dark text-base whitespace-nowrap">{label}</span>
    </div>
  );
}
