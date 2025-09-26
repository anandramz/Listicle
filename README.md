# ☕ Best Local Coffee Shops - Listicle

A beautiful web application showcasing the best coffee shops in your city, built with Express.js and styled with Picocss.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop and mobile
- **Interactive Cards** - Hover effects and smooth animations
- **Detailed Views** - Click any coffee shop to see full details
- **Modern Styling** - Clean, professional design with Picocss
- **404 Handling** - Custom error pages for better UX

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Styling**: Picocss framework
- **Images**: Unsplash (high-quality coffee shop photos)

## 📁 Project Structure

```
listicle/
├── server.js          # Express server with routing
├── package.json       # Dependencies and scripts
├── public/
│   ├── index.html     # Homepage with coffee shop list
│   ├── detail.html    # Dynamic detail page template
│   ├── 404.html       # Custom 404 error page
│   └── styles.css      # Custom styling with Picocss
└── README.md          # This file
```

## 🎯 Coffee Shop Data

Each coffee shop includes:
- **Name** - Coffee shop name
- **Location** - Full address
- **Rating** - Star rating (4.5-4.9)
- **Price Range** - $, $$, or $$$
- **Specialties** - Unique offerings
- **Hours** - Operating hours
- **Description** - Detailed description
- **Image** - High-quality photos
- **Amenities** - WiFi and outdoor seating info

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anandramz/Listicle.git
cd Listicle
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📱 Available Routes

- `http://localhost:3000/` - Homepage with all coffee shops
- `http://localhost:3000/coffeeshops/bluebottle` - Blue Bottle Coffee details
- `http://localhost:3000/coffeeshops/stumptown` - Stumptown Coffee details
- `http://localhost:3000/coffeeshops/intelligentsia` - Intelligentsia Coffee details
- `http://localhost:3000/coffeeshops/philz` - Philz Coffee details
- `http://localhost:3000/coffeeshops/verve` - Verve Coffee details
- Any other route → Custom 404 page

## 🎨 Features in Detail

### Homepage
- Grid layout of coffee shop cards
- Hover animations and effects
- Click anywhere on card to view details
- Responsive design for all screen sizes

### Detail Pages
- Full coffee shop information
- High-quality images
- Rating and price information
- Specialties and amenities
- Back navigation

### 404 Page
- Custom error handling
- Helpful navigation back to main page
- Links to popular coffee shops

## 🔧 Development

### Scripts
- `npm start` - Start the server
- `npm run dev` - Start the server (alias)

### Adding New Coffee Shops
To add new coffee shops, edit the `coffeeShops` array in `server.js` and add corresponding routes.

## 📝 Requirements Met

✅ Web server to handle incoming requests  
✅ Routes and request handlers using Express  
✅ HTML, CSS, and JavaScript without frontend framework  
✅ Displays a title  
✅ At least five unique list items with three displayed attributes  
✅ Clickable items with detailed views  
✅ Unique endpoints for each detail view  
✅ Appropriate 404 page for undefined routes  
✅ Styled using Picocss  

## 🎯 Stretch Features

- **Card-based layout** instead of plain lists
- **Hover animations** and smooth transitions
- **Responsive design** for all devices
- **Rich data attributes** with ratings and amenities
- **Interactive elements** with click handlers

## 📄 License

This project is part of a coding bootcamp assignment.

## 👨‍💻 Author

Created as part of Week 1, Project 1 - Listicle Part 1

---

*Ready for Unit 2 database integration!* 🚀
