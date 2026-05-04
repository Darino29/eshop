const words = ['Cuir Artisanal', 'Rotin Tressé', 'Fait Main', 'Édition Limitée', 'AD Collection']
const repeated = [...words, ...words]

export default function MarqueeBanner() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {repeated.map((w, i) => (
          <span key={i}>{w}{i < repeated.length - 1 && <span style={{ margin: '0 14px', opacity: 0.3 }}>·</span>}</span>
        ))}
      </div>
    </div>
  )
}
