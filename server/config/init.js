import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pool } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function initializeDatabase() {
    try {
        console.log('Initializing database...');
        
        // Read and execute schema
        const schemaSQL = readFileSync(join(__dirname, 'schema.sql'), 'utf8');
        await pool.query(schemaSQL);
        console.log('✅ Database schema created successfully');
        
        // Check if data already exists
        const result = await pool.query('SELECT COUNT(*) FROM coffee_shops');
        const count = parseInt(result.rows[0].count);
        
        if (count === 0) {
            // Read and execute seed data
            const seedSQL = readFileSync(join(__dirname, 'seed.sql'), 'utf8');
            await pool.query(seedSQL);
            console.log('✅ Database seeded successfully');
        } else {
            console.log('✅ Database already contains data, skipping seed');
        }
        
        console.log('🎉 Database initialization complete!');
    } catch (error) {
        console.error('❌ Error initializing database:', error);
        throw error;
    }
}

export { initializeDatabase };
