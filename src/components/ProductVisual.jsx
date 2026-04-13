// Visuels SVG stylisés qui remplacent les vraies photos produit
// Chaque type a sa propre composition visuelle

const visuals = {
  serum: (
    <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="200" height="280" fill="#130f0f"/>
      <ellipse cx="100" cy="140" rx="60" ry="80" fill="none" stroke="#d4a5a5" strokeWidth="0.5" opacity="0.3"/>
      <ellipse cx="100" cy="140" rx="40" ry="55" fill="none" stroke="#d4a5a5" strokeWidth="0.5" opacity="0.2"/>
      {/* Flacon */}
      <rect x="82" y="80" width="36" height="120" rx="6" fill="#1c1616" stroke="#d4a5a5" strokeWidth="1"/>
      <rect x="88" y="68" width="24" height="18" rx="3" fill="#1c1616" stroke="#d4a5a5" strokeWidth="0.8"/>
      <rect x="93" y="56" width="14" height="16" rx="2" fill="#2a1f1f" stroke="#d4a5a5" strokeWidth="0.8"/>
      {/* Liquide */}
      <rect x="83" y="130" width="34" height="69" rx="5" fill="rgba(212,165,165,0.12)"/>
      {/* Label */}
      <rect x="87" y="100" width="26" height="38" rx="1" fill="rgba(212,165,165,0.06)" stroke="rgba(212,165,165,0.2)" strokeWidth="0.5"/>
      <text x="100" y="115" textAnchor="middle" fill="#d4a5a5" fontSize="5" fontFamily="Georgia" fontStyle="italic">Bloom</text>
      <text x="100" y="126" textAnchor="middle" fill="#c4b8b4" fontSize="3.5" fontFamily="sans-serif" letterSpacing="0.5">SÉRUM ÉCLAT</text>
      <text x="100" y="133" textAnchor="middle" fill="#c4b8b4" fontSize="3.5" fontFamily="sans-serif" letterSpacing="0.5">NOCTURNE</text>
      {/* Reflet */}
      <rect x="84" y="82" width="4" height="60" rx="2" fill="rgba(255,255,255,0.04)"/>
      <circle cx="140" cy="70" r="1.5" fill="#d4a5a5" opacity="0.5"/>
      <circle cx="60" cy="180" r="1" fill="#d4a5a5" opacity="0.3"/>
    </svg>
  ),

  creme: (
    <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="200" height="280" fill="#130f0f"/>
      {/* Fond déco */}
      <circle cx="160" cy="60" r="40" fill="rgba(212,165,165,0.04)"/>
      <circle cx="40" cy="220" r="30" fill="rgba(212,165,165,0.04)"/>
      {/* Pot */}
      <ellipse cx="100" cy="175" rx="45" ry="12" fill="#1c1616" stroke="#d4a5a5" strokeWidth="0.8"/>
      <rect x="55" y="120" width="90" height="55" rx="4" fill="#1c1616" stroke="#d4a5a5" strokeWidth="0.8"/>
      <ellipse cx="100" cy="120" rx="45" ry="12" fill="#2a1f1f" stroke="#d4a5a5" strokeWidth="0.8"/>
      {/* Couvercle */}
      <ellipse cx="100" cy="96" rx="45" ry="12" fill="#221818" stroke="#d4a5a5" strokeWidth="0.8"/>
      <rect x="55" y="84" width="90" height="12" rx="2" fill="#221818" stroke="#d4a5a5" strokeWidth="0.8"/>
      <ellipse cx="100" cy="84" rx="45" ry="12" fill="#2a1f1f" stroke="#d4a5a5" strokeWidth="0.8"/>
      {/* Label */}
      <rect x="64" y="128" width="72" height="38" rx="1" fill="rgba(212,165,165,0.05)" stroke="rgba(212,165,165,0.15)" strokeWidth="0.5"/>
      <text x="100" y="142" textAnchor="middle" fill="#d4a5a5" fontSize="5.5" fontFamily="Georgia" fontStyle="italic">Bloom</text>
      <text x="100" y="152" textAnchor="middle" fill="#c4b8b4" fontSize="3" fontFamily="sans-serif" letterSpacing="0.8">CRÈME VELOURS</text>
      <text x="100" y="161" textAnchor="middle" fill="#c4b8b4" fontSize="3" fontFamily="sans-serif" letterSpacing="0.8">INTENSE</text>
    </svg>
  ),

  huile: (
    <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="200" height="280" fill="#130f0f"/>
      <line x1="40" y1="0" x2="40" y2="280" stroke="rgba(212,165,165,0.05)" strokeWidth="1"/>
      <line x1="160" y1="0" x2="160" y2="280" stroke="rgba(212,165,165,0.05)" strokeWidth="1"/>
      {/* Flacon huile — forme plus arrondie */}
      <path d="M80 200 Q75 185 74 160 Q73 130 80 110 Q85 95 100 90 Q115 95 120 110 Q127 130 126 160 Q125 185 120 200 Z" fill="#1c1616" stroke="#d4a5a5" strokeWidth="0.8"/>
      {/* Contenu huile dorée */}
      <path d="M81 190 Q77 175 76 155 Q75 130 81 112 Q87 98 100 94 Q113 98 119 112 Q125 130 124 155 Q123 175 119 190 Z" fill="rgba(212,165,165,0.15)"/>
      {/* Col */}
      <rect x="90" y="72" width="20" height="22" rx="3" fill="#1c1616" stroke="#d4a5a5" strokeWidth="0.8"/>
      {/* Bouchon pipette */}
      <rect x="93" y="52" width="14" height="24" rx="7" fill="#2a1f1f" stroke="#d4a5a5" strokeWidth="0.8"/>
      <line x1="100" y1="52" x2="100" y2="40" stroke="#d4a5a5" strokeWidth="0.8" opacity="0.6"/>
      {/* Label */}
      <rect x="78" y="130" width="44" height="50" rx="1" fill="rgba(212,165,165,0.05)" stroke="rgba(212,165,165,0.2)" strokeWidth="0.5"/>
      <text x="100" y="148" textAnchor="middle" fill="#d4a5a5" fontSize="5" fontFamily="Georgia" fontStyle="italic">Bloom</text>
      <text x="100" y="158" textAnchor="middle" fill="#c4b8b4" fontSize="3" fontFamily="sans-serif" letterSpacing="0.8">HUILE</text>
      <text x="100" y="167" textAnchor="middle" fill="#c4b8b4" fontSize="3" fontFamily="sans-serif" letterSpacing="0.8">PRÉCIEUSE</text>
      <circle cx="152" cy="110" r="2" fill="#d4a5a5" opacity="0.4"/>
      <circle cx="55" cy="160" r="1.5" fill="#d4a5a5" opacity="0.3"/>
    </svg>
  ),

  masque: (
    <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="200" height="280" fill="#130f0f"/>
      <rect x="0" y="0" width="200" height="280" fill="url(#grid)" opacity="0.03"/>
      {/* Tube */}
      <rect x="72" y="90" width="56" height="130" rx="4" fill="#1c1616" stroke="#d4a5a5" strokeWidth="0.8"/>
      {/* Bas du tube — arrondi */}
      <ellipse cx="100" cy="220" rx="28" ry="7" fill="#221818" stroke="#d4a5a5" strokeWidth="0.8"/>
      {/* Bouchon */}
      <rect x="82" y="72" width="36" height="22" rx="11" fill="#2a1f1f" stroke="#d4a5a5" strokeWidth="0.8"/>
      {/* Décoration bouchon */}
      <ellipse cx="100" cy="72" rx="18" ry="4.5" fill="#221818" stroke="#d4a5a5" strokeWidth="0.5" opacity="0.8"/>
      {/* Label */}
      <rect x="76" y="108" width="48" height="60" rx="1" fill="rgba(212,165,165,0.05)" stroke="rgba(212,165,165,0.15)" strokeWidth="0.5"/>
      <text x="100" y="127" textAnchor="middle" fill="#d4a5a5" fontSize="5.5" fontFamily="Georgia" fontStyle="italic">Bloom</text>
      <text x="100" y="140" textAnchor="middle" fill="#c4b8b4" fontSize="3" fontFamily="sans-serif" letterSpacing="0.7">MASQUE NUIT</text>
      <text x="100" y="149" textAnchor="middle" fill="#c4b8b4" fontSize="3" fontFamily="sans-serif" letterSpacing="0.7">RENAISSANCE</text>
      {/* Reflet */}
      <rect x="73" y="92" width="5" height="80" rx="2" fill="rgba(255,255,255,0.03)"/>
    </svg>
  ),

  brume: (
    <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="200" height="280" fill="#130f0f"/>
      {/* Particules brume */}
      {[...Array(8)].map((_, i) => (
        <circle key={i} cx={130 + (i % 3) * 12} cy={60 + i * 10} r="1.5" fill="#d4a5a5" opacity={0.1 + i * 0.04}/>
      ))}
      {/* Flacon spray — carré */}
      <rect x="70" y="90" width="60" height="140" rx="6" fill="#1c1616" stroke="#d4a5a5" strokeWidth="0.8"/>
      {/* Pompe */}
      <rect x="88" y="68" width="12" height="26" rx="4" fill="#2a1f1f" stroke="#d4a5a5" strokeWidth="0.8"/>
      <rect x="95" y="60" width="28" height="10" rx="3" fill="#221818" stroke="#d4a5a5" strokeWidth="0.8"/>
      {/* Label */}
      <rect x="75" y="110" width="50" height="65" rx="1" fill="rgba(212,165,165,0.05)" stroke="rgba(212,165,165,0.15)" strokeWidth="0.5"/>
      <text x="100" y="130" textAnchor="middle" fill="#d4a5a5" fontSize="5.5" fontFamily="Georgia" fontStyle="italic">Bloom</text>
      <text x="100" y="142" textAnchor="middle" fill="#c4b8b4" fontSize="3" fontFamily="sans-serif" letterSpacing="0.7">BRUME</text>
      <text x="100" y="151" textAnchor="middle" fill="#c4b8b4" fontSize="3" fontFamily="sans-serif" letterSpacing="0.7">FIXATRICE</text>
      <text x="100" y="165" textAnchor="middle" fill="#a07070" fontSize="3" fontFamily="sans-serif">100 ml</text>
    </svg>
  ),

  yeux: (
    <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="200" height="280" fill="#130f0f"/>
      <circle cx="100" cy="140" r="70" fill="none" stroke="rgba(212,165,165,0.06)" strokeWidth="0.5"/>
      {/* Petit flacon contour yeux */}
      <rect x="84" y="85" width="32" height="110" rx="6" fill="#1c1616" stroke="#d4a5a5" strokeWidth="0.8"/>
      <rect x="88" y="72" width="24" height="17" rx="3" fill="#1c1616" stroke="#d4a5a5" strokeWidth="0.8"/>
      <rect x="92" y="58" width="16" height="18" rx="2" fill="#2a1f1f" stroke="#d4a5a5" strokeWidth="0.8"/>
      <ellipse cx="100" cy="58" rx="8" ry="2.5" fill="#221818" stroke="#d4a5a5" strokeWidth="0.5" opacity="0.9"/>
      {/* Label */}
      <rect x="88" y="104" width="24" height="50" rx="1" fill="rgba(212,165,165,0.05)" stroke="rgba(212,165,165,0.2)" strokeWidth="0.5"/>
      <text x="100" y="120" textAnchor="middle" fill="#d4a5a5" fontSize="4.5" fontFamily="Georgia" fontStyle="italic">Bloom</text>
      <text x="100" y="131" textAnchor="middle" fill="#c4b8b4" fontSize="2.8" fontFamily="sans-serif" letterSpacing="0.5">CONTOUR</text>
      <text x="100" y="139" textAnchor="middle" fill="#c4b8b4" fontSize="2.8" fontFamily="sans-serif" letterSpacing="0.5">DES YEUX</text>
      <text x="100" y="149" textAnchor="middle" fill="#a07070" fontSize="2.8" fontFamily="sans-serif">15 ml</text>
      <rect x="85" y="87" width="4" height="55" rx="2" fill="rgba(255,255,255,0.03)"/>
    </svg>
  ),
}

export default function ProductVisual({ type }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {visuals[type] || visuals.serum}
    </div>
  )
}
