-- Insert coffee shop data
INSERT INTO coffee_shops (shop_id, name, location, rating, price_range, specialties, hours, description, image_url, wifi, outdoor_seating) VALUES
('bluebottle', 'Blue Bottle Coffee', '123 Main St, Downtown', 4.8, '$$', ARRAY['Single Origin', 'Cold Brew', 'Pastries'], '7:00 AM - 6:00 PM', 'A minimalist coffee experience with carefully sourced beans and expert brewing techniques.', 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400', true, true),

('stumptown', 'Stumptown Coffee Roasters', '456 Oak Ave, Arts District', 4.6, '$$', ARRAY['Espresso', 'Pour Over', 'Coffee Beans'], '6:30 AM - 8:00 PM', 'Pioneers of the third wave coffee movement, known for their exceptional roasting and brewing.', 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400', true, false),

('intelligentsia', 'Intelligentsia Coffee', '789 Pine St, Midtown', 4.7, '$$$', ARRAY['Direct Trade', 'Latte Art', 'Seasonal Menu'], '6:00 AM - 7:00 PM', 'Direct trade coffee with a focus on sustainability and exceptional quality.', 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400', true, true),

('philz', 'Philz Coffee', '321 Elm St, University Area', 4.5, '$', ARRAY['Custom Blends', 'Mint Mojito Iced Coffee', 'Friendly Service'], '5:30 AM - 9:00 PM', 'One cup at a time, one person at a time - personalized coffee experience.', 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400', true, true),

('verve', 'Verve Coffee Roasters', '654 Maple Dr, Westside', 4.9, '$$', ARRAY['Farm Direct', 'Espresso', 'Pastries'], '6:00 AM - 6:00 PM', 'Farm-direct coffee with a focus on sustainability and exceptional flavor profiles.', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', true, false);
