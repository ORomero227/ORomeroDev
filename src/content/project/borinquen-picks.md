---
title: Borinquen Picks
publishDate: 2025-02-16 00:00:00
projectType: Mobile App
img: /assets/BorinquenPicksLogo.webp
img_alt: Borinquen Picks Project Logo
githubCode: https://github.com/ORomero227/BorinquenPicks
images:
  - url: /assets/BorinquenPicksLogo.webp
  - url: /assets/project_images/borinquenPicks_image_1.webp
  - url: /assets/project_images/borinquenPicks_image_2.webp
  - url: /assets/project_images/borinquenPicks_image_3.webp
description: |
  Developed an Android app recommending Puerto Rican attractions.
tags:
  - Developer
technologies: ["Kotlin", "Jetpack Compose", "Firebase"]
shortDescription: "An Android app that recommends the best places in Puerto Rico, categorized for easy browsing. It features a modern design, supports dark and light modes, and loads images seamlessly."
---

Borinquen Picks is an **Android** application built with **Jetpack Compose** that provides recommendations for various places in Puerto Rico. The app categorizes recommendations, such as restaurants, and displays the best options available. The UI supports both dark and light themes, and images are loaded asynchronously from **Firebase Storage** using the **Coil** library.

> Technologies Used

- **Kotlin**
- **Jetpack Compose**
- **MVVM Architecture**
- **Firebase Storage** (for hosting images)
- **Firebase Realtime Database** (for hosting the content data)
- **Coil** (for asynchronous image loading)
- **Material Design** (for UI components)

> Features:

- **Category Selection**:
  The app displays a menu with various categories (e.g., restaurants, attractions).
- **Recommendation List**:
  When a category is selected, the app navigates to a screen displaying a list of recommendations for that category.
- **Recommendation Details**:
  Selecting a recommendation opens a detailed screen, showing more information about the selected place, including images loaded asynchronously from Firebase Storage.

> Usage

Borinquen Picks allows users to browse categorized recommendations effortlessly. The app follows a state-based navigation approach, ensuring smooth transitions between different screens.
