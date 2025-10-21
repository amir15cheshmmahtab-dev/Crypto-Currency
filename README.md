# 💰 Crypto Market Tracker

A sleek and responsive web application built with **React** that fetches and displays real-time cryptocurrency data, including price, 24h change, and market capitalization, with a quick search functionality.

---

## ✨ Features

- **Real-Time Data:** Fetches up-to-date market data for the top 100 cryptocurrencies using the CoinGecko API.  
- **Search Functionality:** Allows users to filter coins instantly by name using a dynamic search input.  
- **Price Change Indicator:** Clearly displays 24-hour price changes with color-coded indicators (green for positive, red for negative).  
- **Clean UI:** Simple and organized table-like layout for easy reading of key metrics.  
- **Modular Architecture:** Built using React components (`Landing`, `Coin`, `Loader`) and CSS Modules for maintainable and scalable code.

---

## 🛠️ Technologies Used

- **React:** Frontend library for building the user interface.  
- **Axios:** Promise-based HTTP client for fetching data from the API.  
- **CoinGecko API:** The data source for cryptocurrency market information.  
- **CSS Modules:** For component-specific styling, preventing global style conflicts.

---

## 🚀 Getting Started

Follow these steps to get your local copy of the project up and running.

### Prerequisites

You must have **Node.js** and **npm** (or **yarn**) installed on your machine.

### Installation

Clone the repository:

```bash
### Install dependencies

npm install
# or
yarn install

###Run the development server

npm start
# or
yarn start

##📂 Project Structure
.
├── src/
│   ├── Components/
│   │   ├── Coin.js              # Renders individual coin data
│   │   ├── Coin.module.css      # Styles for Coin
│   │   ├── Landing.js           # Main page component (API calls, state, search)
│   │   ├── Landing.module.css   # Styles for Landing
│   │   └── Loader.js            # Loading spinner
│   ├── Services/
│   │   └── Api.js               # Handles data fetching logic (Axios/CoinGecko)
│   ├── App.js                   # Root component
│   └── index.js                 # Entry point
└── ...





