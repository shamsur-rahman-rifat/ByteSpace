export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col">
      <img 
        src={testimonial.avatar} 
        alt={testimonial.name} 
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
      <p className="text-blue-600 text-sm mb-6">{testimonial.role}</p>
      <p className="text-gray-500 leading-relaxed text-sm flex-1">
        {testimonial.quote}
      </p>
    </div>
  );
}
