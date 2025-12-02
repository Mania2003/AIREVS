// frontend/src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginForm from '../components/Auth/LoginForm';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../api/authApi';

const LoginPage = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // we still keep this in case you later want role-specific text
  const isAgentLogin = location.search.includes('role=agent');
  const roleText = isAgentLogin ? 'Owner / Agent' : 'Buyer / Owner';

  const handleLogin = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await loginUser(credentials);
      login(data.user, data.access_token); // save in context
      navigate('/', { replace: true }); // go to home after login
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 px-4 pb-2 pt-8 overflow-hidden relative">

      {/* ANIMATED BUBBLE GLOWS - TOP LEFT */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* ANIMATED BUBBLE GLOWS - BOTTOM RIGHT */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 right-10 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* FLOATING DESIGN ELEMENTS - DECORATIVE CIRCLES */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-32 right-20 w-32 h-32 border-2 border-blue-200/30 rounded-full"
        animate={{ y: [0, -20, 0], rotate: [0, 90, 360] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 left-20 w-24 h-24 border-2 border-cyan-200/20 rounded-full"
        animate={{ y: [0, 30, 0], rotate: [360, 180, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* GEOMETRIC GRID PATTERN - TOP RIGHT */}
      <div className="absolute top-0 right-0 w-96 h-96 overflow-hidden opacity-40">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <g stroke="url(#gridGradient)" strokeWidth="1">
            <line x1="0" y1="0" x2="200" y2="0" />
            <line x1="0" y1="40" x2="200" y2="40" />
            <line x1="0" y1="80" x2="200" y2="80" />
            <line x1="0" y1="120" x2="200" y2="120" />
            <line x1="0" y1="160" x2="200" y2="160" />
            <line x1="0" y1="200" x2="200" y2="200" />
            <line x1="0" y1="0" x2="0" y2="200" />
            <line x1="40" y1="0" x2="40" y2="200" />
            <line x1="80" y1="0" x2="80" y2="200" />
            <line x1="120" y1="0" x2="120" y2="200" />
            <line x1="160" y1="0" x2="160" y2="200" />
            <line x1="200" y1="0" x2="200" y2="200" />
          </g>
        </svg>
      </div>

      {/* DIAGONAL ACCENT SHAPES - BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0 w-96 h-96 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <polygon points="0,200 200,0 200,200" fill="url(#shapeGradient)" />
        </svg>
      </div>

      {/* ANIMATED FLOATING SQUARES - TOP CENTER */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-1/2 transform -translate-x-1/2 w-20 h-20 border-2 border-blue-300/20 rounded-lg"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 45, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* ANIMATED FLOATING DIAMOND - CENTER RIGHT */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-1/4 w-16 h-16 border-2 border-cyan-300/25"
        style={{ transform: 'rotate(45deg)' }}
        animate={{ 
          y: [0, 40, 0],
          x: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 16, repeat: Infinity, delay: 2 }}
      />

      {/* GRADIENT ORBS - CORNERS */}
      <div className="absolute top-10 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-blue-200/10 to-transparent blur-2xl" />
      <div className="absolute bottom-20 right-1/3 w-48 h-48 rounded-full bg-gradient-to-tl from-cyan-200/8 to-transparent blur-3xl" />

      {/* SUBTLE DOTTED PATTERN - TOP LEFT */}
      <div className="pointer-events-none absolute top-20 left-20 w-32 h-32">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.1
        }} />
      </div>

      {/* DIAGONAL LINES ACCENT - TOP RIGHT */}
      <motion.svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-64 h-64"
        viewBox="0 0 200 200"
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        opacity={0.15}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <line x1="0" y1="0" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="2" />
        <line x1="0" y1="30" x2="200" y2="230" stroke="url(#lineGradient)" strokeWidth="1.5" />
        <line x1="0" y1="60" x2="200" y2="260" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="30" y1="0" x2="230" y2="200" stroke="url(#lineGradient)" strokeWidth="1" />
      </motion.svg>

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="hidden lg:flex flex-col gap-8"
        >
          {/* LOGO AND BRANDING */}
          <motion.div 
            className="flex items-center gap-6 -ml-32 -mt-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.img 
              src="/images/blue-logo-rb.png" 
              alt="RealEstateAI" 
              className="h-32 w-32 object-contain"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            />
            <h1 className="text-7xl font-extrabold bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', 'Inter', sans-serif", fontWeight: 900 }}>RealEstateAI</h1>
          </motion.div>

          <p className="text-lg text-blue-200 max-w-md leading-relaxed">
            Unlock intelligent property insights and make data-driven real estate decisions with confidence.
          </p>

          <div className="space-y-4 pt-8">
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex-shrink-0 mt-1">
                <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-blue-50">AI-powered price predictions</span>
            </motion.div>
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex-shrink-0 mt-1">
                <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-blue-50">Real-time market insights</span>
            </motion.div>
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex-shrink-0 mt-1">
                <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-blue-50">Streamlined property management</span>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-md mx-auto"
        >
          <div className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8 space-y-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300">

            {/* HEADER */}
            <div className="space-y-2 text-center">
              <p className="text-xl text-white/70">
                Sign in as <span className="font-semibold text-white/90 text-2xl">{roleText}</span>
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200 backdrop-blur"
                role="alert"
              >
                {error}
              </motion.div>
            )}

            {/* SOCIAL BUTTONS */}
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-all backdrop-blur-md"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </motion.button>
              <motion.button
                type="button"
                onClick={() => window.open('https://github.com/Springboard-Internship-2025/AI-Based-Real-Estate-Valuation-System_September_Batch-3_2025', '_blank')}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-all backdrop-blur-md"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.button>
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 border-t border-white/20"></div>
              <span className="text-xs text-white/60 font-medium whitespace-nowrap px-2">Or continue with email</span>
              <div className="flex-1 border-t border-white/20"></div>
            </div>

            {/* FORM */}
            <div>
              <LoginForm onSubmit={handleLogin} loading={loading} />
            </div>

            {/* FOOTER LINKS */}
            <div className="flex items-center justify-between text-sm">
              <motion.div whileHover={{ x: -2 }}>
                <Link to="/forgot" className="text-white/60 hover:text-white/80 font-medium transition-colors">
                  Forgot password?
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 2 }}>
                <Link to="/register" className="font-semibold text-cyan-300 hover:text-cyan-200 transition-colors">
                  Create account
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
