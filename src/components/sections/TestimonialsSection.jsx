import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../ui/TestimonialCard';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#F0F5FF] via-[#F4FBDB] to-[#E5F9A6]">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight lg:w-1/2">
            Discover What Our <br/> Community Is Saying
          </h2>
          <p className="text-gray-600 lg:w-1/2 text-lg">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
