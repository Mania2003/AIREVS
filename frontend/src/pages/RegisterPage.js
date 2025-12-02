import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RegisterForm from '../components/Auth/RegisterForm';
import RegisterToggle from '../components/Forms/RegisterToggle'; 
import { registerUser } from '../api/authApi'; 

const RegisterPage = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('user'); // Stores 'user' or 'agent'
    const navigate = useNavigate();

    const handleRegister = async (formData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        const userData = { ...formData, role: role };

        try {
            // --- CRITICAL: Calling the actual backend API ---
            await registerUser(userData); 
            
            // 1. Show Success Message
            setSuccess(true);
            
            // 2. Wait briefly, then navigate
            setTimeout(() => {
                navigate('/login', { replace: true });
            }, 1500); // 1.5 second delay to display success message
            
        } catch (err) {
            setError(err.message || 'Registration failed. Check network or if email exists.');
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-8 flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 px-4 py-8 overflow-hidden relative">

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

            {/* FLOATING DESIGN ELEMENTS */}
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

            {/* GRADIENT ORBS */}
            <div className="absolute top-10 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-blue-200/10 to-transparent blur-2xl" />
            <div className="absolute bottom-20 right-1/3 w-48 h-48 rounded-full bg-gradient-to-tl from-cyan-200/8 to-transparent blur-3xl" />

            <div className="relative z-10 w-full max-w-md flex flex-col items-center">
                {/* LOGO AND BRANDING - OUTSIDE CARD */}
                <motion.div 
                    className="flex items-center gap-3 mb-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <motion.img 
                        src="/images/blue-logo-rb.png" 
                        alt="RealEstateAI" 
                        className="h-16 w-16 object-contain"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    />
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', 'Inter', sans-serif", fontWeight: 900 }}>RealEstateAI</h1>
                </motion.div>

                {/* CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8 space-y-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 w-full"
                >
                    {/* TITLE */}
                    <h2 className="text-3xl font-bold text-white text-center">
                        Create Your Account
                    </h2>
                    
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
                    
                    {/* SUCCESS */}
                    {success && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-lg border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm text-green-200 backdrop-blur"
                        >
                            Registration successful! Redirecting to Login...
                        </motion.div>
                    )}

                    {/* Animated Role Selector */}
                    <RegisterToggle onSelect={setRole} />

                    {/* FORM */}
                    <div>
                        <RegisterForm onSubmit={handleRegister} loading={loading} initialRole={role} />
                    </div>

                    {/* FOOTER LINK */}
                    <div className="text-sm text-center">
                        <p className="font-medium text-white/70">
                            Already have an account?{' '}
                            <Link to="/login" className="font-semibold text-cyan-300 hover:text-cyan-200 transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RegisterPage;