# Crypto Asset Dashboard

## Overview

This project is a Crypto Asset Dashboard built with React, TypeScript, Tailwind CSS, and Chart.js. It fetches real-time cryptocurrency data from the CoinGecko API and displays it in a table with pagination. Each asset includes live price updates, market value, 24h price change, and a 24h sparkline chart. The dashboard highlights price changes with color indications (green for increase, red for decrease, and gray for no change).

## Features

- **API Integration**: Fetches asset data from the CoinGecko API.
- **Live Data Updates**: Utilizes `react-query` for live data fetching and state management.
- **Price Change Highlighting**: Highlights price changes with flashing colors (green for increase, red for decrease, gray for no change).
- **Sparkline Charts**: Displays 24h sparkline charts with color indications (green for increase, red for decrease, gray for no change).
- **Pagination**: Implements pagination to navigate through the asset data.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type-safe development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Chart.js**: JavaScript library for creating charts.
- **React Query**: Data-fetching library for React.
- **CoinGecko API**: Cryptocurrency data API.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm

### Installation

1. Clone the repository:
   ```sh

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

## Components

### `AssetTable`

Displays the table of cryptocurrency assets with pagination.

### `AssetRow`

Displays an individual asset's information, including the name, price, market value, 24h change, and sparkline chart. Highlights price changes and updates dynamically.

### `ChartComponent`

Displays the 24h sparkline chart for each asset.

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

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- CoinGecko for providing the cryptocurrency data API.
- Chart.js for the charting library.
- Tailwind CSS for the styling framework.
- React Query for the data-fetching library.