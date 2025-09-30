import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import GeradorHerois from './components/GeradorHerois'
import ListaHerois from './components/ListaHerois'
import './App.css'

function App() {
  const [herois, setherois] = useState([])// useState aqui <---------

  // localStorage -> armazenamento 
  useEffect(() => {
    const salvar = localStorage.getItem('nome_herois_1')
    if (salvar) setherois(JSON.parse(salvar))
  }, [])

  // salvar
  useEffect(() => { //useEffect aqui <-----
    localStorage.setItem('nome_herois_1', JSON.stringify(herois))
  }, [herois])

  const AdicionarHeroi = (nome) => {
    const novoHeroi = { id: Date.now(), nome }
    setherois(prev => [novoHeroi, ...prev])
  }

  const RemoverHeroi = (id) => {
    setherois(prev => prev.filter(h => h.id !== id))
  }

  return (
    <div className="app">
      <Header />
      <main>
        <GeradorHerois onGenerate={AdicionarHeroi} />
        <ListaHerois herois={herois} onRemove={RemoverHeroi} />
      </main>
    </div>
  )
}

export default App
