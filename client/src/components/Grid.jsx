function Grid({ data = [], onClick, saved = [], toggleSave }) {
  const isSaved = (item) => saved.some(d => d._id === item._id)

  return (
    <div className="grid">
      {data.map(item => {
        const savedState = isSaved(item)

        return (
          <div key={item._id} className="card">

            <img
              src={item.images?.[0]}
              onClick={() => onClick(item)}
              loading="lazy"
            />

            <button
              className={`heart ${savedState ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation()
                toggleSave(item)
              }}
            >
              {savedState ? "♥" : "♡"}
            </button>

            <div className="overlay">
              <span>{item.title}</span>
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default Grid