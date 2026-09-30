export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          
          {/* Left: Logo & Newsletter */}
          <div className="lg:w-1/2 pr-0 lg:pr-12">
            <div className="flex items-center gap-2 mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C12 4 12 16 12 24C12 28.4183 15.5817 32 20 32C24.4183 32 28 28.4183 28 24C28 19.5817 24.4183 16 20 16C17.7909 16 15.7909 16.8954 14.3431 18.3431L12 4Z" fill="#C8F000"/>
                <path d="M12 4L4 12V28L12 20V4Z" fill="#C8F000"/>
              </svg>
              <span className="text-2xl font-bold tracking-tight text-gray-900">ByteSpace</span>
            </div>
            
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8 pr-4">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            
            <form className="flex items-center gap-4 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white border border-gray-200 rounded-full px-6 py-3 text-[15px] text-gray-700 outline-none focus:border-gray-400 placeholder:text-gray-400"
              />
              <button 
                type="button" 
                className="bg-accent text-dark font-medium text-[15px] px-8 py-3 rounded-full hover:bg-[#b5d900] transition-colors whitespace-nowrap"
              >
                Search
              </button>
            </form>
            
            <p className="text-[12px] text-gray-500 leading-relaxed pr-8">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right: Links */}
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 w-full pt-4 lg:pt-0">
            <div className="space-y-6">
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Featured Courses</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Featured Categories</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Business</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">IT</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Design</a>
            </div>
            <div className="space-y-6">
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Development</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Marketing</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Photography</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Finance</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Sport</a>
            </div>
            <div className="space-y-6">
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Become a Creator</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Affiliate Program</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Contact</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">Help</a>
              <a href="#" className="block text-[15px] text-gray-600 hover:text-gray-900">About</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500">
          <div>© 2023 ByteSpace. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
