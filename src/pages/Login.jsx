import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/hero/logo.png';
import graphicsImg from '../assets/3d-icons-login-register.png';

function Login() {
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
            <h1 className="text-3xl md:text-[40px] font-bold leading-tight mb-4 text-center md:text-left">Sign in with ease</h1>
            <p className="text-base md:text-lg opacity-90 mb-10 leading-relaxed text-center md:text-left">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-full mx-auto md:mx-0">
              <img src={graphicsImg} alt="Graphic" className="w-full h-auto object-contain md:scale-[1.05] transform origin-top md:origin-top-left" />
            </div>
          </div>
        </div>

        {/* Right side (Col 7 to 11) */}
        <div className="md:col-start-7 md:col-span-5 flex items-center justify-center p-6 md:p-0 md:pl-4 relative">
          <div className="bg-white w-full rounded-[2rem] p-8 md:p-10 lg:p-12 shadow-2xl relative z-10">
            <p className="text-primary font-medium mb-2">Sign In</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-10">Welcome Back</h2>
            
            <form className="space-y-6">
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
                  Sign In
                </button>
              </div>
            </form>

            <div className="mt-10 flex items-center justify-center">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="px-4 text-gray-400 text-sm">or</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <button className="w-16 h-16 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </button>
              <button className="w-16 h-16 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </button>
            </div>

            <p className="mt-10 text-center text-gray-500">
              New user? <Link to="/register" className="text-primary hover:underline">Create an account</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
