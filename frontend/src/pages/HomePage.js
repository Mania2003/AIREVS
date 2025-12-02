import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
    const navigate = useNavigate();
    const [showContactModal, setShowContactModal] = useState(false);

    const handleGetStarted = () => {
        navigate('/predict');
    };

    const handleBrowseProperties = () => {
        navigate('/properties');
    };

    const handleContactSupport = () => {
        navigate('/contact');
    };

    const handleQuickContact = () => {
        setShowContactModal(true);
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        }),
        hover: {
            y: -10,
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const heroVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.2
            }
        }
    };

    const supportContacts = [
        { 
            type: 'Sales & General Inquiries', 
            number: '+91 98000 12345', 
            icon: '📞', 
            hours: '24/7',
            description: 'Get information about properties and pricing'
        },
        { 
            type: 'Customer Support', 
            number: '+91 98000 54321', 
            icon: '🛟', 
            hours: '24/7',
            description: 'Assistance with bookings and reservations'
        },
        { 
            type: 'WhatsApp Support', 
            number: '+91 98000 67890', 
            icon: '💬', 
            hours: '24/7',
            description: 'Quick chat support via WhatsApp'
        },
        { 
            type: 'Technical Support', 
            number: '+91 98000 98765', 
            icon: '🔧', 
            hours: '9 AM - 6 PM',
            description: 'Website and app technical issues'
        }
    ];

    const handleCallNumber = (number) => {
        window.open(`tel:${number}`, '_self');
    };

    const handleWhatsApp = (number) => {
        const message = "Hi, I'm interested in knowing more about your properties and services from the DreamHome website.";
        window.open(`https://wa.me/${number.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="flex flex-col items-center w-full min-h-screen text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white">
            
            {/* --- 1. Enhanced Hero Section --- */}
            {/* (FIX) Added pt-20 (padding-top) to this container to push content below the overlapping nav bar */}
            <div className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
                {/* Background Image with Dark Overlay */}
                                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/AI-blue.png)' }}>
                                    <div className="absolute inset-0 bg-black/50"></div>
                                </div>
                
                {/* Hero Content */}
                <motion.div 
                    className="relative z-10 text-center p-8 max-w-4xl mx-4"
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        className="text-6xl md:text-7xl font-black mb-4 leading-tight drop-shadow-2xl -mt-32 bg-gradient-to-r from-white via-cyan-200 to-yellow-300 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Find Your Next <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">Dream Home</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-semibold bg-gradient-to-r from-blue-200 via-cyan-200 to-white bg-clip-text text-transparent italic"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Discover Perfect Properties with AI-powered Price Predictions<br/>
                        and Smart Search Tools
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <motion.button 
                            onClick={handleGetStarted}
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-yellow-400/60 to-yellow-500/60 hover:from-yellow-500/70 hover:to-yellow-600/70 backdrop-blur-md text-white py-5 px-12 rounded-2xl font-black text-xl cursor-pointer 
                                        shadow-2xl hover:shadow-yellow-500/60 transition-all duration-300 flex items-center gap-3 border border-white/30"
                        >
                            <span>🚀</span>
                            Start Price Prediction
                        </motion.button>
                        
                        <motion.button 
                            onClick={handleBrowseProperties}
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-white/60 to-gray-100/60 hover:from-white/70 hover:to-gray-100/70 backdrop-blur-md text-blue-600 py-5 px-12 rounded-2xl font-black text-xl cursor-pointer 
                                        shadow-2xl hover:shadow-white/60 transition-all duration-300 flex items-center gap-3 border border-white/40"
                        >
                            <span>🏠</span>
                            Browse Properties
                        </motion.button>

                        <motion.button 
                            onClick={handleQuickContact}
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-green-500/60 to-green-600/60 hover:from-green-600/70 hover:to-green-700/70 backdrop-blur-md text-white py-5 px-12 rounded-2xl font-black text-xl cursor-pointer 
                                        shadow-2xl hover:shadow-green-600/60 transition-all duration-300 flex items-center gap-3 border border-white/30"
                        >
                            <span>💬</span>
                            Quick Contact
                        </motion.button>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        {[
                            { number: '5000+', label: 'Properties' },
                            { number: '95%', label: 'Accuracy' },
                            { number: '24/7', label: 'Support' },
                            { number: '50+', label: 'Locations' }
                        ].map((stat, index) => (
                            <motion.div 
                                key={stat.label}
                                className="text-center p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-xl border border-cyan-400/40 hover:border-cyan-300/70 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-2xl md:text-3xl font-bold text-cyan-300 mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-200">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Quick Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-12 p-6 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 backdrop-blur-md rounded-2xl border border-cyan-400/40 max-w-2xl mx-auto"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="text-center sm:text-left">
                                <p className="text-white font-semibold mb-1">Need Immediate Assistance?</p>
                                <p className="text-text-muted text-sm">Call us now for instant support</p>
                            </div>
                            <div className="flex gap-3">
                                <motion.button
                                    onClick={() => handleCallNumber('+91 98000 12345')}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center gap-2"
                                >
                                    <span>📞</span>
                                    Call Now
                                </motion.button>
                                <motion.button
                                    onClick={() => handleWhatsApp('+91 98000 67890')}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center gap-2"
                                >
                                    <span>💬</span>
                                    WhatsApp
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="text-white text-2xl">↓</div>
                </motion.div>
            </div>

            {/* --- 2. Enhanced Featured Content Section --- */}
            <div className="w-full max-w-7xl mx-auto py-24 px-4 bg-white rounded-3xl shadow-2xl -mt-20 relative z-10 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-black text-gray-900 mb-6">
                        Featured Property <span className="text-blue-600">Insights</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-semibold">
                        Discover trending properties and market insights to make informed decisions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            id: 1,
                            price: '₹95 Lakhs',
                            type: '3 BHK, Whitefield',
                            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop',
                            description: 'Modern apartment with premium amenities',
                            link: '/properties?location=Whitefield&bhk=3'
                        },
                        {
                            id: 2,
                            price: '₹1.5 Cr',
                            type: '4 BHK, Koramangala',
                            image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400&h=250&fit=crop',
                            description: 'Luxury villa in prime location',
                            link: '/properties?location=Koramangala&bhk=4'
                        },
                        {
                            id: 3,
                            price: '2,300+',
                            type: 'New Projects',
                            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop',
                            description: 'Latest construction projects',
                            link: '/properties?sort=newest'
                        },
                        {
                            id: 4,
                            price: '895 Homes',
                            type: 'Budget Options',
                            image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400&h=250&fit=crop',
                            description: 'Affordable housing solutions',
                            link: '/properties?max_price=50'
                        }
                    ].map((card, index) => (
                        <motion.div
                            key={card.id}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <Link to={card.link}>
                                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-500/40">
                                    <div className="relative overflow-hidden">
                                        <img 
                                            src={card.image} 
                                            alt={card.type} 
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-300"></div>
                                        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                            Featured
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-3xl font-black text-red-600 mb-3">{card.price}</p>
                                        <p className="text-xl font-bold text-gray-900 mb-2">{card.type}</p>
                                        <p className="text-gray-700 text-base mb-4 font-semibold">{card.description}</p>
                                        <motion.div 
                                            className="flex items-center text-blue-600 font-bold text-base hover:text-blue-700"
                                            whileHover={{ x: 5 }}
                                        >
                                            View Details 
                                            <span className="ml-1">→</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-16 max-w-4xl mx-auto shadow-2xl">
                        <h3 className="text-5xl font-black text-white mb-6">
                            Ready to Find Your Perfect Home?
                        </h3>
                        <p className="text-2xl text-gray-100 mb-10 max-w-2xl mx-auto font-semibold">
                            Join thousands of satisfied customers who found their dream home through our platform
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                onClick={handleGetStarted}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-blue-600 py-5 px-10 rounded-xl font-black text-lg hover:bg-gray-100 transition-all shadow-lg"
                            >
                                Get Started Today
                            </motion.button>
                            <motion.button
                                onClick={handleBrowseProperties}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-3 border-white text-white py-5 px-10 rounded-xl font-black text-lg hover:bg-white hover:text-blue-600 transition-all"
                            >
                                Explore All Properties
                            </motion.button>
                            <motion.button
                                onClick={handleQuickContact}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-yellow-400 text-gray-900 py-5 px-10 rounded-xl font-black text-lg hover:bg-yellow-300 transition-all shadow-lg"
                            >
                                📞 Contact Us
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- 3. Quick Links Section --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full bg-gray-100 py-20 px-4"
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '📊',
                                title: 'Price Predictor',
                                description: 'Get accurate price estimates for any property',
                                link: '/predict',
                                buttonText: 'Predict Price'
                            },
                            {
                                icon: '🏠',
                                title: 'Property Listings',
                                description: 'Browse through our extensive property database',
                                link: '/properties',
                                buttonText: 'View Listings'
                            },
                            {
                                icon: '📞',
                                title: 'Expert Support',
                                description: '24/7 customer support for all your queries',
                                link: '/contact',
                                buttonText: 'Get Help'
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="text-center p-10 bg-white rounded-2xl border-2 border-gray-300 hover:border-blue-600 transition-all duration-300 hover:shadow-blue-500/30 hover:shadow-xl"
                            >
                                <div className="text-6xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-700 mb-6 font-semibold text-lg">{service.description}</p>
                                <Link to={service.link}>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl font-black shadow-lg"
                                    >
                                        {service.buttonText}
                                    </motion.button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* --- 4. Contact Information Footer --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 border-t-4 border-blue-600 px-4"
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div>
                            <h3 className="text-4xl font-black text-white mb-4">DreamHome Properties</h3>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed font-semibold">
                                Your trusted partner in finding the perfect home with AI-powered insights and expert guidance.
                            </p>
                            <div className="flex gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleCallNumber('+91 98000 12345')}
                                    className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full transition-all shadow-lg"
                                >
                                    📞
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleWhatsApp('+91 98000 67890')}
                                    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full transition-all shadow-lg"
                                >
                                    💬
                                </motion.button>
                            </div>
                        </div>

                        {/* Quick Contact */}
                        <div>
                            <h4 className="text-2xl font-black text-white mb-6">Quick Contact</h4>
                            <div className="space-y-3 text-lg">
                                <p className="text-gray-300 font-bold">📞 +91 98000 12345</p>
                                <p className="text-gray-300 font-bold">📧 support@dreamhome.com</p>
                                <p className="text-gray-300 font-bold">📍 Bangalore, Karnataka</p>
                                <p className="text-yellow-400 font-bold">🕒 24/7 Support Available</p>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-2xl font-black text-white mb-6">Our Services</h4>
                            <div className="space-y-3 text-lg">
                                <p className="text-gray-300 font-bold">🏠 Property Search</p>
                                <p className="text-gray-300 font-bold">📊 Price Prediction</p>
                                <p className="text-gray-300 font-bold">💰 Loan Calculator</p>
                                <p className="text-gray-300 font-bold">🔍 Market Analysis</p>
                            </div>
                        </div>

                        {/* Emergency Contact */}
                        <div className="bg-red-600/30 p-6 rounded-2xl border-2 border-red-500/70 backdrop-blur-sm">
                            <h4 className="text-2xl font-black text-red-400 mb-2">🚨 Emergency</h4>
                            <p className="text-gray-300 text-lg mb-4 font-bold">Urgent property issues</p>
                            <motion.button
                                onClick={() => handleCallNumber('+91 98000 11111')}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-xl font-black text-lg transition-all shadow-lg"
                            >
                                Call Emergency
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Quick Contact Modal */}
            <AnimatePresence>
                {showContactModal && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowContactModal(false)}
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-md border-2 border-blue-600"
                        >
                            <div className="p-8">
                                <div className="text-center mb-6">
                                    <div className="text-6xl mb-4">📞</div>
                                    <h2 className="text-3xl font-black text-blue-600 mb-2">Quick Contact</h2>
                                    <p className="text-gray-600 text-lg font-semibold">Choose how you'd like to reach us</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {supportContacts.map((contact, index) => (
                                        <motion.div
                                            key={contact.type}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center justify-between p-4 bg-gray-100 rounded-xl border-2 border-gray-300 hover:border-blue-600 transition-all cursor-pointer group"
                                            onClick={() => contact.type.includes('WhatsApp') ? handleWhatsApp(contact.number) : handleCallNumber(contact.number)}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl">{contact.icon}</span>
                                                <div>
                                                    <p className="text-gray-900 font-black text-lg">{contact.type}</p>
                                                    <p className="text-blue-600 text-sm font-bold">{contact.number}</p>
                                                </div>
                                            </div>
                                            <motion.span
                                                whileHover={{ scale: 1.2 }}
                                                className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity text-2xl font-black"
                                            >
                                                →
                                            </motion.span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="text-center">
                                    <p className="text-gray-600 text-base mb-4 font-bold">
                                        Prefer to visit our contact page for more options?
                                    </p>
                                    <div className="flex gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setShowContactModal(false)}
                                            className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-xl font-black shadow-lg transition-all"
                                        >
                                            Close
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleContactSupport}
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-black shadow-lg transition-all"
                                        >
                                            Full Contact Page
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HomePage;