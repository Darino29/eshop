const items = [
  'Cuir Artisanal', 'Rotin Tressé', 'Fait Main', 'Édition Limitée',
  'AD Collection', 'Luxe Naturel', 'Savoir-Faire', 'Pièce Unique',
]
const doubled = [...items, ...items]

export default function MarqueeBanner() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((w, i) => (
          <span key={i}>
            {w}
            <span className="dot" style={{ marginLeft: 20, marginRight: 0 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
