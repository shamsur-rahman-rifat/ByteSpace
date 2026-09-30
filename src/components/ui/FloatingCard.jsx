export default function FloatingCard({ children, className }) {
  return (
    <div className={`bg-white rounded-2xl shadow-xl p-4 absolute z-20 ${className}`}>
      {children}
    </div>
  );
}
