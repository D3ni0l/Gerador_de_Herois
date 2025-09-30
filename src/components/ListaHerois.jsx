import React from 'react'
import Heroi from './Heroi'

export default function ListaHerois({ herois, onRemove}) {
  if (!herois.length) return <p className="empty">Nenhum herói gerado ainda.</p>

  return (
    <ul className="lista-herois">
      {herois.map(heroi => (
        <Heroi key={heroi.id} heroi={heroi} onRemove ={onRemove} />
      ))}
    </ul>
  )
}