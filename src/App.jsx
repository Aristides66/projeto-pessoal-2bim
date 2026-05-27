import { useState } from "react"
import "./App.css"

import Button from "./components/Button"
import PasswordDisplay from "./components/PasswordDisplay"
import PasswordOptions from "./components/PasswordOptions"

export default function App() {
  const [tamanho, setTamanho] = useState(8)

  const [minusculas, setMinusculas] =
    useState(true)

  const [maiusculas, setMaiusculas] =
    useState(true)

  const [numeros, setNumeros] =
    useState(true)

  const [simbolos, setSimbolos] =
    useState(false)

  const [senha, setSenha] = useState(
    "Sua senha aparecerá aqui"
  )

  function gerarSenha() {
    let caracteres = ""

    if (minusculas) {
      caracteres += "abcdefghijklmnopqrstuvwxyz"
    }

    if (maiusculas) {
      caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (numeros) {
      caracteres += "0123456789"
    }

    if (simbolos) {
      caracteres += "!@#$&*"
    }

    if (caracteres === "") {
      alert("Selecione pelo menos uma opção!")
      return
    }

    let novaSenha = ""

    for (let i = 0; i < tamanho; i++) {
      const random = Math.floor(
        Math.random() * caracteres.length
      )

      novaSenha += caracteres[random]
    }

    setSenha(novaSenha)
  }

  return (
    <div className="app">
      <div className="container">
        <h2>Gerador de Senhas</h2>

        <label>Tamanho da senha:</label>

        <input
          type="number"
          min="4"
          max="27"
          value={tamanho}
          onChange={(e) =>
            setTamanho(Number(e.target.value))
          }
        />

        <PasswordOptions
          minusculas={minusculas}
          setMinusculas={setMinusculas}
          maiusculas={maiusculas}
          setMaiusculas={setMaiusculas}
          numeros={numeros}
          setNumeros={setNumeros}
          simbolos={simbolos}
          setSimbolos={setSimbolos}
        />

        <Button onClick={gerarSenha}>
          Gerar Senha
        </Button>

        <PasswordDisplay senha={senha} />
      </div>
    </div>
  )
}