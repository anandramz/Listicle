import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeDatabase } from './config/init.js';
import coffeeshopsRouter from './routes/coffeeshops.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(join(__dirname, '../client/src')));

// API Routes
app.use('/api/coffeeshops', coffeeshopsRouter);

// Serve static files and handle client-side routing
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../client/src/index.html'));
});

app.get('/coffeeshops/:id', (req, res) => {
  res.sendFile(join(__dirname, '../client/src/detail.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '../client/src/404.html'));
});

// Initialize database and start server
async function startServer() {
    try {
        await initializeDatabase();
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
            console.log(`📊 Database connected and initialized`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();
