import dotenv from 'dotenv';
import pool from '../database.js';
import { coffeeShops } from '../data/coffeeShops.js';  // make sure coffeeShops.js exports with "export const coffeeShops = [...]"

dotenv.config();

async function createCoffeeShopsTable() {
  const createTableQuery = `
    DROP TABLE IF EXISTS coffee_shops;

    CREATE TABLE IF NOT EXISTS coffee_shops (
      id VARCHAR(50) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      rating DECIMAL(2,1) NOT NULL,
      price_range VARCHAR(10) NOT NULL,
      specialties TEXT[] NOT NULL,
      hours VARCHAR(100) NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      wifi BOOLEAN NOT NULL,
      outdoor_seating BOOLEAN NOT NULL
    );
  `;

  await pool.query(createTableQuery);
  console.log("✅ coffee_shops table created");
}

async function seedCoffeeShops() {
  for (const shop of coffeeShops) {
    const insertQuery = `
      INSERT INTO coffee_shops (
        id, name, location, rating, price_range, specialties, hours, description, image, wifi, outdoor_seating
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
    `;

    const values = [
      shop.id,
      shop.name,
      shop.location,
      shop.rating,
      shop.priceRange,     // JS camelCase -> SQL snake_case
      shop.specialties,    // array -> TEXT[]
      shop.hours,
      shop.description,
      shop.image,
      shop.wifi,
      shop.outdoorSeating  // JS camelCase -> SQL snake_case
    ];

    await pool.query(insertQuery, values);
    console.log(`✅ ${shop.name} added successfully`);
  }
  console.log("✅ coffee_shops table seeded");
}

async function reset() {
  try {
    await createCoffeeShopsTable();
    await seedCoffeeShops();
  } catch (err) {
    console.error("⚠️ Error resetting database:", err);
  } finally {
    pool.end(); // close pool so script exits
  }
}

reset();
