# WEB103 Project 2 - Listicle Part 2

Submitted by: **Anand Ramaswamy**

About this web app: **A beautiful coffee shop directory powered by PostgreSQL database, featuring search functionality, dynamic data loading, and professional project structure.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
- [x] **Dynamic data loading from database with RESTful API endpoints**
- [x] **Professional project structure with client/server separation**
- [x] **Comprehensive error handling and loading states**

The following **stretch** features are implemented:

- [x] **Search functionality** - Real-time search by coffee shop name or location
- [x] **Loading states** - Smooth loading indicators for better UX
- [x] **Professional database schema** - Comprehensive table structure with proper indexing
- [x] **Environment-based configuration** - Secure database connection management

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm

### PostgreSQL Setup

**Install PostgreSQL:**
```bash
# On macOS with Homebrew
brew install postgresql
brew services start postgresql

# On Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**Create database:**
```bash
# Create database
createdb listicle_db
```

### Installation

1. **Clone and setup:**
```bash
git clone https://github.com/anandramz/Listicle.git
cd Listicle
npm install
```

2. **Configure environment:**
```bash
# Copy environment variables
cp env.example .env

# Edit .env with your database credentials:
# PGUSER=postgres
# PGPASSWORD=your_password
# PGHOST=localhost
# PGPORT=5432
# PGDATABASE=listicle_db
```

3. **Initialize database:**
```bash
# First time setup
npm run init-db

# Or reset database (drops and recreates)
npm run reset-db
```

4. **Start the server:**
```bash
npm start
```

5. **Visit:** `http://localhost:3000`

## Video Walkthrough

**Note: GIF walkthrough will be added here showing:**
- Database connection and initialization
- Dynamic data loading from PostgreSQL
- Search functionality
- Detail page navigation
- Error handling

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [Kap](https://getkap.co/) for macOS

## Notes

### Key Improvements from Part 1:
1. **Database Integration** - Moved from static data to PostgreSQL database
2. **Professional Structure** - Organized client/server separation following best practices
3. **Search Functionality** - Added real-time search by name and location
4. **API Architecture** - RESTful endpoints for data access
5. **Error Handling** - Comprehensive error management and user feedback
6. **Loading States** - Better UX with loading indicators

### Technical Challenges:
- **Database Connection** - Handled SSL/TLS configuration for different environments
- **ES6 Modules** - Properly configured for both frontend and backend
- **File Organization** - Restructured project to follow professional conventions
- **Error Handling** - Implemented graceful error handling throughout the application

### Database Schema:
The `coffee_shops` table includes comprehensive fields:
- Primary key with auto-increment
- Unique shop identifiers
- Rating, price range, and specialties
- Boolean fields for amenities (WiFi, outdoor seating)
- Proper indexing for search functionality

## License

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
