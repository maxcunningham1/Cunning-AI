interface LogoProps {
  height?: number
  color?: string
  className?: string
  style?: React.CSSProperties
}

export default function Logo({ height, color = 'currentColor', className, style }: LogoProps) {
  // viewBox: 124 × 68 — tight crop around the three elements
  const sizeStyle: React.CSSProperties = height
    ? { height, width: height * (124 / 68) }
    : { width: 'auto' }

  return (
    <svg
      viewBox="0 0 124 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="C-AI"
      className={className}
      style={{ ...sizeStyle, ...style }}
    >
      <title>C-AI</title>

      {/* C — baseline y=62, cap top ~y=22, visual centre ~y=42 */}
      <text
        x="1"
        y="62"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="52"
        fontWeight="700"
        fill={color}
        letterSpacing="0"
      >C</text>

      {/* Connector — jogged trace, centred on y=42 */}
      <path
        d="M 43,42 L 53,42 L 53,36 L 61,36"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        fill="none"
      />
      <circle cx="43" cy="42" r="2.5" fill={color} />
      <circle cx="61" cy="36" r="2.5" fill={color} />

      {/* AI — same baseline */}
      <text
        x="62"
        y="62"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="52"
        fontWeight="700"
        fill={color}
        letterSpacing="3"
      >AI</text>
    </svg>
  )
}
