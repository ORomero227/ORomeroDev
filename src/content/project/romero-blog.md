---
title: Romero Blog
publishDate: 2019-12-01 00:00:00
img: /assets/RomeroBlogLogo.webp
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  Developed a web application enabling user registration, login, blog post management (CRUD operations), and commenting.
tags:
  - Developer
---

This is a simple blog application built with Flask. It allows users to register, log in, view and comment on blog posts, and for administrators (users with special permissions), it provides the ability to add, edit, and delete posts.

> Features

- **User Registration**: New users can sign up by providing their name, email, and password.
- **User Login**: Registered users can log in and comment on posts.
- **Blog Posts**: Admin users can add, edit, and delete blog posts.
- **Comments**: Users can add comments to each blog post.
- **User Authentication**: Implemented with Flask-Login to protect specific routes.

> Technologies Used

- **Backend**: Flask, SQLAlchemy, Flask-Login
- **Frontend**: HTML, Bootstrap5, Flask-CKEditor
- **Database**: SQLite
- **Environment**: Python, dotenv for managing environment variables
