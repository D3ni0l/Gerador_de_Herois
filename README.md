# Gerador de Nomes de Super-Heróis 🦸

Um aplicativo simples em **React + Vite** que gera nomes de super-heróis aleatórios. Salva os nomes gerados no **localStorage**, permitindo manter sua lista mesmo após fechar o navegador.

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

```bash
## Estrutura do Projeto
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
---

## Como Rodar

1. Clone o repositório:
git clone <url-do-repo>
cd nome-do-projeto

2. Instale as dependências:
npm install

3. Rode o projeto em modo de desenvolvimento:
npm run dev

4. Abra o navegador em:
http://localhost:5173
