// Hand-drawn style lotus mark, used as brand icon and floating decoration.
export default function Lotus({ className = '', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 64 40" fill="none" className={className} aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 2c-4.4 7.6-4.4 15.2 0 22.8 4.4-7.6 4.4-15.2 0-22.8Z" fill={stroke} fillOpacity="0.12" />
        <path d="M17 8.5c.8 8.7 5.7 14.6 14.6 17.7C30.8 17.5 25.9 11.6 17 8.5Z" fill={stroke} fillOpacity="0.08" />
        <path d="M47 8.5c-.8 8.7-5.7 14.6-14.6 17.7.8-8.7 5.7-14.6 14.6-17.7Z" fill={stroke} fillOpacity="0.08" />
        <path
          d="M4 20.5c5.8 9.8 14 14.7 28 14.7s22.2-4.9 28-14.7c-7.8-2-15-1-19.6 2.4-2.9-2-5.7-3-8.4-3s-5.5 1-8.4 3C19 19.5 11.8 18.5 4 20.5Z"
          fill={stroke}
          fillOpacity="0.1"
        />
      </g>
    </svg>
  )
}
