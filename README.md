# 📚 BookDiscoveryApp

A React Native mobile application for discovering, searching, and saving books using the OpenLibrary API.

## 🚀 Overview

BookDiscoveryApp allows users to explore books, view details, and save favorites. The goal of the project was not only to build functionality, but to focus on clean architecture, separation of concerns, and scalable code structure.

## ✨ Features

- 🔍 Search for books via OpenLibrary API  
- 📖 View book details  
- ⭐ Save and manage favorite books  
- ⚡ Handle asynchronous data and loading states  
- 📱 Mobile-first UI built with React Native  

## 🛠️ Tech Stack

- React Native  
- TypeScript  
- JavaScript (ES6+)  
- OpenLibrary API  
- Tailwind (NativeWind)  

## 🧠 Architecture & Approach

This project focuses on writing maintainable and scalable code:

- Separation of concerns using a **service layer** for API calls  
- Component-based architecture  
- Reusable and structured UI components  
- Focus on **DRY principles**  
- Handling **edge cases** such as empty responses and slow API calls  

## ⚙️ Installation & Setup


```bash
git clone https://github.com/MattiasKopparberg/BookDiscoveryApp.git
cd BookDiscoveryApp
```

Install dependencies:
```bash
npm install
```
Start the app:
```bash

npx expo start
```
```bash
📂 Project Structure
/src
  /components     # Reusable UI components
  /services       # API logic (data fetching)
  /screens        # App screens
  /utils          # Helper functions
```

# 🚧 Current Status
Core functionality complete
Favorites and info pages implemented
UI improvements and styling still in progress

# 📚 What I Learned
Structuring a React Native app for scalability
Managing async data and API integrations
Separating logic from UI using a service layer
Thinking beyond "it works" → focusing on clean, maintainable code

# 📌 Future Improvements
Improve UI/UX and styling consistency
Add better error handling and loading states
Enhance favorites functionality
Optimize performance


# 👤 Author

Mattias Kopparberg
GitHub
