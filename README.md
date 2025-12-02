# AI-Based Real Estate Valuation System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Node.js 14+](https://img.shields.io/badge/node.js-14+-green.svg)](https://nodejs.org/)
[![React 18](https://img.shields.io/badge/react-18-blue.svg)](https://reactjs.org/)

A comprehensive full-stack web application for intelligent property price prediction using machine learning. Built with React and Flask, featuring AI-powered insights, real-time analytics, and professional property management tools.

**Developed by**: Springboard Internship 2025 - Batch 3

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

## ✨ Features

### 🤖 AI & Machine Learning
- **ML Price Prediction**: Advanced Random Forest model for accurate property valuations
- **95% Accuracy Rate**: Trained on 5000+ property data points
- **Real-time Predictions**: Instant price estimates based on property features

### 🏠 Property Management
- **Comprehensive Listings**: Browse 5000+ properties with detailed information
- **Advanced Search**: Filter by location, price, size, and amenities
- **Property Details**: High-resolution images, descriptions, and specifications
- **Favorite Properties**: Save and manage favorite listings

### 🗺️ Location & Mapping
- **Interactive Maps**: Leaflet-based visualization of property locations
- **Geolocation Support**: View properties near your location
- **Market Analysis**: Geographic insights and trends

### 💬 AI Support
- **24/7 Chatbot**: Google Generative AI-powered customer support
- **Instant Responses**: Quick answers to property-related questions
- **Multi-language**: Support for multiple languages

### 👤 User Authentication
- **Secure Login**: JWT-based authentication
- **Role-based Access**: Different access levels for buyers, sellers, and agents
- **Email Verification**: Account security and recovery options
- **Social Login**: Google and GitHub authentication ready

### 📊 Analytics & Dashboard
- **Performance Metrics**: Real-time statistics and insights
- **Market Trends**: Historical data and trend analysis
- **User Activity**: Track property views and interactions
- **Reports**: Generate detailed market analysis reports

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Glassmorphic Design**: Modern, aesthetic interface with animations
- **Smooth Animations**: Framer Motion for delightful interactions
- **Dark/Light Modes**: Theme support (coming soon)

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3.1 | UI Framework |
| React Router | 6.23.1 | Client-side Routing |
| Tailwind CSS | 3.4.18 | Styling & Design |
| Framer Motion | 11.2.10 | Animations |
| Leaflet | 1.9.4 | Interactive Maps |
| React-Leaflet | 4.2.1 | Leaflet React Wrapper |
| Recharts | 3.3.0 | Data Visualization |
| Axios | Latest | HTTP Client |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Flask | 3.0.3 | Web Framework |
| Flask-SQLAlchemy | 3.1.1 | ORM & Database |
| Flask-JWT-Extended | 4.6.0 | JWT Authentication |
| scikit-learn | 1.4.2 | Machine Learning |
| pandas | 2.2.2 | Data Processing |
| numpy | 1.26.4 | Numerical Computing |
| google-genai | 0.8.0 | AI Chatbot |
| Flask-Mail | 0.9.1 | Email Services |

### Database
- **Development**: SQLite 3
- **Production**: PostgreSQL (recommended)

## 🚀 Quick Start

### Prerequisites
- **Node.js** 14.0.0 or higher
- **Python** 3.8 or higher
- **npm** 6.0.0 or higher
- **Git**

### Clone & Setup (5 minutes)

```bash
# Clone the repository
git clone https://github.com/Springboard-Internship-2025/AI-Based-Real-Estate-Valuation-System_September_Batch-3_2025.git
cd AI-Based-Real-Estate-Valuation-System_September_Batch-3_2025

# Backend Setup
cd backend
python -m venv revs
.\revs\Scripts\activate  # Windows
# OR
source revs/bin/activate  # macOS/Linux

pip install -r requirements.txt
cp .env.example .env
# Edit .env with your configuration
python app.py

# Frontend Setup (in a new terminal)
cd frontend
npm install
npm start
```

Visit `http://localhost:3000` in your browser!

## 📁 Project Structure

```
realestatepricepredictor/
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── images/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   ├── Common/
│   │   │   ├── Dashboard/
│   │   │   ├── Forms/
│   │   │   ├── Listings/
│   │   │   ├── Prediction/
│   │   │   ├── Property/
│   │   │   └── CMASection.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── PredictionPage.js
│   │   │   ├── PropertiesPage.js
│   │   │   ├── UserDashboard.js
│   │   │   └── ...
│   │   ├── api/
│   │   │   ├── authApi.js
│   │   │   ├── predictionApi.js
│   │   │   ├── propertyApi.js
│   │   │   └── ...
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   │   └── dummyData.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── jsconfig.json
│   └── .env.example
│
├── backend/
│   ├── routes/
│   │   ├── auth_routes.py
│   │   ├── prediction_routes.py
│   │   ├── property_routes.py
│   │   ├── chatbot_routes.py
│   │   └── query_routes.py
│   ├── ml_data/
│   │   └── cleaned_Bengaluru_House_Data.csv
│   ├── instance/
│   │   └── realestatedb.db
│   ├── app.py
│   ├── models.py
│   ├── extensions.py
│   ├── ml_utils.py
│   ├── train_model.py
│   ├── requirements.txt
│   ├── REQUIREMENTS.md
│   ├── model.joblib
│   ├── model_features.joblib
│   ├── test_chatbot.py
│   ├── test_prediction.py
│   └── .env.example
│
├── .gitignore
├── README.md
└── .env.example
```

## 📖 Installation

### Backend Installation

```bash
cd backend

# Create virtual environment
python -m venv revs

# Activate virtual environment
# Windows
.\revs\Scripts\activate
# macOS/Linux
source revs/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create environment file
cp .env.example .env

# Run the server
python app.py
```

**Backend runs on**: `http://localhost:5000`

For detailed backend setup, see [backend/REQUIREMENTS.md](backend/REQUIREMENTS.md)

### Frontend Installation

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm start
```

**Frontend runs on**: `http://localhost:3000`

For detailed frontend setup, see [frontend/REQUIREMENTS.md](frontend/REQUIREMENTS.md)

## ⚙️ Configuration

### Backend Environment Variables

Create `backend/.env`:

```env
# Flask Configuration
FLASK_ENV=development
FLASK_APP=app.py

# Database
DATABASE_URL=sqlite:///instance/realestatedb.db

# JWT Configuration
JWT_SECRET_KEY=your_super_secret_key_change_this

# Email Configuration
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password

# Google Generative AI
GOOGLE_API_KEY=your_google_api_key

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

### Frontend Environment Variables

Create `frontend/.env.local`:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_ENABLE_MAPS=true
REACT_APP_MAP_CENTER_LAT=12.9716
REACT_APP_MAP_CENTER_LNG=77.5946
```

## 💻 Usage

### For Users

1. **Register/Login**: Create an account or login with existing credentials
2. **Explore Properties**: Browse the extensive property listings
3. **Get Price Prediction**: Input property details for AI-powered price estimates
4. **Use Interactive Maps**: View properties on map with filters
5. **Chat Support**: Get instant help from AI chatbot
6. **View Dashboard**: Track your activity and saved properties

### For Developers

```bash
# Development mode (with hot reload)
npm start                 # Frontend
python app.py            # Backend

# Build for production
npm run build            # Frontend
# Backend uses production WSGI server (Gunicorn)

# Run tests
npm test                 # Frontend tests
pytest                   # Backend tests

# Code quality
npm run lint             # Frontend linting
pylint backend/          # Backend linting
```
## 🙏 Acknowledgments

- Springboard Internship Program
- Open-source community
- Contributors and team members

---

<div align="center">

**Made with ❤️ by Springboard Internship Batch 3 - 2025**

</div>
