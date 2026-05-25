import { useState } from "react"
import "./App.css"
import "./components/Botao"
import "./components/PasswordDisplay"
import "./components/PasswordOptions"

export default function App() {
  const [tamanho, setTamanho] = useState(8);
  const [minusculas, setMinusculas] = useState(true)
  const [numeros, setNumeros] = useState(true)
  const [simbolos, setSimbolos] = useState(false)
  const [senha, setSenha] = useState("Sua senha aparecerá aqui")

  function gerarSenha() {
    let caracteres = ""

    if (minusculas) {
      caracteres += "abcdefghijklmnopqrstuvwxyz"
    }

    if (numeros) {
      caracteres += "0123456789"
    }

    if (simbolos) {
      caracteres += "!@#$&"
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
        <h2>🔐 Gerador de Senhas</h2>

        <label>Tamanho:</label>

        <input
          type="number"
          min="4"
          max="12"
          value={tamanho}
          onChange={(e) =>
            setTamanho(e.target.value)
          }
        />

        <PasswordOptions
          minusculas={minusculas}
          setMinusculas={setMinusculas}
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
