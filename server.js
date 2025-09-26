const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample data for coffee shops
const coffeeShops = [
  {
    id: 'bluebottle',
    name: 'Blue Bottle Coffee',
    location: '123 Main St, Downtown',
    rating: 4.8,
    priceRange: '$$',
    specialties: ['Single Origin', 'Cold Brew', 'Pastries'],
    hours: '7:00 AM - 6:00 PM',
    description: 'A minimalist coffee experience with carefully sourced beans and expert brewing techniques.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400',
    wifi: true,
    outdoorSeating: true
  },
  {
    id: 'stumptown',
    name: 'Stumptown Coffee Roasters',
    location: '456 Oak Ave, Arts District',
    rating: 4.6,
    priceRange: '$$',
    specialties: ['Espresso', 'Pour Over', 'Coffee Beans'],
    hours: '6:30 AM - 8:00 PM',
    description: 'Pioneers of the third wave coffee movement, known for their exceptional roasting and brewing.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
    wifi: true,
    outdoorSeating: false
  },
  {
    id: 'intelligentsia',
    name: 'Intelligentsia Coffee',
    location: '789 Pine St, Midtown',
    rating: 4.7,
    priceRange: '$$$',
    specialties: ['Direct Trade', 'Latte Art', 'Seasonal Menu'],
    hours: '6:00 AM - 7:00 PM',
    description: 'Direct trade coffee with a focus on sustainability and exceptional quality.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    wifi: true,
    outdoorSeating: true
  },
  {
    id: 'philz',
    name: 'Philz Coffee',
    location: '321 Elm St, University Area',
    rating: 4.5,
    priceRange: '$',
    specialties: ['Custom Blends', 'Mint Mojito Iced Coffee', 'Friendly Service'],
    hours: '5:30 AM - 9:00 PM',
    description: 'One cup at a time, one person at a time - personalized coffee experience.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400',
    wifi: true,
    outdoorSeating: true
  },
  {
    id: 'verve',
    name: 'Verve Coffee Roasters',
    location: '654 Maple Dr, Westside',
    rating: 4.9,
    priceRange: '$$',
    specialties: ['Farm Direct', 'Espresso', 'Pastries'],
    hours: '6:00 AM - 6:00 PM',
    description: 'Farm-direct coffee with a focus on sustainability and exceptional flavor profiles.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    wifi: true,
    outdoorSeating: false
  }
];

// Middleware
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route to get coffee shop data
app.get('/api/coffeeshops/:id', (req, res) => {
  const shop = coffeeShops.find(s => s.id === req.params.id);
  if (shop) {
    res.json(shop);
  } else {
    res.status(404).json({ error: 'Coffee shop not found' });
  }
});

// Detail routes for each coffee shop
coffeeShops.forEach(shop => {
  app.get(`/coffeeshops/${shop.id}`, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'detail.html'));
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
