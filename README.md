# Crypto Asset Dashboard

## Overview

This project is a Crypto Asset Dashboard built with React, TypeScript, Tailwind CSS, and Chart.js. It fetches real-time cryptocurrency data from the CoinGecko API and displays it in a table with pagination. Each asset includes live price updates, market value, 24h price change, and a 24h sparkline chart. The dashboard highlights price changes with color indications (green for increase, red for decrease, and gray for no change).

## Features

- **API Integration**: Fetches asset data from the CoinGecko API.
- **Live Data Updates**: Utilizes `react-query` for live data fetching.
- **Price Change Highlighting**: Highlights price changes with flashing colors (green for increase, red for decrease, gray for no change).
- **Sparkline Charts**: Displays 24h sparkline charts with color indications (green for increase, red for decrease, gray for no change).
- **Pagination**: Implements pagination to navigate through the asset data.

## Technologies Used

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Chart.js**
- **React Query**
- **CoinGecko API**

## Getting Started

### Installation

1. Clone the repository:
   ```sh
    https://github.com/mervekara/merve-kara-bilira-study-case.git
    cd merve-kara-bilira-study-case
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```sh
   REACT_APP_BASE_URL=https://api.coingecko.com/api/v3
   REACT_APP_POLLING_TIME=60000 # Polling interval in milliseconds
   ```

### Running the Application

1. Start the development server:
   ```sh
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Live Link
https://merve-kara-bilira-study-case.vercel.app/

## Components

### `AssetTable`

Displays the table of cryptocurrency assets with pagination.

### ``

Displays an individual asset's information, including the name, price, market value, 24h change, and sparkline chart. Highlights price changes and updates dynamically.

### `ChartComponent`

Displays the 24h sparkline chart for each asset in AssetRow.

### `Pagination`

Handles pagination for the asset table, allowing navigation between different pages of data.

## Utilities

### `formatMarketValue`

Formats market value numbers for display.

### `formatNumber`

Formats price numbers for display.

### `highlightClass`

Determines the CSS class for highlighting price changes.

## Custom Hook

### `useCoinGeckoData`

Fetches cryptocurrency data from the CoinGecko API using React Query.

### `useAssetPriceFlash`

Flashes price changes by setting a highlight class for one second when the price updates.

## API

### `fetchData`

Fetches asset data from the CoinGecko API.

## Known Issues

### 429 Too Many Requests Error

When too many requests are sent to the CoinGecko API in a short period, a `429 Too Many Requests` error may occur. This error is handled by displaying an error message. In such cases, refreshing the page may be necessary. This is a known issue originating from CoinGecko's rate limiting.
