import React from 'react'

export default function Heroi({ heroi, onRemove }) {
  return (
    <li className="heroi">
      <span>{heroi.nome}</span>
      <button onClick={() => onRemove(heroi.id)}>✕</button>
    </li>
  )
}