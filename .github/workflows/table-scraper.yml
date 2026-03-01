name: Table Sum Scraper

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  scrape-tables:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: 23f3002949@ds.study.iitm.ac.in - Run Playwright table scraper
        run: npm run scrape
