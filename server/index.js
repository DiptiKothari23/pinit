const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

// CONNECT DB
mongoose.connect("mongodb://127.0.0.1:27017/pinit")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

// SCHEMA
const destinationSchema = new mongoose.Schema({
  title: String,
  images: [String]
})

const Destination = mongoose.model("Destination", destinationSchema)

// ROUTES
app.get("/", (req, res) => {
  res.send("API running")
})

app.get("/api/destinations", async (req, res) => {
  const data = await Destination.find()
  res.json(data)
})

// SEED DATA
app.get("/api/seed", async (req, res) => {
  try {
    await Destination.deleteMany({})

    const img = (id) =>
      `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`

    const data = [
      { title: "Paris", images: [img("photo-1502602898657-3e91760cbb34"), img("photo-1522092787789-2b2b4b1d9b5c"), img("photo-1543340713-8b3d5d7f0c61"), img("photo-1499510318569-1a3f3e9b7c2b"), img("photo-1526481280691-7f1a4b9b4b6f")] },
      { title: "Bali", images: [img("photo-1507525428034-b723cf961d3e"), img("photo-1506744038136-46273834b3fb"), img("photo-1518546305927-5a555bb7020d"), img("photo-1520975922284-9e0f0b0f8c1a"), img("photo-1526779259212-756e5f1b4a7f")] },
      { title: "Tokyo", images: [img("photo-1505069446780-4ef442b5207f"), img("photo-1526481280691-7f1a4b9b4b6f"), img("photo-1549692520-acc6669e2f0c"), img("photo-1498654896293-37aacf113fd9"), img("photo-1472214103451-9374bd1c798e")] },
      { title: "New York", images: [img("photo-1490578474895-699cd4e2cf59"), img("photo-1534430480872-3498386e7856"), img("photo-1500916434205-0c77489c6cf7"), img("photo-1468436139062-f60a71c5c892"), img("photo-1446776811953-b23d57bd21aa")] },
      { title: "London", images: [img("photo-1473959383414-4d0b6c3a1b4e"), img("photo-1469474968028-56623f02e42e"), img("photo-1488747279002-c8523379faaa"), img("photo-1467269204594-9661b134dd2b"), img("photo-1505761671935-60b3a7427bad")] },
      { title: "Rome", images: [img("photo-1526481280691-7f1a4b9b4b6f"), img("photo-1472214103451-9374bd1c798e"), img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1500534314209-a25ddb2bd429")] },
      { title: "Barcelona", images: [img("photo-1467269204594-9661b134dd2b"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1500375592092-40eb2168fd21"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500534314209-a25ddb2bd429")] },
      { title: "Amsterdam", images: [img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Bangkok", images: [img("photo-1472214103451-9374bd1c798e"), img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1500375592092-40eb2168fd21"), img("photo-1470770841072-f978cf4d019e")] },
      { title: "Singapore", images: [img("photo-1500530855697-b586d89ba3ee"), img("photo-1500375592092-40eb2168fd21"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500534314209-a25ddb2bd429"), img("photo-1501785888041-af3ef285b470")] },

      { title: "Sydney", images: [img("photo-1500530855697-b586d89ba3ee"), img("photo-1500375592092-40eb2168fd21"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500534314209-a25ddb2bd429"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Istanbul", images: [img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Cape Town", images: [img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429")] },
      { title: "Los Angeles", images: [img("photo-1469474968028-56623f02e42e"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429")] },
      { title: "San Francisco", images: [img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Venice", images: [img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429")] },
      { title: "Prague", images: [img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Vienna", images: [img("photo-1500530855697-b586d89ba3ee"), img("photo-1500375592092-40eb2168fd21"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500534314209-a25ddb2bd429"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Berlin", images: [img("photo-1500530855697-b586d89ba3ee"), img("photo-1500375592092-40eb2168fd21"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500534314209-a25ddb2bd429"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Zurich", images: [img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429")] },

      { title: "Geneva", images: [img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429")] },
      { title: "Santorini", images: [img("photo-1505761671935-60b3a7427bad"), img("photo-1508050919630-b135583b29ab"), img("photo-1516483638261-f4dbaf036963"), img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee")] },
      { title: "Mykonos", images: [img("photo-1505761671935-60b3a7427bad"), img("photo-1508050919630-b135583b29ab"), img("photo-1516483638261-f4dbaf036963"), img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee")] },
      { title: "Maldives", images: [img("photo-1507525428034-b723cf961d3e"), img("photo-1518546305927-5a555bb7020d"), img("photo-1506744038136-46273834b3fb"), img("photo-1500375592092-40eb2168fd21"), img("photo-1470770841072-f978cf4d019e")] },
      { title: "Phuket", images: [img("photo-1507525428034-b723cf961d3e"), img("photo-1506744038136-46273834b3fb"), img("photo-1518546305927-5a555bb7020d"), img("photo-1500375592092-40eb2168fd21"), img("photo-1470770841072-f978cf4d019e")] },
      { title: "Goa", images: [img("photo-1507525428034-b723cf961d3e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1470770841072-f978cf4d019e"), img("photo-1506744038136-46273834b3fb"), img("photo-1518546305927-5a555bb7020d")] },
      { title: "Manali", images: [img("photo-1501785888041-af3ef285b470"), img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21")] },
      { title: "Leh", images: [img("photo-1501785888041-af3ef285b470"), img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21")] },
      { title: "Jaipur", images: [img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Udaipur", images: [img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Delhi", images: [img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Mumbai", images: [img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1501785888041-af3ef285b470")] },

      { title: "Kerala", images: [img("photo-1500375592092-40eb2168fd21"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1500534314209-a25ddb2bd429"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Hawaii", images: [img("photo-1507525428034-b723cf961d3e"), img("photo-1506744038136-46273834b3fb"), img("photo-1518546305927-5a555bb7020d"), img("photo-1500375592092-40eb2168fd21"), img("photo-1470770841072-f978cf4d019e")] },
      { title: "Reykjavik", images: [img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429")] },
      { title: "Oslo", images: [img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429")] },
      { title: "Stockholm", images: [img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429")] },
      { title: "Helsinki", images: [img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429")] },
      { title: "Copenhagen", images: [img("photo-1501785888041-af3ef285b470"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1500534314209-a25ddb2bd429")] },
      { title: "Seoul", images: [img("photo-1505069446780-4ef442b5207f"), img("photo-1526481280691-7f1a4b9b4b6f"), img("photo-1549692520-acc6669e2f0c"), img("photo-1498654896293-37aacf113fd9"), img("photo-1472214103451-9374bd1c798e")] },
      { title: "Busan", images: [img("photo-1505069446780-4ef442b5207f"), img("photo-1526481280691-7f1a4b9b4b6f"), img("photo-1549692520-acc6669e2f0c"), img("photo-1498654896293-37aacf113fd9"), img("photo-1472214103451-9374bd1c798e")] },
      { title: "Beijing", images: [img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Shanghai", images: [img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Hong Kong", images: [img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1501785888041-af3ef285b470")] },
      { title: "Macau", images: [img("photo-1500534314209-a25ddb2bd429"), img("photo-1500530855697-b586d89ba3ee"), img("photo-1470770841072-f978cf4d019e"), img("photo-1500375592092-40eb2168fd21"), img("photo-1501785888041-af3ef285b470")] }
    ]

    await Destination.insertMany(data)
    res.send("Seeded 50+ destinations")
  } catch (err) {
    console.error(err)
    res.status(500).send("Seeding failed")
  }
})
// MOCK AI (stable)
app.post("/api/itinerary", (req, res) => {
  const { destination, duration, interests } = req.body

  const days = Number(duration) || 3

  const activities = {
    food: ["Street food tour", "Cafe hopping", "Fine dining"],
    culture: ["Museum visit", "Historic walk", "Local markets"],
    nature: ["Beach day", "Hiking", "Sunset viewpoint"]
  }

  let itinerary = []

  for (let i = 1; i <= days; i++) {
    let plan = ["Explore city", "Try local food"]

    if (interests) {
      interests.forEach(tag => {
        const key = tag.trim().toLowerCase()
        if (activities[key]) {
          plan.push(activities[key][i % 3])
        }
      })
    }

    itinerary.push({ day: i, plan })
  }

  res.json({ itinerary })
})

// START
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000")
})