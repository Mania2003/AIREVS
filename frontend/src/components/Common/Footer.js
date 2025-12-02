import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isLoginOrRegister = location.pathname === '/login' || location.pathname === '/register';

    if (isLoginOrRegister) {
        return (
            <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white py-6 mt-0 -mb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm text-blue-200">
                        &copy; 2025 RealEstateAI. All rights reserved.
                    </p>
                    <p className="text-xs text-blue-300/70 mt-2">
                        Powered by Flask, React, and Machine Learning.
                    </p>
                </div>
            </footer>
        );
    }

    return (
        <footer className="bg-bg-dark-secondary text-white mt-12 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm text-text-muted">
                    &copy; 2025 RealEstate AI. All rights reserved.
                </p>
                <p className="text-xs text-gray-600 mt-1">
                    Powered by Flask, React, and Machine Learning.
                </p>
            </div>
        </footer>
    );
};

export default Footer;