// Concentric mandala ring — used as a very subtle background ornament.
export default function Mandala({ className = '' }) {
  const petals = Array.from({ length: 24 })
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <circle cx="200" cy="200" r="196" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 7" />
      <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 5" />
      {petals.map((_, i) => {
        const a = (i * 360) / petals.length
        return (
          <g key={i} transform={`rotate(${a} 200 200)`}>
            <path
              d="M200 40c8 14 8 26 0 38-8-12-8-24 0-38Z"
              stroke="currentColor"
              strokeWidth="0.7"
            />
          </g>
        )
      })}
      <circle cx="200" cy="200" r="52" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  )
}
