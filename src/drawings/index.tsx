import type { ReactNode } from 'react'
import './drawings.css'

// Step drawings: flat filled shapes for the food and tools, amber lines for what the cook does.
// The amber lines draw themselves in cutting order when a step opens. No text inside the drawings,
// so they work in every language; measures live in the step's chips.

const C = {
  wood: '#7A5638',
  woodTop: '#9C7350',
  cloth: '#5C8BD6',
  flesh: '#F2E2C4',
  ring: '#DCC193',
  root: '#B7864F',
  steel: '#D5DCE6',
  steelEdge: '#9AA6B8',
  handle: '#3A4E78',
  skin: '#E7B58E',
  skinShade: '#C99572',
  carrot: '#F08A3C',
  carrotDark: '#C96A24',
  leaf: '#6FA54A',
  leafDark: '#4E7F33',
  paper: '#F3F5FA',
  cut: '#F5B83D',
  ok: '#A6C95E',
}

/** An amber line that draws itself; `i` sets its turn in the sequence. */
function Cut({ d, i = 0, dash }: { d: string; i?: number; dash?: boolean }) {
  return (
    <path
      className={dash ? 'cut dash' : 'cut'}
      d={d}
      pathLength={1}
      style={{ animationDelay: `${0.15 + i * 0.22}s` }}
      fill="none"
      stroke={C.cut}
      strokeWidth={3}
      strokeLinecap="round"
    />
  )
}

function Board({ y = 128 }: { y?: number }) {
  return (
    <g>
      <rect x="10" y={y} width="280" height="22" rx="6" fill={C.wood} />
      <rect x="10" y={y} width="280" height="6" rx="3" fill={C.woodTop} />
    </g>
  )
}

/** Side view of a half onion, flat side down, root on the left. */
function OnionSide() {
  return (
    <g>
      <path d="M70 128 L70 84 Q70 44 148 44 Q226 44 238 128 Z" fill={C.flesh} />
      <g fill="none" stroke={C.ring} strokeWidth="2">
        <path d="M86 128 Q86 60 148 58 Q212 58 222 128" />
        <path d="M102 128 Q102 74 148 72 Q198 72 206 128" />
      </g>
      <path d="M70 86 Q50 107 70 126 Z" fill={C.root} />
    </g>
  )
}

/** Top view of a half onion, root on the left. */
function OnionTop() {
  return (
    <g>
      <ellipse cx="160" cy="76" rx="104" ry="50" fill={C.flesh} />
      <ellipse cx="160" cy="76" rx="84" ry="36" fill="none" stroke={C.ring} strokeWidth="2" />
      <path d="M58 56 Q40 76 58 96 Z" fill={C.root} />
    </g>
  )
}

const drawings = {
  board: (
    <>
      <path d="M14 140 Q40 132 70 140 T130 140 T190 140 T250 140 T290 140 L290 150 L14 150 Z" fill={C.cloth} opacity=".7" />
      <rect x="64" y="104" width="216" height="30" rx="7" fill={C.wood} />
      <rect x="64" y="104" width="216" height="7" rx="3" fill={C.woodTop} />
      <Cut i={0} d="M8 119 L52 119" />
      <Cut i={1} d="M42 109 L52 119 L42 129" />
    </>
  ),
  pinchGrip: (
    <>
      <path d="M40 70 L128 66 L128 94 L40 92 Q30 81 40 70 Z" fill={C.handle} />
      <path d="M128 64 L282 72 Q270 92 236 98 L128 96 Z" fill={C.steel} />
      <path d="M128 96 L236 98 Q270 92 282 72" fill="none" stroke={C.steelEdge} strokeWidth="2" />
      <g fill={C.skin}>
        <rect x="60" y="88" width="22" height="30" rx="11" />
        <rect x="84" y="90" width="22" height="30" rx="11" />
        <rect x="36" y="86" width="22" height="26" rx="11" />
      </g>
      <ellipse cx="146" cy="78" rx="18" ry="12" fill={C.skin} />
      <path d="M134 76 Q146 70 158 76" fill="none" stroke={C.skinShade} strokeWidth="2" />
      <Cut i={0} d="M146 52 A28 28 0 1 1 145.9 52" />
    </>
  ),
  claw: (
    <>
      <Board y={130} />
      <rect x="96" y="18" width="12" height="112" rx="3" fill={C.steel} />
      <rect x="92" y="6" width="20" height="20" rx="5" fill={C.handle} />
      <path
        d="M114 62 Q114 38 140 38 L232 38 Q258 38 258 64 L258 104 Q258 130 230 130 L166 130 Q146 130 146 114 Q146 102 132 98 Q114 92 114 76 Z"
        fill={C.skin}
      />
      <g fill="none" stroke={C.skinShade} strokeWidth="2" strokeLinecap="round">
        <path d="M150 112 Q160 100 174 104" />
        <path d="M180 48 L180 86" />
        <path d="M212 48 L212 90" />
      </g>
      <circle className="pulse" cx="112" cy="70" r="7" fill="none" stroke={C.cut} strokeWidth="3" />
    </>
  ),
  rounds: (
    <>
      <Board />
      <path d="M30 98 L150 94 L150 126 L30 122 Q20 110 30 98 Z" fill={C.carrot} />
      <g fill={C.carrot}>
        <rect x="160" y="94" width="11" height="32" rx="4" />
        <rect x="178" y="95" width="11" height="31" rx="4" />
        <rect x="196" y="96" width="11" height="30" rx="4" />
        <rect x="214" y="97" width="11" height="29" rx="4" />
      </g>
      <path d="M118 30 L252 22 L250 40 L120 46 Z" fill={C.steel} transform="rotate(14 150 40)" />
      <Cut i={0} d="M150 60 L150 90" />
    </>
  ),
  angle: (
    <>
      <rect x="140" y="10" width="12" height="134" rx="6" fill={C.steelEdge} />
      <rect x="134" y="140" width="24" height="12" rx="4" fill={C.handle} />
      <path d="M152 42 L272 86 L264 104 L150 60 Z" fill={C.steel} />
      <Cut i={0} d="M152 100 A58 58 0 0 1 206 78" />
      <Cut i={1} d="M146 10 L146 150" dash />
    </>
  ),
  hone: (
    <>
      <rect x="140" y="10" width="12" height="134" rx="6" fill={C.steelEdge} />
      <rect x="134" y="140" width="24" height="12" rx="4" fill={C.handle} />
      <path d="M152 30 L272 74 L264 92 L150 48 Z" fill={C.steel} opacity=".45" />
      <path d="M152 74 L272 118 L264 136 L150 92 Z" fill={C.steel} />
      <Cut i={0} d="M176 26 Q200 70 168 112" />
      <Cut i={1} d="M160 104 L168 112 L178 104" />
    </>
  ),
  paper: (
    <>
      <path d="M70 20 L230 30 L220 150 L60 140 Z" fill={C.paper} />
      <path d="M40 60 L178 80 L176 96 L40 78 Z" fill={C.steel} />
      <Cut i={0} d="M176 92 L214 146" />
    </>
  ),
  onionHalf: (
    <>
      <Board y={134} />
      <circle cx="150" cy="78" r="56" fill={C.flesh} />
      <circle cx="150" cy="78" r="40" fill="none" stroke={C.ring} strokeWidth="2" />
      <path d="M134 132 Q150 144 166 132 Z" fill={C.root} />
      <path d="M144 22 Q150 10 156 22 Z" fill={C.root} />
      <Cut i={0} d="M150 8 L150 146" dash />
    </>
  ),
  onionVertical: (
    <>
      <OnionTop />
      <Cut i={0} d="M76 56 L262 56" />
      <Cut i={1} d="M76 76 L264 76" />
      <Cut i={2} d="M76 96 L262 96" />
    </>
  ),
  onionHorizontal: (
    <>
      <Board />
      <OnionSide />
      <rect x="110" y="34" width="110" height="14" rx="7" fill={C.skin} />
      <Cut i={0} d="M88 108 L234 108" />
      <Cut i={1} d="M88 88 L228 88" />
    </>
  ),
  onionDice: (
    <>
      <path d="M58 56 Q40 76 58 96 Z" fill={C.root} />
      <path d="M58 30 L170 30 L170 122 L58 122 Q50 76 58 30 Z" fill={C.flesh} />
      <g stroke={C.ring} strokeWidth="2">
        <line x1="70" y1="56" x2="170" y2="56" />
        <line x1="70" y1="76" x2="170" y2="76" />
        <line x1="70" y1="96" x2="170" y2="96" />
      </g>
      <Cut i={0} d="M150 26 L150 126" />
      <Cut i={1} d="M130 26 L130 126" />
      <g fill={C.flesh}>
        <rect x="196" y="40" width="16" height="16" rx="3" />
        <rect x="222" y="58" width="16" height="16" rx="3" />
        <rect x="200" y="78" width="16" height="16" rx="3" />
        <rect x="248" y="84" width="16" height="16" rx="3" />
        <rect x="226" y="104" width="16" height="16" rx="3" />
      </g>
    </>
  ),
  flatSide: (
    <>
      <Board y={124} />
      <path d="M108 124 A52 52 0 1 1 192 124 Z" fill={C.carrot} />
      <circle cx="150" cy="84" r="16" fill={C.carrotDark} opacity=".5" />
      <Cut i={0} d="M100 124 L200 124" />
    </>
  ),
  slabs: (
    <>
      <Board y={130} />
      <rect x="96" y="30" width="108" height="100" rx="10" fill={C.carrot} />
      <Cut i={0} d="M90 55 L210 55" />
      <Cut i={1} d="M90 80 L210 80" />
      <Cut i={2} d="M90 105 L210 105" />
    </>
  ),
  julienne: (
    <>
      <Board y={130} />
      <rect x="40" y="60" width="100" height="70" rx="6" fill={C.carrot} />
      <g stroke={C.carrotDark} strokeWidth="2">
        <line x1="40" y1="84" x2="140" y2="84" />
        <line x1="40" y1="107" x2="140" y2="107" />
      </g>
      <Cut i={0} d="M65 54 L65 134" />
      <Cut i={1} d="M90 54 L90 134" />
      <Cut i={2} d="M115 54 L115 134" />
      <g fill={C.carrot}>
        <rect x="170" y="60" width="110" height="10" rx="4" />
        <rect x="166" y="78" width="110" height="10" rx="4" />
        <rect x="174" y="96" width="110" height="10" rx="4" />
        <rect x="168" y="114" width="110" height="10" rx="4" />
      </g>
    </>
  ),
  brunoise: (
    <>
      <Board y={130} />
      <g fill={C.carrot}>
        <rect x="30" y="74" width="140" height="12" rx="4" />
        <rect x="30" y="90" width="140" height="12" rx="4" />
        <rect x="30" y="106" width="140" height="12" rx="4" />
      </g>
      <Cut i={0} d="M150 64 L150 124" />
      <Cut i={1} d="M134 64 L134 124" />
      <Cut i={2} d="M118 64 L118 124" />
      <g fill={C.carrot}>
        <rect x="200" y="96" width="11" height="11" rx="2" />
        <rect x="218" y="104" width="11" height="11" rx="2" />
        <rect x="236" y="94" width="11" height="11" rx="2" />
        <rect x="254" y="106" width="11" height="11" rx="2" />
        <rect x="226" y="116" width="11" height="11" rx="2" />
        <rect x="208" y="116" width="11" height="11" rx="2" />
      </g>
    </>
  ),
  leafStack: (
    <>
      <Board y={130} />
      <path d="M50 110 Q150 40 250 110 Q150 140 50 110 Z" fill={C.leafDark} />
      <path d="M70 108 Q150 56 230 108 Q150 128 70 108 Z" fill={C.leaf} />
      <path d="M92 106 Q150 70 208 106 Q150 120 92 106 Z" fill={C.leafDark} />
      <Cut i={0} d="M60 112 L240 112" dash />
    </>
  ),
  leafRoll: (
    <>
      <Board y={130} />
      <rect x="50" y="88" width="200" height="40" rx="20" fill={C.leaf} />
      <path d="M70 96 Q60 108 70 120" fill="none" stroke={C.leafDark} strokeWidth="3" />
      <Cut i={0} d="M250 70 Q276 108 250 140" />
      <Cut i={1} d="M244 132 L250 140 L258 132" />
    </>
  ),
  ribbons: (
    <>
      <Board y={130} />
      <rect x="30" y="88" width="140" height="40" rx="20" fill={C.leaf} />
      <Cut i={0} d="M150 80 L150 136" />
      <Cut i={1} d="M136 80 L136 136" />
      <Cut i={2} d="M122 80 L122 136" />
      <g fill="none" stroke={C.leaf} strokeWidth="4" strokeLinecap="round">
        <path d="M196 100 Q212 86 228 102 T262 98" />
        <path d="M190 116 Q210 104 230 118 T270 112" />
        <path d="M204 84 Q220 72 236 86 T268 80" />
      </g>
    </>
  ),
} satisfies Record<string, ReactNode>

export type DrawingId = keyof typeof drawings

/** Re-keyed by the step, so the lines draw again every time a step opens. */
export function Drawing({ id }: { id: DrawingId }) {
  return (
    <svg className="drawing" viewBox="0 0 300 160" role="img" aria-hidden="true">
      {drawings[id]}
    </svg>
  )
}
