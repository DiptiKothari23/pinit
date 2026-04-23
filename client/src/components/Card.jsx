function Card({ title, img, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt={title} />

      <div className="overlay">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Card