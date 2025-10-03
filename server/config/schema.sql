-- Create the coffee_shops table
CREATE TABLE IF NOT EXISTS coffee_shops (
    id SERIAL PRIMARY KEY,
    shop_id VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    rating DECIMAL(2,1) NOT NULL,
    price_range VARCHAR(10) NOT NULL,
    specialties TEXT[] NOT NULL,
    hours VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    wifi BOOLEAN DEFAULT false,
    outdoor_seating BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on shop_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_coffee_shops_shop_id ON coffee_shops(shop_id);

-- Create an index on name for search functionality
CREATE INDEX IF NOT EXISTS idx_coffee_shops_name ON coffee_shops(name);
