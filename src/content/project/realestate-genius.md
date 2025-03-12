---
title: Real Estate Entry Genius
publishDate: 2019-03-05 00:00:00
projectType: Automation
img: /assets/RealEstateEntryGenius.webp
img_alt: RealEstate Genius Project Logo
githubCode: https://github.com/ORomero227/Real-Estate-Entry-Genius
description: |
  A Python script that automates real estate data entry by scraping property listings and filling out a Google Form with the extracted information.
tags:
  - Developer
---

This Python project leverages web scraping and web automation techniques to extract real estate listing information and automatically populate a Google Forms with the gathered data.

> Technologies Used

- **Python**
- **BeautifulSoup**
- **Selenium**
- **Google Forms**

> Features

- **Web Scraping**: Uses `BeautifulSoup` to scrape data from a Zillow clone website.
- **Web Automation**: Employs `Selenium` to automate data entry into a Google Form.
- **Data Extraction**: Collects links, prices, and addresses of real estate properties.
- **Form Filling**: Automatically fills out form fields with the extracted information.

> How It Works

1. The script retrieves the HTML of the real estate listings page.
2. It extracts the links, prices, and addresses of the listed properties.
3. Using `Selenium`, it opens a Google Form and fills it with the scraped data.
4. Submits the form and repeats the process for all listings.
