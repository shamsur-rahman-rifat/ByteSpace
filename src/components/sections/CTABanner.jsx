import ctaIcons from '../../assets/3d-icons-cta.png';

export default function CTABanner() {
  return (
    <section className="w-full">
      <div className="bg-primary w-full py-32 md:py-40 px-6 md:px-16 text-center relative overflow-hidden bg-grid-pattern flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px]">
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
           <img src={ctaIcons} alt="3D Decorative Icons" className="w-full h-full object-cover" />
        </div>
        
        <h2 className="text-3xl md:text-[56px] font-bold text-white mb-6 relative z-10 leading-tight">
          Unlock Your Potential as a <br/> Creator with ByteSpace
        </h2>
        <p className="text-[#E0E0E0] text-lg max-w-5xl mb-10 relative z-10 font-medium">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <button className="bg-accent text-dark font-bold px-10 py-4 rounded-full hover:bg-[#b5d900] transition-colors relative z-10 text-lg">
          Join as Creator
        </button>
      </div>
    </section>
  );
}
