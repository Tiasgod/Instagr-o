
// Vite + React
import { useState } from 'react'

// Imagens
// var nomeDaImagem = 'hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

// Estilos
// <link rel="stylesheet" href="./App.css">
import './App.css'

// Componentes
// import Alias from './NomeDaPasta/NomeDoArquivo'
import LateralEsquerda from './LateralEsquerda/LateralEsquerda'
import LateralDireita from './LateralDireita/LateralDireita'
import Principal from './Principal/Principal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <LateralEsquerda />

      <Principal />

      <LateralDireita />

    </div>
  )
}

export default App
