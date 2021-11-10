import React from "react"

const Card = (props) => {
  const { cardTitle, description, cardImage } = props
  return (
    <article className="card-item">
      <h2>{cardTitle}</h2>
      <p>{description}</p>
      <img src={cardImage} alt={cardTitle} />
    </article>
  )
}

export default Card
