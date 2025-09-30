import React, { useRef } from 'react'

const prefixos = [
  "Carmesim", "das Sombras", "de Ferro", "Poderoso", "do Trovão",
  "Fantasma", "de Prata", "Dourado", "Cósmico", "Sombrio",
  "Renegado", "Futebolista", "Gélido", "Tempestuoso", "Flamejante",
  "Lunar", "Aço", "Veloz", "Selvagem", "Caótico",
  "Luminoso", "Abissal", "Rochoso", "Oceânico", "Nebuloso",
  "Noturno", "Solar", "Venenoso", "Eterno", "Infinito"
];

const sufixos = [
  "Falcão", "Cavaleiro", "Morcego", "Pantera", "Patrulheiro",
  "Dragão", "Espectro", "Guerreiro", "Titã", "Espírito",
  "Colosso", "Ronaldinho", "Assassino", "Guardião", "Vigilante",
  "Sentinela", "Caçador", "Gladiador", "Magnata", "Mago",
  "Fênix", "Lobo", "Tigre", "Ciclone", "Vórtice",
  "Samurai", "Arauto", "Forasteiro", "Pirata", "Monarca"
];

function nomeAleatorio() {
  const suf = prefixos[Math.floor(Math.random() * prefixos.length)]
  const pre = sufixos[Math.floor(Math.random() * sufixos.length)]
  return `${pre} ${suf}`
}

export default function GeradorHerois({ onGenerate }) {
  const buttonRef = useRef(null) // useRef aqui <------

  const handleClick = () => {
    const nome = nomeAleatorio()
    onGenerate(nome)
    buttonRef.current.focus() 
  }

  return (
    <div className="gerador">
      <button ref={buttonRef} onClick={handleClick}>
        Gerar Novo Herói
      </button>
    </div>
  )
}
