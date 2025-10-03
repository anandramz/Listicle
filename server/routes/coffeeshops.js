import express from 'express';
import { pool } from '../config/database.js';

const router = express.Router();

// Get all coffee shops
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM coffee_shops ORDER BY rating DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching coffee shops:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get coffee shop by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM coffee_shops WHERE shop_id = $1', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Coffee shop not found' });
        }
        
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching coffee shop:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Search coffee shops by name (stretch feature)
router.get('/search/:query', async (req, res) => {
    try {
        const { query } = req.params;
        const searchTerm = `%${query.toLowerCase()}%`;
        
        const result = await pool.query(
            'SELECT * FROM coffee_shops WHERE LOWER(name) LIKE $1 OR LOWER(location) LIKE $1 ORDER BY rating DESC',
            [searchTerm]
        );
        
        res.json(result.rows);
    } catch (error) {
        console.error('Error searching coffee shops:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
