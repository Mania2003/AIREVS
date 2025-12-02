import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  // ----------------- Logout -----------------
  const handleLogout = async () => {
    try {
      navigate('/login', { replace: true });
      setTimeout(async () => {
        await logout();
      }, 100);
    } catch (error) {
      console.error('Logout failed:', error);
      navigate('/login', { replace: true });
    }
  };

  // ----------------- Auth Redirect -----------------
  useEffect(() => {
    const publicPaths = ['/login', '/register'];
    if (!isLoading && !user && !publicPaths.includes(location.pathname)) {
      navigate('/login', { replace: true });
    }
  }, [user, isLoading, location.pathname, navigate]);

  // ----------------- Resources Dropdown -----------------
  const handleResourcesEnter = () => setIsResourcesOpen(true);

  const handleResourcesLeave = (e) => {
    // if mouse is going into dropdown, don't close
    if (dropdownRef.current && dropdownRef.current.contains(e.relatedTarget)) return;
    setIsResourcesOpen(false);
  };

  const handleDropdownEnter = () => setIsResourcesOpen(true);

  const handleDropdownLeave = (e) => {
    // if mouse is going back to the Resources button, don't close
    if (e.relatedTarget && e.relatedTarget.closest('#resources-btn')) return;
    setIsResourcesOpen(false);
  };

  const dashboardPath = user?.role === 'agent' ? '/agent-dashboard' : '/dashboard';

  // =================================================================
  // HIDE NAVBAR FOR LOGIN PAGE (no user yet)
  // =================================================================
  if (!user && isLoginPage) {
    return null;
  }

  // =================================================================
  // HIDE NAVBAR FOR REGISTER PAGE (no user yet)
  // =================================================================
  if (!user && isRegisterPage) {
    return null;
  }

  // =================================================================
  // NORMAL NAVBAR (all other pages, including dashboards & home)
  // =================================================================
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="bg-bg-dark-secondary shadow-lg w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo (top-left) */}
          <div className="flex-shrink-0 flex items-center gap-3 select-none">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/images/blue-logo-rb.png" 
                alt="RealEstateAI Logo" 
                className="h-10 w-10 object-contain drop-shadow group-hover:scale-105 group-hover:rotate-3 transition-transform duration-200" 
                draggable="false"
              />
              <span 
                className="text-2xl font-extrabold bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight"
                style={{ fontFamily: "'Poppins', 'Inter', sans-serif", fontWeight: 900 }}
              >
                RealEstateAI
              </span>
            </Link>
          </div>

          {/* ===== COMMON MENU FOR ALL LOGGED-IN USERS ===== */}
            <div className="hidden md:flex space-x-6 items-center font-semibold" style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}>
            {user && (
              <>
                  <Link
                    to="/predict"
                    className="px-3 py-1 rounded-lg text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-500/20 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition font-semibold tracking-wide shadow-sm"
                    style={{ letterSpacing: '0.01em' }}
                  >
                    Prediction
                  </Link>
                  <Link
                    to="/properties"
                    className="px-3 py-1 rounded-lg text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-500/20 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition font-semibold tracking-wide shadow-sm"
                    style={{ letterSpacing: '0.01em' }}
                  >
                    Properties
                  </Link>
                  <Link
                    to="/map"
                    className="px-3 py-1 rounded-lg text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-500/20 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition font-semibold tracking-wide shadow-sm"
                    style={{ letterSpacing: '0.01em' }}
                  >
                    Map View
                  </Link>

                {/* RESOURCES DROPDOWN */}
                <div className="relative" onMouseLeave={handleResourcesLeave}>
                  <button
                    id="resources-btn"
                    onMouseEnter={handleResourcesEnter}
                      className="px-3 py-1 rounded-lg text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-500/20 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition font-semibold tracking-wide flex items-center shadow-sm"
                      style={{ letterSpacing: '0.01em' }}
                  >
                    Resources <span className="ml-1 text-sm">▼</span>
                  </button>

                  <AnimatePresence>
                    {isResourcesOpen && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                        className="absolute top-full mt-2 w-56 bg-blue-950 rounded-xl shadow-2xl border border-cyan-900/60 z-50 backdrop-blur-none"
                      >
                        {/* BUYER RESOURCES */}
                        {user.role !== 'agent' && (
                          <>
                            <Link
                              to="/loan-calculator"
                              className="block px-4 py-2 text-sm text-text-muted hover:bg-gray-800 hover:text-brand-accent transition"
                            >
                              EMI Calculator
                            </Link>
                            <Link
                              to="/buying-guides"
                              className="block px-4 py-2 text-sm text-text-muted hover:bg-gray-800 hover:text-brand-accent transition"
                            >
                              Buying Guides
                            </Link>
                          </>
                        )}

                        {/* AGENT RESOURCES */}
                        {user.role === 'agent' && (
                          <Link
                            to="/selling-guides"
                            className="block px-4 py-2 text-sm text-text-muted hover:bg-gray-800 hover:text-brand-accent transition"
                          >
                            Selling Guides
                          </Link>
                        )}

                        {/* COMMON RESOURCES */}
                        <Link
                          to="/area-converter"
                          className="block px-4 py-2 text-sm text-text-muted hover:bg-gray-800 hover:text-brand-accent transition"
                        >
                          Area Converter
                        </Link>
                        <Link
                          to="/articles"
                          className="block px-4 py-2 text-sm text-text-muted hover:bg-gray-800 hover:text-brand-accent transition"
                        >
                          Articles &amp; News
                        </Link>
                        <Link
                          to="/faq"
                          className="block px-4 py-2 text-sm text-text-muted hover:bg-gray-800 hover:text-brand-accent transition"
                        >
                          FAQ
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}

            {/* Dashboard link */}
               {user && (
                 <Link
                   to={dashboardPath}
                   className="px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-900/40 to-blue-900/40 text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-blue-500/30 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition font-bold tracking-wide shadow-sm border border-cyan-700/30 text-base mx-1"
                   style={{ letterSpacing: '0.01em' }}
                 >
                   Dashboard
                 </Link>
               )}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center space-x-3">

            {/* Auth section */}
               {user ? (
                 <>
                   <span className="flex items-center gap-2 text-cyan-100 text-base font-bold px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-700/30 to-blue-800/30 shadow-sm tracking-wide">
                     Hi, {user.role === 'agent' ? 'Owner' : 'Buyer'}
                     <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-semibold ${user.role === 'agent' ? 'bg-cyan-400/80 text-blue-900' : 'bg-blue-400/80 text-cyan-900'}`}>
                       {user.role === 'agent' ? 'Agent' : 'User'}
                     </span>
                   </span>
                   <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={handleLogout}
                     className="px-3 py-1 rounded-lg text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-500/20 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition font-semibold tracking-wide shadow-sm text-base"
                     style={{ letterSpacing: '0.01em' }}
                   >
                     Logout
                   </motion.button>
                 </>
               ) : (
              <>
                {/* This Login link is NOT shown on /login anymore because of the early return above */}
                <Link
                  to="/login?role=user"
                  className="text-text-light hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu placeholder */}
      <div className="md:hidden">{/* mobile menu in future */}</div>
    </motion.nav>
  );
};

export default Navbar;
