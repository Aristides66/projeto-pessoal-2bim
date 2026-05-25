export default function Botao({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

