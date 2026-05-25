export default function PasswordOptions({
  minusculas,
  setMinusculas,
  numeros,
  setNumeros,
  simbolos,
  setSimbolos,
}) {
  return (
    <div className="opcoes">
      <label>
        <input
          type="checkbox"
          checked={minusculas}
          onChange={() =>
            setMinusculas(!minusculas)
          }
        />
        Minúsculas
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