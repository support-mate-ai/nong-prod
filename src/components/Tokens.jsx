export default function Tokens({ ids = ['01', '02', '03'] }) {
  return (
    <div className="toks">
      {ids.map((id) => (
        <span className="tk" key={id}>{id}</span>
      ))}
    </div>
  )
}
