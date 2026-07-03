interface LogoProps {
  className?: string
  size?: number
  showText?: boolean
}

export default function Logo({ className = "", size = 32, showText = true }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-label="Omnybox"
      >
        <defs>
          <linearGradient id="omnybox-grad" x1="4" y1="6" x2="44" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
        {/* top face */}
        <path d="M24 4 L42 13 L24 22 L6 13 Z" fill="url(#omnybox-grad)" fillOpacity="0.9" />
        {/* left face */}
        <path d="M6 13 L24 22 L24 44 L6 35 Z" fill="url(#omnybox-grad)" fillOpacity="0.55" />
        {/* right face */}
        <path d="M42 13 L24 22 L24 44 L42 35 Z" fill="url(#omnybox-grad)" fillOpacity="0.75" />
        {/* edges */}
        <path
          d="M24 4 L42 13 L24 22 L6 13 Z M6 13 L24 22 L24 44 M42 13 L24 22 M24 22 L24 44 L42 35 M6 13 L6 35 L24 44 M42 13 L42 35"
          stroke="#93C5FD"
          strokeWidth="1.3"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showText && (
        <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          omny<span className="text-[#2563eb] dark:text-[#3B82F6]">box</span>
        </span>
      )}
    </span>
  )
}
