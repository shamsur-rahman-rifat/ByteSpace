import { categories } from '../../data/categories';
import CategoryCard from '../ui/CategoryCard';

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-16 text-center max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-dark mb-6 tracking-tight">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="text-[#8c8c8c] mb-16 text-base md:text-[17px] leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map(cat => (
            <CategoryCard key={cat.id} label={cat.label} iconUrl={cat.iconUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}
