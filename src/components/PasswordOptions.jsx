export default function PasswordOptions({
  minusculas,
  setMinusculas,
  maiusculas,
  setMaiusculas,
  numeros,
  setNumeros,
  simbolos,
  setSimbolos,
}) {
  return (
    <div className="options">
      <label>
        <input
          type="checkbox"
          checked={minusculas}
          onChange={() =>
            setMinusculas(!minusculas)
          }
        />
        Letras minúsculas
      </label>

      <label>
        <input
          type="checkbox"
          checked={maiusculas}
          onChange={() =>
            setMaiusculas(!maiusculas)
          }
        />
        Letras maiúsculas
      </label>

      <label>
        <input
          type="checkbox"
          checked={numeros}
          onChange={() =>
            setNumeros(!numeros)
          }
        />
        Números
      </label>

      <label>
        <input
          type="checkbox"
          checked={simbolos}
          onChange={() =>
            setSimbolos(!simbolos)
          }
        />
        Símbolos
      </label>
    </div>
  )
}