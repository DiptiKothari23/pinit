import logo from "./assets/pinit-logo.png"
import { useState, useEffect } from "react"
import Grid from "./components/Grid"
import "./App.css"

function App() {
  const [destinations, setDestinations] = useState([])
  const [filtered, setFiltered] = useState([])
  const [selected, setSelected] = useState(null)
  const [itinerary, setItinerary] = useState(null)
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState([])

  const [form, setForm] = useState({
    duration: "",
    interests: ""
  })

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then(res => res.json())
      .then(data => {
        setDestinations(data)
        setFiltered(data)
      })
  }, [])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("saved") || "[]")
    setSaved(stored)
  }, [])

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(saved))
  }, [saved])

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase()
    setFiltered(
      destinations.filter(d =>
        d.title.toLowerCase().includes(value)
      )
    )
  }

  const toggleSave = (item) => {
    setSaved(prev => {
      const exists = prev.find(d => d._id === item._id)
      return exists
        ? prev.filter(d => d._id !== item._id)
        : [...prev, item]
    })
  }

  const generateItinerary = async () => {
    setLoading(true)
    setItinerary(null)

    const res = await fetch("http://localhost:5000/api/itinerary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destination: selected.title,
        duration: form.duration,
        interests: form.interests.split(",")
      })
    })

    const data = await res.json()
    setItinerary(data.itinerary)
    setLoading(false)
  }

  return (
    <div className="container">

      {/* ✅ FIXED HEADER */}
      <div className="header">
        <img src={logo} className="logo" alt="PinIt logo" />
        <h1>PinIt</h1>
      </div>

      {!selected && (
        <div className="search-bar">
          <input
            placeholder="Search destinations..."
            onChange={handleSearch}
            autoFocus
          />
        </div>
      )}

      {selected ? (
        <div className="detail">

          <button
            className="back-btn"
            onClick={() => {
              setSelected(null)
              setItinerary(null)
            }}
          >
            ← Back
          </button>

          <h2 className="detail-title">{selected.title}</h2>

          <button
            className="save-btn"
            onClick={() => toggleSave(selected)}
          >
            {saved.find(d => d._id === selected._id)
              ? "★ Saved"
              : "☆ Save"}
          </button>

          <div className="gallery">
            {selected.images.map((img, i) => (
              <img key={i} src={img} loading="lazy" />
            ))}
          </div>

          <div className="planner">
            <input
              placeholder="Days"
              onChange={e =>
                setForm({ ...form, duration: e.target.value })
              }
            />

            <input
              placeholder="Interests (food, culture)"
              onChange={e =>
                setForm({ ...form, interests: e.target.value })
              }
            />

            <button onClick={generateItinerary}>
              {loading ? "Generating..." : "Generate"}
            </button>

            {loading && (
              <div className="loading">✨ Planning...</div>
            )}
          </div>

          {itinerary && (
            <div className="itinerary">
              {itinerary.map((day, i) => (
                <div key={i} className="day-card">
                  <h3>Day {day.day}</h3>
                  <ul>
                    {day.plan.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

        </div>
      ) : (
        <>
          {saved.length > 0 && (
            <div className="saved-section">
              <h2>Saved</h2>
              <Grid
                data={saved}
                onClick={setSelected}
                saved={saved}
                toggleSave={toggleSave}
              />
            </div>
          )}

          <Grid
            data={filtered}
            onClick={setSelected}
            saved={saved}
            toggleSave={toggleSave}
          />
        </>
      )}
    </div>
  )
}

export default App