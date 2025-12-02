import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- Imports (All paths are synchronized) ---
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import PrivateRoute from './components/Common/PrivateRoute';
import AgentRoute from './components/Common/AgentRoute';
import ChatbotWidget from './components/Common/ChatbotWidget';
import PageTransition from './components/Common/PageTransition'; 

// Pages 
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; 
import PredictionPage from './pages/PredictionPage'; 
import { UserDashboard } from './pages/UserDashboard';
import OwnerDashboard from './pages/OwnerDashboard'; 
import PropertiesPage from './pages/PropertiesPage'; 
import PropertyDetailPage from './pages/PropertyDetailPage'; 
import WishlistPage from './pages/Buyer/WishlistPage'; 
import LoanCalculatorPage from './pages/LoanCalculatorPage';
import AreaConverterPage from './pages/AreaConverterPage';
import ArticlesPage from './pages/ArticlesPage';
import BuyingGuidesPage from './pages/BuyingGuidesPage';
import SellingGuidesPage from "./pages/SellingGuidesPage";
import FAQPage from './pages/FAQPage';
import MapPage from './pages/MapPage'; // <-- NEW IMPORT
import ProfileEditPage from './pages/ProfileEditPage';
import UpgradePlanPage from './pages/UpgradePlanPage';

const RootContent = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen bg-blue-950 text-text-light"> 
            <Navbar />
            
            <main className="flex-grow bg-blue-950">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        
                        {/* Public/General Routes */}
                        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                        <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
                        <Route path="/register" element={<PageTransition><RegisterPage /></PageTransition>} />
                        
                        {/* Core Listing Routes */}
                        <Route path="/predict" element={<PageTransition><PredictionPage /></PageTransition>} />
                        <Route path="/properties" element={<PageTransition><PropertiesPage /></PageTransition>} />
                        <Route path="/property/:id" element={<PageTransition><PropertyDetailPage /></PageTransition>} />
                        <Route path="/wishlist" element={<PageTransition><WishlistPage /></PageTransition>} />
                        
                        {/* Utility Routes */}
                        <Route path="/loan-calculator" element={<PageTransition><LoanCalculatorPage /></PageTransition>} />
                        <Route path="/area-converter" element={<PageTransition><AreaConverterPage /></PageTransition>} />
                        <Route path="/articles" element={<PageTransition><ArticlesPage /></PageTransition>} />
                        <Route path="/buying-guides" element={<PageTransition><BuyingGuidesPage /></PageTransition>} />
                        <Route path="/selling-guides" element={<PageTransition><SellingGuidesPage /></PageTransition>} />
                        <Route path="/faq" element={<PageTransition><FAQPage /></PageTransition>} />
                        
                        {/* NEW MAP ROUTE */}
                        <Route path="/map" element={<PageTransition><MapPage /></PageTransition>} />

                        {/* Protected Routes (Role-Based Access) */}
                        <Route path="/dashboard" element={<PrivateRoute element={UserDashboard} />} />         
                        <Route path="/agent-dashboard" element={<AgentRoute element={OwnerDashboard} />} />   
                        <Route path="/profile-edit" element={<PageTransition><ProfileEditPage /></PageTransition>} />
                        <Route path="/upgrade-plan" element={<PageTransition><UpgradePlanPage /></PageTransition>} />
                        
                        {/* 404 Fallback */}
                        <Route path="*" element={<h1 className="text-center text-3xl mt-10">404 - Page Not Found</h1>} />
                    </Routes>
                </AnimatePresence>
            </main>
            
            <Footer />
            <ChatbotWidget />
        </div>
    );
};

const App = () => (
    <Router>
        <AuthProvider>
            <RootContent />
        </AuthProvider>
    </Router>
);

export default App;