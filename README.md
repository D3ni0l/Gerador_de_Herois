# Gerador de Nomes de Super-Heróis 🦸

Um aplicativo simples em **React + Vite** que gera nomes de super-heróis aleatórios.

---

## Funcionalidades

- Gerar nomes de super-heróis aleatórios combinando **prefixos** e **sufixos**.
- Adicionar novos heróis à lista.
- Remover heróis individualmente.
- Interface simples e responsiva com estilo moderno.

---

## Tecnologias

- **React** – Biblioteca para criação da interface.
- **Vite** – Bundler rápido para desenvolvimento.
- **JavaScript** – Lógica de geração de nomes e manipulação de estado.
- **CSS** – Estilos customizados e responsivos.

---


## Estrutura do Projeto

```bash

src/
│
├─ components/
│ ├─ Header.jsx # Cabeçalho do app
│ ├─ GeradorHerois.jsx # Botão para gerar nomes aleatórios
│ ├─ ListaHerois.jsx # Lista de heróis gerados
│ └─ Heroi.jsx # Item individual da lista
│
├─ App.jsx # Componente principal
├─ main.jsx # Renderiza o app
├─ index.css # Estilos globais
└─ App.css # Estilos do app

```

## Como Rodar

1. Clone o repositório:
git clone <url-do-repo>
cd Gerador_de_Herois

2. Instale as dependências:
npm install

3. Rode o projeto em modo de desenvolvimento:
npm run dev

4. Abra o navegador em:
http://localhost:5173


##Como Funciona a Geração de Nomes

O app utiliza duas listas:

```bash

const prefixos = [
  "Carmesim", "das Sombras", "de Ferro", "Poderoso", "do Trovão",
  "Fantasma", "de Prata", "Dourado", "Cósmico", "Sombrio",
  "Renegado", "Futebolista", "Gélido", "Tempestuoso", "Flamejante",
  "Lunar", "Aço", "Veloz", "Selvagem", "Caótico",
  "Luminoso", "Abissal", "Rochoso", "Oceânico", "Nebuloso",
  "Noturno", "Solar", "Venenoso", "Eterno", "Infinito"
];

```

```bash
const sufixos = [
  "Falcão", "Cavaleiro", "Morcego", "Pantera", "Patrulheiro",
  "Dragão", "Espectro", "Guerreiro", "Titã", "Espírito",
  "Colosso", "Ronaldinho", "Assassino", "Guardião", "Vigilante",
  "Sentinela", "Caçador", "Gladiador", "Magnata", "Mago",
  "Fênix", "Lobo", "Tigre", "Ciclone", "Vórtice",
  "Samurai", "Arauto", "Forasteiro", "Pirata", "Monarca"
];

```

A cada clique no botão “Gerar Herói”, o app escolhe aleatoriamente um prefixo e um sufixo e adiciona à lista.


```bash
Desenvolvido por Daniel de Lima com intuitos educacionais
```
