import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/hero/logo.png';
import graphicsImg from '../assets/3d-icons-login-register.png';

function Register() {
  return (
    <div className="min-h-screen bg-primary font-satoshi relative">
      {/* Background grid pattern covering the entire page */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      
      {/* 12-Column Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
        
        {/* Left side (Col 2 to 6) */}
        <div className="md:col-start-2 md:col-span-5 flex flex-col justify-center relative px-6 md:px-0 pt-24 pb-12 md:py-0">
          <Link to="/" className="absolute top-8 left-6 md:top-12 md:left-0 flex items-center gap-2 sm:gap-3 cursor-pointer z-20">
            <img
              src={logoImg}
              alt="Logo"
              className="w-[32px] h-[36px] sm:w-[36px] sm:h-[40px] md:w-[40px] md:h-[45px] object-contain"
            />
          </Link>
          
          <div className="z-10 text-white relative w-full max-w-[480px] mx-auto md:mx-0">
            <h1 className="text-3xl md:text-[40px] font-bold leading-tight mb-4 text-center md:text-left">Sign up and come in</h1>
            <p className="text-base md:text-lg opacity-90 mb-10 leading-relaxed text-center md:text-left">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
            </p>
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-full mx-auto md:mx-0">
              <img src={graphicsImg} alt="Graphic" className="w-full h-auto object-contain md:scale-[1.05] transform origin-top md:origin-top-left" />
            </div>
          </div>
        </div>

        {/* Right side (Col 7 to 11) */}
        <div className="md:col-start-7 md:col-span-5 flex items-center justify-center p-6 md:p-0 md:pl-4 relative">
          <div className="bg-white w-full rounded-[2rem] p-8 md:p-10 lg:p-12 shadow-2xl relative z-10">
            <p className="text-primary font-medium mb-2">Create an Account</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-10">Welcome to ByteSpace</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Jamie Davis"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-600 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="designer@example.com"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-600 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  placeholder="********"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-600 placeholder-gray-400"
                />
              </div>
              
              <div className="flex justify-end pt-2">
                <button 
                  type="button"
                  className="bg-accent hover:bg-[#b8e600] text-dark font-medium py-4 px-10 rounded-full transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>

            <p className="mt-12 text-center text-gray-500">
              Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;
