import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pool } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function resetDatabase() {
    try {
        console.log('🔄 Resetting database...');
        
        // Test connection first
        console.log('🔗 Testing database connection...');
        await pool.query('SELECT NOW()');
        console.log('✅ Database connection successful');
        
        // Drop existing table if it exists
        await pool.query('DROP TABLE IF EXISTS coffee_shops CASCADE;');
        console.log('🗑️  Dropped existing coffee_shops table');
        
        // Read and execute schema
        const schemaSQL = readFileSync(join(__dirname, 'schema.sql'), 'utf8');
        await pool.query(schemaSQL);
        console.log('✅ Database schema created successfully');
        
        // Read and execute seed data
        const seedSQL = readFileSync(join(__dirname, 'seed.sql'), 'utf8');
        await pool.query(seedSQL);
        console.log('✅ Database seeded successfully');
        
        console.log('🎉 Database reset complete!');
        
    } catch (error) {
        console.error('❌ Error resetting database:', error);
        
        // Provide helpful error messages
        if (error.code === 'ECONNREFUSED') {
            console.error('💡 Make sure PostgreSQL is running on your system');
            console.error('   On macOS: brew services start postgresql');
            console.error('   On Ubuntu: sudo systemctl start postgresql');
        } else if (error.code === '28P01') {
            console.error('💡 Authentication failed - check your database credentials');
            console.error('   Update your .env file with correct username/password');
        } else if (error.code === '3D000') {
            console.error('💡 Database does not exist - create it first:');
            console.error('   createdb listicle_db');
        }
        
        throw error;
    } finally {
        await pool.end();
        console.log('📊 Database connection closed');
    }
}

// Run the reset if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    resetDatabase().catch(error => {
        console.error('Failed to reset database:', error);
        process.exit(1);
    });
}

export { resetDatabase };
