# Setup & Installation Guide

## 📋 Quick Overview

Real Estate Price Predictor is a full-stack application with:
- **Frontend**: React 18 with Tailwind CSS & Framer Motion
- **Backend**: Flask with scikit-learn ML model
- **Database**: SQLite

---

## 🔧 Prerequisites

- **Node.js** 14+ and npm 6+
- **Python** 3.8+
- **Git**

---

## 📦 Quick Setup (10 minutes)

### Backend Setup

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv revs

# Activate it
# Windows:
.\revs\Scripts\activate
# macOS/Linux:
source revs/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
copy .env.example .env
# Edit .env with your settings

# Start server
python app.py
```

**Runs on**: `http://localhost:5000`

### Frontend Setup (new terminal)

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create .env.local
copy .env.example .env.local

# Start development
npm start
```

**Runs on**: `http://localhost:3000`

---

## 📚 Dependencies

### Backend (`requirements.txt`)

| Package | Purpose |
|---------|---------|
| Flask 3.0.3 | Web framework |
| Flask-SQLAlchemy 3.1.1 | Database ORM |
| Flask-JWT-Extended 4.6.0 | Authentication |
| scikit-learn 1.4.2 | ML algorithms |
| pandas 2.2.2 | Data processing |
| numpy 1.26.4 | Numerical computing |
| google-genai 0.8.0 | AI chatbot |
| Flask-Mail 0.9.1 | Email service |
| Flask-CORS | Cross-origin support |
| bcrypt | Password hashing |

### Frontend (`package.json`)

| Package | Purpose |
|---------|---------|
| react 18.3.1 | UI framework |
| react-router-dom 6.23.1 | Navigation |
| tailwindcss 3.4.18 | Styling |
| framer-motion 11.2.10 | Animations |
| leaflet 1.9.4 | Interactive maps |
| recharts 3.3.0 | Charts/graphs |

---

## ⚙️ Environment Variables

### Backend (`.env`)

```env
FLASK_ENV=development
FLASK_APP=app.py
JWT_SECRET_KEY=your_secret_key
GOOGLE_API_KEY=your_google_api_key
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_password
ALLOWED_ORIGINS=http://localhost:3000
```

### Frontend (`.env.local`)

```env
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_ENABLE_MAPS=true
REACT_APP_MAP_CENTER_LAT=12.9716
REACT_APP_MAP_CENTER_LNG=77.5946
```

---

## 🚀 Running Commands

### Backend

```bash
# Start development server
python app.py

# Train ML model
python train_model.py

# Run tests
python test_prediction.py
python test_chatbot.py
```

### Frontend

```bash
# Development mode
npm start

# Build for production
npm run build

# Run tests
npm test

# Rebuild Tailwind CSS
npm run tailwind-build
```

---

## 🛠️ Troubleshooting

### Port Already in Use

**Frontend (port 3000):**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

**Backend (port 5000):**
```bash
# Kill Flask or specify different port
python app.py --port 5001
```

### Module Not Found

```bash
# Backend
source revs/bin/activate  # Activate virtual env
pip install -r requirements.txt

# Frontend
rm -rf node_modules
npm install
```

### Tailwind CSS Not Working

```bash
cd frontend
npm run tailwind-build
npm start
```

### Database Issues

```bash
# Delete and recreate
cd backend
rm instance/realestatedb.db
python app.py
```

---

## 📁 Project Structure

```
realestatepricepredictor/
├── backend/
│   ├── routes/              # API endpoints
│   ├── ml_data/             # Training data
│   ├── app.py               # Main Flask app
│   ├── models.py            # Database models
│   ├── train_model.py       # ML training
│   ├── requirements.txt      # Python dependencies
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── api/             # API integration
│   │   └── App.js
│   ├── package.json         # Node dependencies
│   ├── tailwind.config.js   # Tailwind config
│   └── .env.example
├── README.md
├── REQUIREMENTS.md          # This file
├── LICENSE
└── .gitignore
```

---

## 🔐 Security Tips

- ✅ Never commit `.env` file
- ✅ Use strong JWT secrets
- ✅ Keep dependencies updated
- ✅ Use HTTPS in production
- ✅ Validate all user inputs
- ✅ Use environment variables for secrets

---

## 📝 Common Tasks

### Update Dependencies

**Backend:**
```bash
pip install --upgrade -r requirements.txt
```

**Frontend:**
```bash
npm update
```

### Check Versions

**Backend:**
```bash
python --version
pip show flask
```

**Frontend:**
```bash
node --version
npm --version
npm list react
```

### Run in Production

**Backend:**
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

**Frontend:**
```bash
npm run build
# Serve 'build' folder with a static server
```

---

## 📖 Documentation

- **Full Setup**: See `backend/REQUIREMENTS.md` and `frontend/REQUIREMENTS.md`
- **API Docs**: See API endpoints in `backend/routes/`
- **Contributing**: See `CONTRIBUTING.md`
- **Changes**: See `CHANGELOG.md`

---

## ✨ Features

✅ AI price prediction (95% accuracy)  
✅ Property listings & search  
✅ Interactive maps  
✅ 24/7 AI chatbot  
✅ Secure authentication  
✅ User dashboard  
✅ Real-time analytics  
✅ Responsive design  

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/name`
3. Commit changes: `git commit -m "feat: description"`
4. Push to branch: `git push origin feature/name`
5. Open Pull Request

See `CONTRIBUTING.md` for detailed guidelines.

---

## 📞 Support

- **Issues**: Open a GitHub issue
- **Email**: support@realestateai.com
- **Documentation**: Check README.md and docs

---

## 📄 License

MIT License - See `LICENSE` file for details

---

**Last Updated**: December 2, 2025  
**Node.js**: 14+  
**Python**: 3.8+  
**React**: 18.3.1  
**Flask**: 3.0.3
