# 🎬 Full Stack Movie App

A modern and responsive **Full Stack Movie Application** built using **React Native** for the frontend and integrated with the **TMDB (The Movie Database) API** as the backend.
This app allows users to explore popular, trending, and top-rated movies with rich details fetched in real time.

---

## 🚀 Features

* 🔍 **Search Movies:** Find your favorite movies by title.
* 🎞️ **Browse Categories:** Explore trending, popular, and top-rated films.
* 🧠 **Movie Details:** View overviews, ratings, release dates, and genres.
* 📱 **Responsive UI:** Optimized for all screen sizes.
* 💾 **Dynamic API Integration:** Data powered by [TMDB API](https://www.themoviedb.org/documentation/api).

---

## 🛠️ Tech Stack

**Frontend:**

* React Native
* JavaScript (ES6+)
* React Navigation
* Axios (for API calls)
* Styled Components / StyleSheet

**Backend:**

* TMDB REST API (External Service)

---

## ⚙️ Installation and Setup

Follow these steps to run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/fullstack-movie-app.git

# 2️⃣ Navigate to the project directory
cd fullstack-movie-app

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your TMDB API key:

You can obtain your API key from [TMDB API](https://www.themoviedb.org/settings/api).




## 📂 Folder Structure

```
FullStackMovieApp/
│
├── src/
│   ├── components/      # Reusable UI components
│   ├── screens/         # App screens (Home, Details, Search, etc.)
│   ├── navigation/      # Navigation setup
│   ├── api/             # TMDB API integration
│   ├── assets/          # Images and icons
│   └── App.js
│
├── package.json
├── .env
└── README.md
```

---

## 🧩 API Reference

**Base URL:**

```
https://api.themoviedb.org/3/
```

**Endpoints Used:**

* `/movie/popular`
* `/movie/top_rated`
* `/movie/upcoming`
* `/search/movie`

---

## 🧑‍💻 Author

**Akshat Saxena**
📧 saxena.akshat0405@gmail.com
🔗 https://www.linkedin.com/in/akshat-saxena-5b769230a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app 
💻 https://github.com/Akshat0403



## ⭐ Acknowledgments

* [TMDB API](https://www.themoviedb.org/documentation/api) for providing movie data
* React Native community for amazing open-source libraries

> If you like this project, don’t forget to ⭐ star the repo!
