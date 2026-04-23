# PinIt ✈️📌

A Pinterest-style travel discovery platform where users explore destinations, save favorites, and generate personalized travel itineraries.

---

## 🚀 Features

* 🔍 **Search Destinations** — instant filtering
* 📌 **Save Locations** — persistent bookmarks (localStorage)
* 🖼️ **Masonry Grid UI** — Pinterest-style layout
* 🌍 **Destination Detail View** — image gallery + info
* 🧠 **AI Itinerary Generator (Mocked)** — dynamic trip plans
* ⚡ **Smooth UX** — animations, hover states, lazy loading

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* CSS (custom styling, masonry layout)

**Backend**

* Node.js
* Express
* MongoDB (Mongoose)

---

## 📁 Project Structure

```
pinit/
│
├── client/        # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   └── App.jsx
│
├── server/        # Express backend
│   ├── index.js
│   └── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone repo

```
git clone https://github.com/YOUR_USERNAME/pinit.git
cd pinit
```

---

### 2. Run backend

```
cd server
npm install
node index.js
```

---

### 3. Run frontend

```
cd client
npm install
npm run dev
```

---

### 4. Seed database

Open in browser:

```
http://localhost:5000/api/seed
```

---

## 🎯 Demo Flow

1. Browse destinations (masonry grid)
2. Search a city
3. Save a destination
4. Open detail page
5. Generate itinerary

---

## 💡 Concept

PinIt combines:

* visual discovery (Pinterest-style UI)
* personalization (saved places)
* planning (itinerary generation)

into a single travel experience.

---

## ⚠️ Notes

* Itinerary generation is mocked (no external API used)
* Images are sourced from Unsplash
* Designed for demo and concept validation

---

## 📌 Future Improvements

* Real AI integration (OpenAI / Gemini)
* User authentication
* Cloud database (MongoDB Atlas)
* Infinite scroll
* Dark mode

---

## 👤 Author

Dipti Kothari

---

## ⭐

If you like this project, consider starring the repo.

