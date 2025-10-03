// API functions for coffee shops data

export async function getAllCoffeeShops() {
    try {
        const response = await fetch('/api/coffeeshops');
        if (!response.ok) {
            throw new Error('Failed to fetch coffee shops');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching coffee shops:', error);
        throw error;
    }
}

export async function getCoffeeShopById(id) {
    try {
        const response = await fetch(`/api/coffeeshops/${id}`);
        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error('Failed to fetch coffee shop');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching coffee shop:', error);
        throw error;
    }
}

export async function searchCoffeeShops(query) {
    try {
        const response = await fetch(`/api/coffeeshops/search/${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Failed to search coffee shops');
        }
        return await response.json();
    } catch (error) {
        console.error('Error searching coffee shops:', error);
        throw error;
    }
}
