# 🎸 BandSite Project

A dynamic band website featuring live show dates and an interactive comment section, built with Vanilla JavaScript and integrated with a REST API.

## 🌟 Screenshots

[Project Screenshot - Landing Page](./assets/screenshots/Band%20Site%20-%20Main%20Page.png)

[Project Screenshot - Shows Page](./assets/screenshots/Band%20Site%20-%20Shows%20Page.png)

## ⭐ Features

- Dynamic comment section with real-time updates
- Live show dates populated from API
- DOM manipulation using Vanilla JavaScript
- RESTful API integration
- Responsive design for all devices

## 💻 Technologies Used

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Sass](https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-671DDF?style=flat-square&logo=axios&logoColor=white)

## 📖 Project Description

BandSite was developed during my studies at BrainStation, showcasing front-end development skills and API integration. The project demonstrates:

- Vanilla JavaScript DOM manipulation
- REST API integration using Axios
- Dynamic content rendering
- Modern ES6+ JavaScript practices
- Responsive design implementation
- Component-based architecture

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/Ingy10/kyle-ingham-bandsite.git
```

2. Navigate to project directory:
```bash
cd kyle-ingham-bandsite
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory and add your API key:
```env
API_KEY=your_api_key_here
```

5. Open `index.html` in your browser to view the website

## 🌐 API Integration

The project uses a REST API hosted at `https://unit-2-project-api-25c1595833b2.herokuapp.com/`

### API Class Usage
```javascript
const api = new BandSiteApi('your-api-key');
```

## 📱 Pages & Features

### Home Page
- Dynamic comment section
- Real-time comment posting
- Comment timestamp formatting
- User interaction features

### Shows Page
- Dynamically populated show dates
- Interactive ticket purchase interface
- Responsive table design

## 🔨 Project Structure

```
bandsite/
│
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   ├── logos/
│
├── scripts/
│   ├── band-site-api.js
│   ├── index-page.js
│   └── build-shows-page.js
│
├── styles/
│   ├── bio.scss
│   ├── shows.scss
│   └── partials/
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _global.scss
│       ├── _keyframes.scss
│       └── _fonts.scss
│
├── pages/
│   ├── shows.html
│
├── .gitignore
└── index.html
```

## 🎯 Key Functionality

### Comment Section
- Add new comments
- Display existing comments
- Sort by timestamp
- Form validation
- Real-time updates

### Show Dates
- Dynamic data fetching
- Interactive table rows
- Mobile-responsive design

## 🙏 Acknowledgments

- BrainStation for project guidance and support
- [API Provider](https://unit-2-project-api-25c1595833b2.herokuapp.com/) for the backend services

---

Made with ❤️ by Kyle Ingham
