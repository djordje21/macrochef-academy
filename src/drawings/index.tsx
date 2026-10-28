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
  pot: '#8E9BB8',
  potDark: '#5E6E90',
  water: '#5C8BD6',
  ice: '#BFD4F2',
  meat: '#C8655A',
  crust: '#7A3B22',
  veg: '#7FB24A',
  bread: '#E8C27E',
  yolk: '#F5B83D',
  warn: '#F0644A',
  fridge: '#DCE3EE',
  raisedBar: '#24375E',
  bg: '#0B1730',
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
  // Module 1 · Kitchen before cooking
  twoKnives: (
    <>
      <Board />
      <rect x="30" y="98" width="62" height="16" rx="6" fill={C.handle} />
      <path d="M92 96 L262 98 Q252 116 208 118 L92 114 Z" fill={C.steel} />
      <rect x="40" y="58" width="42" height="12" rx="5" fill={C.handle} />
      <path d="M82 56 L156 60 Q148 72 128 72 L82 70 Z" fill={C.steel} />
      <Cut i={0} d="M92 84 L262 84" />
      <Cut i={1} d="M82 44 L156 44" />
    </>
  ),
  bigBoard: (
    <>
      <rect x="40" y="18" width="220" height="118" rx="10" fill={C.wood} />
      <rect x="46" y="24" width="208" height="106" rx="8" fill={C.woodTop} opacity=".35" />
      <circle cx="112" cy="77" r="36" fill={C.veg} />
      <path d="M90 66 Q112 52 134 66 M88 86 Q112 100 136 86" fill="none" stroke="#5E8F35" strokeWidth="2" />
      <g fill={C.veg}>
        <rect x="186" y="56" width="12" height="12" rx="2" />
        <rect x="204" y="64" width="12" height="12" rx="2" />
        <rect x="190" y="78" width="12" height="12" rx="2" />
        <rect x="214" y="86" width="12" height="12" rx="2" />
      </g>
      <Cut i={0} d="M40 150 L260 150" />
      <Cut i={1} d="M276 18 L276 136" />
    </>
  ),
  pans: (
    <>
      <rect x="14" y="108" width="72" height="18" rx="4" fill={C.pot} />
      <rect x="86" y="110" width="30" height="6" rx="3" fill={C.handle} />
      <rect x="126" y="84" width="62" height="42" rx="5" fill={C.pot} />
      <rect x="188" y="88" width="24" height="6" rx="3" fill={C.handle} />
      <rect x="220" y="52" width="68" height="74" rx="6" fill={C.pot} />
      <rect x="214" y="58" width="80" height="6" rx="3" fill={C.potDark} />
      <Cut i={0} d="M16 130 L84 130" />
      <Cut i={1} d="M128 130 L186 130" />
      <Cut i={2} d="M222 130 L286 130" />
    </>
  ),
  iceTest: (
    <>
      <path d="M90 50 L190 50 L178 146 L102 146 Z" fill={C.water} opacity=".55" />
      <g fill={C.ice}>
        <rect x="108" y="64" width="22" height="22" rx="4" transform="rotate(-12 119 75)" />
        <rect x="142" y="78" width="22" height="22" rx="4" transform="rotate(10 153 89)" />
        <rect x="118" y="104" width="22" height="22" rx="4" />
      </g>
      <line x1="150" y1="130" x2="212" y2="52" stroke={C.steelEdge} strokeWidth="4" strokeLinecap="round" />
      <circle cx="222" cy="38" r="22" fill={C.paper} />
      <Cut i={0} d="M222 38 L222 20" />
    </>
  ),
  bowlsInOrder: (
    <>
      <path d="M20 90 A30 22 0 0 0 80 90 Z" fill={C.pot} />
      <ellipse cx="50" cy="90" rx="26" ry="5" fill={C.flesh} />
      <path d="M90 90 A30 22 0 0 0 150 90 Z" fill={C.pot} />
      <ellipse cx="120" cy="90" rx="26" ry="5" fill={C.paper} />
      <path d="M160 90 A30 22 0 0 0 220 90 Z" fill={C.pot} />
      <ellipse cx="190" cy="90" rx="26" ry="5" fill={C.warn} />
      <path d="M230 90 A30 22 0 0 0 290 90 Z" fill={C.pot} />
      <ellipse cx="260" cy="90" rx="26" ry="5" fill={C.veg} />
      <Cut i={0} d="M30 136 L270 136" />
      <Cut i={1} d="M260 128 L270 136 L260 144" />
    </>
  ),
  station: (
    <>
      <rect x="90" y="40" width="130" height="90" rx="8" fill={C.wood} />
      <circle cx="46" cy="44" r="20" fill={C.pot} />
      <circle cx="46" cy="96" r="20" fill={C.pot} />
      <circle cx="46" cy="44" r="13" fill={C.flesh} />
      <circle cx="46" cy="96" r="13" fill={C.veg} />
      <circle cx="262" cy="56" r="24" fill={C.potDark} />
      <rect x="236" y="104" width="54" height="34" rx="5" fill={C.cloth} opacity=".7" />
      <Cut i={0} d="M196 70 Q222 46 246 54" />
      <Cut i={1} d="M70 70 L96 70" />
    </>
  ),
  twoBoards: (
    <>
      <rect x="20" y="30" width="122" height="100" rx="8" fill={C.warn} />
      <rect x="158" y="30" width="122" height="100" rx="8" fill={C.veg} />
      <path d="M50 70 Q60 52 90 58 Q118 62 112 86 Q104 106 74 100 Q46 96 50 70 Z" fill={C.meat} />
      <path d="M182 92 L250 70 L256 80 L186 100 Z" fill={C.carrot} />
      <Cut i={0} d="M150 20 L150 140" dash />
    </>
  ),
  fridgeTemp: (
    <>
      <rect x="80" y="8" width="140" height="146" rx="10" fill={C.fridge} />
      <g stroke={C.pot} strokeWidth="3">
        <line x1="88" y1="54" x2="212" y2="54" />
        <line x1="88" y1="100" x2="212" y2="100" />
      </g>
      <path d="M128 70 L156 70 L152 100 L132 100 Z" fill={C.water} opacity=".6" />
      <line x1="146" y1="94" x2="172" y2="64" stroke={C.steelEdge} strokeWidth="3" strokeLinecap="round" />
      <circle cx="178" cy="62" r="10" fill={C.paper} stroke={C.pot} strokeWidth="1.5" />
      <Cut i={0} d="M178 62 L172 54" />
      <Cut i={1} d="M120 104 L164 104" />
    </>
  ),
  fridgeShelves: (
    <>
      <rect x="80" y="8" width="140" height="146" rx="10" fill={C.fridge} />
      <g stroke={C.pot} strokeWidth="3">
        <line x1="88" y1="52" x2="212" y2="52" />
        <line x1="88" y1="98" x2="212" y2="98" />
      </g>
      <rect x="98" y="26" width="40" height="26" rx="4" fill={C.pot} />
      <rect x="150" y="30" width="44" height="22" rx="4" fill={C.potDark} />
      <path d="M100 98 L100 78 L140 70 L140 98 Z" fill={C.bread} />
      <rect x="96" y="128" width="108" height="16" rx="4" fill={C.potDark} />
      <path d="M108 128 Q118 108 146 112 Q178 114 186 128 Z" fill={C.meat} />
      <Cut i={0} d="M88 104 L212 104 L212 150 L88 150 Z" />
    </>
  ),
  dangerZone: (
    <>
      <rect x="30" y="64" width="240" height="18" rx="9" fill={C.raisedBar} />
      <rect x="42" y="64" width="132" height="18" fill={C.warn} opacity=".75" />
      <line x1="39" y1="56" x2="39" y2="90" stroke={C.ice} strokeWidth="3" />
      <rect x="196" y="112" width="74" height="18" rx="3" fill={C.pot} />
      <rect x="200" y="106" width="66" height="8" rx="2" fill={C.flesh} />
      <Cut i={0} d="M250 40 L44 40" />
      <Cut i={1} d="M54 32 L44 40 L54 48" />
    </>
  ),
  scaleTare: (
    <>
      <rect x="70" y="104" width="160" height="40" rx="8" fill={C.potDark} />
      <rect x="84" y="96" width="132" height="10" rx="3" fill={C.pot} />
      <rect x="128" y="114" width="44" height="22" rx="4" fill={C.bg} />
      <path d="M96 96 A54 40 0 0 0 204 96 Z" fill={C.pot} opacity=".9" transform="translate(0 -40)" />
      <Cut i={0} d="M150 118 A6 8 0 1 1 149.9 118" />
    </>
  ),
  levelSpoon: (
    <>
      <path d="M60 90 A44 26 0 0 0 148 90 Z" fill={C.pot} />
      <rect x="148" y="86" width="110" height="8" rx="4" fill={C.pot} />
      <path d="M64 90 Q104 50 144 90 Z" fill="none" stroke={C.paper} strokeWidth="2" strokeDasharray="4 4" />
      <ellipse cx="104" cy="90" rx="40" ry="5" fill={C.paper} />
      <Cut i={0} d="M44 90 L174 90" />
    </>
  ),

  // Module 3 · Heat
  eggSet: (
    <>
      <circle cx="150" cy="80" r="70" fill={C.potDark} />
      <path d="M96 84 Q92 44 140 40 Q196 36 206 78 Q214 120 160 124 Q100 128 96 84 Z" fill={C.paper} />
      <circle cx="152" cy="80" r="20" fill={C.yolk} />
      <Cut i={0} d="M110 110 Q120 98 134 94" />
      <Cut i={1} d="M196 62 Q184 66 172 72" />
    </>
  ),
  grainSwell: (
    <>
      <ellipse cx="80" cy="80" rx="22" ry="9" fill={C.paper} opacity=".85" />
      <ellipse cx="220" cy="80" rx="44" ry="20" fill={C.paper} />
      <Cut i={0} d="M118 80 L166 80" />
      <Cut i={1} d="M156 70 L166 80 L156 90" />
    </>
  ),
  lidDrops: (
    <>
      <rect x="70" y="80" width="140" height="64" rx="8" fill={C.pot} />
      <rect x="74" y="96" width="132" height="44" rx="6" fill={C.water} opacity=".6" />
      <g transform="rotate(-18 120 50)">
        <rect x="64" y="44" width="150" height="10" rx="5" fill={C.potDark} />
        <rect x="128" y="34" width="22" height="10" rx="4" fill={C.handle} />
      </g>
      <g fill={C.ice}>
        <ellipse cx="112" cy="70" rx="3" ry="4.5" />
        <ellipse cx="150" cy="60" rx="3" ry="4.5" />
        <ellipse cx="184" cy="48" rx="3" ry="4.5" />
      </g>
      <Cut i={0} d="M110 92 Q100 80 110 68" />
      <Cut i={1} d="M150 92 Q140 78 150 64" />
      <Cut i={2} d="M188 92 Q178 76 188 60" />
    </>
  ),
  toast: (
    <>
      <rect x="40" y="112" width="180" height="16" rx="4" fill={C.potDark} />
      <rect x="220" y="114" width="60" height="7" rx="3" fill={C.handle} />
      <path d="M80 112 L80 74 Q80 56 104 56 Q116 44 132 52 Q150 44 160 56 Q182 56 182 74 L182 112 Z" fill={C.bread} />
      <rect x="80" y="104" width="102" height="8" fill={C.crust} />
      <Cut i={0} d="M78 116 L184 116" />
    </>
  ),
  waterVsPan: (
    <>
      <rect x="80" y="20" width="24" height="120" rx="12" fill={C.raisedBar} />
      <rect x="80" y="92" width="24" height="48" rx="12" fill={C.water} />
      <rect x="196" y="20" width="24" height="120" rx="12" fill={C.raisedBar} />
      <rect x="196" y="44" width="24" height="96" rx="12" fill={C.warn} />
      <Cut i={0} d="M60 73 L240 73" dash />
    </>
  ),
  boil: (
    <>
      <rect x="70" y="60" width="160" height="86" rx="8" fill={C.pot} />
      <rect x="76" y="70" width="148" height="70" rx="6" fill={C.water} opacity=".6" />
      <g fill={C.ice}>
        <circle cx="100" cy="80" r="9" />
        <circle cx="130" cy="74" r="11" />
        <circle cx="166" cy="80" r="10" />
        <circle cx="198" cy="76" r="9" />
        <circle cx="118" cy="104" r="7" />
        <circle cx="182" cy="108" r="8" />
        <circle cx="148" cy="120" r="6" />
      </g>
      <Cut i={0} d="M110 52 Q100 38 110 22" />
      <Cut i={1} d="M150 52 Q140 36 150 18" />
      <Cut i={2} d="M190 52 Q180 38 190 22" />
    </>
  ),
  simmer: (
    <>
      <rect x="70" y="60" width="160" height="86" rx="8" fill={C.pot} />
      <rect x="76" y="70" width="148" height="70" rx="6" fill={C.water} opacity=".6" />
      <g fill={C.ice}>
        <circle cx="112" cy="132" r="3" />
        <circle cx="118" cy="116" r="2.5" />
        <circle cx="184" cy="130" r="3" />
        <circle cx="180" cy="108" r="2.5" />
      </g>
      <Cut i={0} d="M76 72 Q100 68 124 72 T172 72 T224 72" />
    </>
  ),
  iceBath: (
    <>
      <path d="M60 80 A90 60 0 0 0 240 80 Z" fill={C.pot} />
      <ellipse cx="150" cy="80" rx="90" ry="12" fill={C.water} opacity=".7" />
      <g fill={C.ice}>
        <rect x="96" y="70" width="18" height="18" rx="3" transform="rotate(-10 105 79)" />
        <rect x="180" y="68" width="18" height="18" rx="3" transform="rotate(14 189 77)" />
      </g>
      <g fill={C.veg}>
        <rect x="124" y="74" width="40" height="6" rx="3" transform="rotate(-8 144 77)" />
        <rect x="134" y="82" width="40" height="6" rx="3" transform="rotate(6 154 85)" />
      </g>
      <Cut i={0} d="M150 14 L150 56" />
      <Cut i={1} d="M140 46 L150 56 L160 46" />
    </>
  ),
  steamer: (
    <>
      <rect x="70" y="50" width="160" height="96" rx="8" fill={C.pot} />
      <rect x="76" y="118" width="148" height="22" rx="4" fill={C.water} opacity=".7" />
      <path d="M80 90 Q150 112 220 90" fill="none" stroke={C.potDark} strokeWidth="6" strokeDasharray="4 4" />
      <g fill={C.veg}>
        <circle cx="116" cy="84" r="13" />
        <circle cx="150" cy="88" r="14" />
        <circle cx="186" cy="84" r="13" />
      </g>
      <rect x="64" y="40" width="172" height="10" rx="5" fill={C.potDark} />
      <Cut i={0} d="M110 116 Q102 106 110 96" />
      <Cut i={1} d="M190 116 Q182 106 190 96" />
    </>
  ),
  traySpacing: (
    <>
      <rect x="30" y="20" width="240" height="124" rx="8" fill={C.potDark} />
      <g fill={C.carrot}>
        <rect x="52" y="38" width="26" height="26" rx="5" />
        <rect x="98" y="40" width="26" height="26" rx="5" />
        <rect x="144" y="36" width="26" height="26" rx="5" />
      </g>
      <g fill={C.bread}>
        <rect x="56" y="84" width="26" height="26" rx="5" />
        <rect x="102" y="86" width="26" height="26" rx="5" />
        <rect x="148" y="82" width="26" height="26" rx="5" />
      </g>
      <g fill={C.veg}>
        <rect x="194" y="40" width="26" height="26" rx="5" />
        <rect x="198" y="86" width="26" height="26" rx="5" />
      </g>
      <Cut i={0} d="M88 72 Q82 62 88 52" />
      <Cut i={1} d="M136 72 Q130 62 136 52" />
      <Cut i={2} d="M184 76 Q178 66 184 56" />
    </>
  ),
  waterDrop: (
    <>
      <rect x="40" y="110" width="190" height="16" rx="4" fill={C.potDark} />
      <rect x="230" y="112" width="60" height="7" rx="3" fill={C.handle} />
      <path d="M135 80 Q135 92 128 100 A10 10 0 0 0 142 100 Q135 92 135 80 Z" fill={C.ice} />
      <Cut i={0} d="M112 98 L102 90" />
      <Cut i={1} d="M158 98 L168 90" />
      <Cut i={2} d="M135 70 L135 58" />
    </>
  ),
  panSpacing: (
    <>
      <circle cx="140" cy="80" r="68" fill={C.potDark} />
      <rect x="206" y="74" width="80" height="12" rx="5" fill={C.handle} />
      <g fill={C.bread}>
        <path d="M96 62 a16 16 0 0 1 32 0 Z" />
        <path d="M144 52 a16 16 0 0 1 32 0 Z" />
        <path d="M90 104 a16 16 0 0 1 32 0 Z" />
        <path d="M138 98 a16 16 0 0 1 32 0 Z" />
        <path d="M168 76 a14 14 0 0 1 28 0 Z" />
      </g>
      <Cut i={0} d="M140 12 A68 68 0 0 1 208 80" />
    </>
  ),
  patDry: (
    <>
      <Board y={128} />
      <rect x="70" y="92" width="160" height="36" rx="12" fill={C.meat} />
      <path d="M82 84 L218 84 L224 96 L76 96 Z" fill={C.paper} />
      <Cut i={0} d="M150 26 L150 72" />
      <Cut i={1} d="M140 62 L150 72 L160 62" />
    </>
  ),
  searRelease: (
    <>
      <rect x="30" y="116" width="200" height="16" rx="4" fill={C.potDark} />
      <rect x="230" y="118" width="60" height="7" rx="3" fill={C.handle} />
      <path d="M70 116 L70 92 Q70 80 86 80 L186 80 Q202 80 202 92 L202 112 Z" fill={C.meat} transform="rotate(-6 70 116)" />
      <path d="M70 116 L202 102" stroke={C.crust} strokeWidth="7" strokeLinecap="round" />
      <path d="M252 40 L206 96 M262 48 L212 100" stroke={C.steelEdge} strokeWidth="4" strokeLinecap="round" />
      <Cut i={0} d="M74 124 L200 110" />
      <Cut i={1} d="M218 72 L218 52" />
    </>
  ),
  // Module 4 · Taste
  saltRain: (
    <>
      <path d="M60 140 A90 26 0 0 0 240 140 Z" fill={C.pot} />
      <ellipse cx="150" cy="140" rx="90" ry="8" fill={C.warn} opacity=".8" />
      <ellipse cx="150" cy="30" rx="16" ry="10" fill={C.skin} />
      <g fill={C.paper}>
        <circle cx="120" cy="70" r="2" /><circle cx="150" cy="62" r="2" /><circle cx="180" cy="72" r="2" />
        <circle cx="104" cy="98" r="2" /><circle cx="136" cy="92" r="2" /><circle cx="168" cy="96" r="2" /><circle cx="198" cy="102" r="2" />
        <circle cx="90" cy="122" r="2" /><circle cx="128" cy="118" r="2" /><circle cx="176" cy="120" r="2" /><circle cx="212" cy="124" r="2" />
      </g>
      <Cut i={0} d="M260 30 L260 132" />
      <Cut i={1} d="M252 30 L268 30" />
      <Cut i={2} d="M252 132 L268 132" />
    </>
  ),
  tomatoHalves: (
    <>
      <Board y={128} />
      <circle cx="96" cy="88" r="40" fill={C.warn} />
      <circle cx="96" cy="88" r="28" fill="#F48A73" />
      <circle cx="204" cy="88" r="40" fill={C.warn} />
      <circle cx="204" cy="88" r="28" fill="#F48A73" />
      <g fill={C.paper}><circle cx="194" cy="80" r="2" /><circle cx="210" cy="92" r="2" /><circle cx="200" cy="100" r="2" /><circle cx="214" cy="76" r="2" /></g>
    </>
  ),
  twoCups: (
    <>
      <path d="M60 60 L120 60 L114 130 L66 130 Z" fill={C.pot} />
      <ellipse cx="90" cy="62" rx="28" ry="6" fill={C.carrot} />
      <path d="M180 60 L240 60 L234 130 L186 130 Z" fill={C.pot} />
      <ellipse cx="210" cy="62" rx="28" ry="6" fill={C.carrot} />
      <Cut i={0} d="M140 95 L160 95" />
      <Cut i={1} d="M140 103 L160 103" />
    </>
  ),
  lemonDrops: (
    <>
      <path d="M150 70 L210 70 L204 140 L156 140 Z" fill={C.pot} />
      <ellipse cx="180" cy="72" rx="28" ry="6" fill={C.carrot} />
      <ellipse cx="120" cy="34" rx="34" ry="22" fill={C.yolk} />
      <ellipse cx="120" cy="34" rx="26" ry="15" fill="#F8D27A" />
      <g fill={C.yolk}><ellipse cx="164" cy="50" rx="2.5" ry="4" /><ellipse cx="176" cy="60" rx="2.5" ry="4" /></g>
      <Cut i={0} d="M150 40 Q166 44 176 58" />
    </>
  ),
  acidsRow: (
    <>
      <Board y={128} />
      <ellipse cx="50" cy="110" rx="24" ry="17" fill={C.yolk} />
      <rect x="92" y="54" width="22" height="74" rx="6" fill={C.ice} opacity=".8" />
      <rect x="98" y="44" width="10" height="12" rx="2" fill={C.handle} />
      <path d="M140 128 L140 70 Q140 52 154 52 Q168 52 168 70 L168 128 Z" fill="#7A2340" />
      <circle cx="210" cy="106" r="22" fill={C.warn} />
      <path d="M242 128 L242 92 L282 92 L282 128 Z" fill={C.paper} />
      <Cut i={0} d="M30 142 L280 142" dash />
    </>
  ),
  butterSauce: (
    <>
      <path d="M60 80 A90 56 0 0 0 240 80 Z" fill={C.pot} />
      <ellipse cx="150" cy="80" rx="90" ry="12" fill={C.warn} />
      <rect x="132" y="40" width="34" height="24" rx="4" fill="#F8E3A0" />
      <Cut i={0} d="M118 82 Q150 70 184 82" />
      <Cut i={1} d="M128 90 Q150 84 172 90" />
    </>
  ),
  bloomSpice: (
    <>
      <rect x="40" y="110" width="190" height="16" rx="4" fill={C.potDark} />
      <rect x="230" y="112" width="60" height="7" rx="3" fill={C.handle} />
      <ellipse cx="135" cy="108" rx="80" ry="6" fill={C.warn} opacity=".85" />
      <g fill="#B5341E"><circle cx="120" cy="104" r="2" /><circle cx="136" cy="106" r="2" /><circle cx="150" cy="103" r="2" /><circle cx="128" cy="108" r="2" /></g>
      <Cut i={0} d="M135 40 L135 92" />
      <Cut i={1} d="M127 84 L135 92 L143 84" />
    </>
  ),
  chiliQuarter: (
    <>
      <path d="M40 90 A44 24 0 0 0 128 90 Z" fill={C.pot} />
      <rect x="128" y="86" width="110" height="8" rx="4" fill={C.pot} />
      <path d="M44 90 A40 20 0 0 0 64 106 L64 90 Z" fill={C.warn} />
      <Cut i={0} d="M64 70 L64 112" dash />
      <Cut i={1} d="M84 70 L84 112" dash />
      <Cut i={2} d="M104 70 L104 112" dash />
    </>
  ),
  umamiRow: (
    <>
      <Board y={128} />
      <path d="M24 128 L56 92 L88 128 Z" fill={C.yolk} />
      <rect x="104" y="96" width="40" height="32" rx="4" fill={C.warn} />
      <path d="M160 128 L160 112 A20 20 0 0 1 200 112 L200 128 Z" fill={C.bread} />
      <rect x="176" y="112" width="8" height="16" fill={C.flesh} />
      <rect x="220" y="70" width="20" height="58" rx="5" fill={C.crust} />
      <rect x="225" y="60" width="10" height="12" rx="2" fill={C.warn} />
      <Cut i={0} d="M20 142 L250 142" dash />
    </>
  ),
  cleanSpoon: (
    <>
      <rect x="40" y="64" width="110" height="86" rx="8" fill={C.pot} />
      <rect x="46" y="74" width="98" height="70" rx="6" fill={C.carrot} opacity=".85" />
      <ellipse cx="200" cy="56" rx="16" ry="10" fill={C.steel} />
      <rect x="214" y="52" width="70" height="7" rx="3" fill={C.steel} />
      <Cut i={0} d="M150 70 Q174 40 186 52" />
      <Cut i={1} d="M200 80 L200 120" />
      <Cut i={2} d="M192 112 L200 120 L208 112" />
    </>
  ),
  tasteSteps: (
    <>
      <circle cx="44" cy="80" r="22" fill={C.paper} />
      <circle cx="114" cy="80" r="22" fill={C.yolk} />
      <circle cx="184" cy="80" r="22" fill="#F8E3A0" />
      <circle cx="254" cy="80" r="22" fill={C.ok} />
      <Cut i={0} d="M70 80 L88 80" />
      <Cut i={1} d="M140 80 L158 80" />
      <Cut i={2} d="M210 80 L228 80" />
    </>
  ),
  // Module 5 · Eggs and vegetables
  yolkStages: (
    <>
      <ellipse cx="60" cy="80" rx="40" ry="50" fill={C.paper} />
      <circle cx="60" cy="86" r="22" fill="#F8C24A" />
      <path d="M48 104 Q60 126 72 104 Z" fill="#F8C24A" />
      <ellipse cx="150" cy="80" rx="40" ry="50" fill={C.paper} />
      <circle cx="150" cy="86" r="22" fill="#F2A93B" />
      <circle cx="150" cy="86" r="12" fill="#F8C24A" />
      <ellipse cx="240" cy="80" rx="40" ry="50" fill={C.paper} />
      <circle cx="240" cy="86" r="22" fill="#F5D27C" />
      <Cut i={0} d="M30 146 L90 146" />
      <Cut i={1} d="M120 146 L180 146" />
      <Cut i={2} d="M210 146 L270 146" />
    </>
  ),
  eggPeel: (
    <>
      <ellipse cx="150" cy="80" rx="48" ry="62" fill={C.bread} />
      <path d="M110 46 Q150 4 190 46 Q150 40 110 46 Z" fill={C.paper} />
      <Cut i={0} d="M118 40 Q150 30 182 40" dash />
    </>
  ),
  scramble: (
    <>
      <circle cx="140" cy="84" r="66" fill={C.potDark} />
      <rect x="204" y="78" width="84" height="12" rx="5" fill={C.handle} />
      <g fill="#F8D27A">
        <path d="M100 70 Q112 56 128 66 Q140 78 124 88 Q104 92 100 70 Z" />
        <path d="M140 56 Q160 48 170 64 Q172 80 154 80 Q136 76 140 56 Z" />
        <path d="M108 100 Q124 92 138 104 Q140 120 120 120 Q104 116 108 100 Z" />
        <path d="M150 96 Q170 90 178 106 Q174 122 156 118 Q144 110 150 96 Z" />
      </g>
      <Cut i={0} d="M196 84 Q170 60 140 84 Q110 108 90 84" />
    </>
  ),
  omeletteFold: (
    <>
      <path d="M50 110 A100 40 0 0 1 250 110 Z" fill="#F8D27A" />
      <path d="M50 110 A100 30 0 0 0 250 110" fill="#F5C860" />
      <Cut i={0} d="M70 80 Q150 30 230 80" />
      <Cut i={1} d="M220 66 L230 80 L214 84" />
    </>
  ),
  eggSieve: (
    <>
      <path d="M90 50 A60 44 0 0 0 210 50 Z" fill="none" stroke={C.pot} strokeWidth="4" strokeDasharray="5 4" />
      <rect x="208" y="46" width="70" height="7" rx="3" fill={C.handle} />
      <ellipse cx="150" cy="62" rx="40" ry="14" fill={C.paper} />
      <circle cx="150" cy="60" r="12" fill={C.yolk} />
      <path d="M110 150 L120 110 L180 110 L190 150 Z" fill={C.pot} />
      <Cut i={0} d="M140 96 L140 108" />
      <Cut i={1} d="M160 96 L160 108" />
    </>
  ),
  poach: (
    <>
      <rect x="60" y="50" width="180" height="96" rx="8" fill={C.pot} />
      <rect x="66" y="60" width="168" height="80" rx="6" fill={C.water} opacity=".55" />
      <ellipse cx="150" cy="116" rx="34" ry="16" fill={C.paper} />
      <circle cx="150" cy="112" r="11" fill={C.yolk} />
      <g fill={C.ice}><circle cx="100" cy="134" r="2.5" /><circle cx="200" cy="132" r="2.5" /></g>
      <Cut i={0} d="M150 20 L150 84" />
      <Cut i={1} d="M142 76 L150 84 L158 76" />
    </>
  ),
  zucchiniPan: (
    <>
      <circle cx="140" cy="80" r="68" fill={C.potDark} />
      <rect x="206" y="74" width="80" height="12" rx="5" fill={C.handle} />
      <g fill={C.veg}>
        <path d="M90 66 a14 14 0 0 1 28 0 Z" />
        <path d="M126 50 a14 14 0 0 1 28 0 Z" />
        <path d="M162 64 a14 14 0 0 1 28 0 Z" />
        <path d="M96 102 a14 14 0 0 1 28 0 Z" />
        <path d="M134 92 a14 14 0 0 1 28 0 Z" />
        <path d="M166 104 a14 14 0 0 1 28 0 Z" />
      </g>
      <g fill={C.bread}>
        <rect x="90" y="66" width="28" height="4" /><rect x="126" y="50" width="28" height="4" /><rect x="162" y="64" width="28" height="4" />
        <rect x="96" y="102" width="28" height="4" /><rect x="134" y="92" width="28" height="4" /><rect x="166" y="104" width="28" height="4" />
      </g>
      <Cut i={0} d="M140 12 A68 68 0 0 1 208 80" />
    </>
  ),
  // Module 6 · Meat and fish
  probeCenter: (
    <>
      <Board y={128} />
      <rect x="60" y="78" width="170" height="50" rx="16" fill={C.meat} />
      <rect x="66" y="84" width="158" height="38" rx="12" fill="#D98A7E" opacity=".6" />
      <line x1="145" y1="103" x2="290" y2="60" stroke={C.steelEdge} strokeWidth="4" strokeLinecap="round" />
      <Cut i={0} d="M145 103 A7 7 0 1 1 144.9 103" />
    </>
  ),
  carryOver: (
    <>
      <rect x="40" y="20" width="24" height="120" rx="12" fill={C.raisedBar} />
      <rect x="40" y="56" width="24" height="84" rx="12" fill={C.yolk} />
      <rect x="236" y="20" width="24" height="120" rx="12" fill={C.raisedBar} />
      <rect x="236" y="46" width="24" height="94" rx="12" fill={C.ok} />
      <rect x="110" y="96" width="80" height="30" rx="10" fill={C.meat} />
      <Cut i={0} d="M76 60 Q150 20 224 48" />
      <Cut i={1} d="M214 40 L224 48 L212 54" />
    </>
  ),
  restTent: (
    <>
      <Board y={128} />
      <rect x="80" y="96" width="140" height="32" rx="12" fill={C.meat} />
      <path d="M60 128 L150 60 L240 128" fill="none" stroke={C.steel} strokeWidth="5" strokeLinejoin="round" />
      <Cut i={0} d="M150 60 L150 92" dash />
    </>
  ),
  acrossGrain: (
    <>
      <Board y={128} />
      <rect x="40" y="84" width="220" height="44" rx="14" fill={C.meat} />
      <g stroke="#A84E44" strokeWidth="2">
        <line x1="54" y1="96" x2="246" y2="96" /><line x1="50" y1="106" x2="250" y2="106" /><line x1="54" y1="116" x2="246" y2="116" />
      </g>
      <Cut i={0} d="M110 70 L110 134" />
      <Cut i={1} d="M150 70 L150 134" />
      <Cut i={2} d="M190 70 L190 134" />
    </>
  ),
  flattenChicken: (
    <>
      <Board y={128} />
      <path d="M50 128 Q50 96 110 92 Q190 88 250 116 L250 128 Z" fill="#F2C4B4" />
      <rect x="70" y="40" width="150" height="12" rx="5" fill={C.potDark} />
      <rect x="140" y="52" width="10" height="20" fill={C.potDark} />
      <Cut i={0} d="M145 76 L145 98" />
      <Cut i={1} d="M137 90 L145 98 L153 90" />
      <Cut i={2} d="M50 104 L250 104" dash />
    </>
  ),
  fatNicks: (
    <>
      <Board y={130} />
      <path d="M40 120 Q40 70 120 64 Q220 58 260 90 Q262 120 250 130 L50 130 Q40 128 40 120 Z" fill={C.meat} />
      <path d="M40 120 Q40 70 120 64 Q220 58 260 90" fill="none" stroke={C.flesh} strokeWidth="10" />
      <Cut i={0} d="M80 66 L90 84" />
      <Cut i={1} d="M130 56 L134 76" />
      <Cut i={2} d="M180 56 L178 76" />
      <Cut i={3} d="M226 66 L216 84" />
    </>
  ),
  fishPress: (
    <>
      <rect x="30" y="116" width="200" height="16" rx="4" fill={C.potDark} />
      <rect x="230" y="118" width="60" height="7" rx="3" fill={C.handle} />
      <path d="M60 116 L60 96 Q60 82 80 82 L190 82 Q210 82 210 96 L210 116 Z" fill="#F4A582" />
      <rect x="60" y="110" width="150" height="6" fill="#9A9E9E" />
      <rect x="100" y="70" width="80" height="10" rx="3" fill={C.steel} />
      <rect x="136" y="30" width="8" height="42" rx="3" fill={C.handle} />
      <Cut i={0} d="M160 22 L160 60" />
      <Cut i={1} d="M152 52 L160 60 L168 52" />
    </>
  ),
  fishOpaque: (
    <>
      <rect x="30" y="116" width="200" height="16" rx="4" fill={C.potDark} />
      <rect x="230" y="118" width="60" height="7" rx="3" fill={C.handle} />
      <path d="M60 116 L60 76 Q60 62 80 62 L190 62 Q210 62 210 76 L210 116 Z" fill="#F4A582" />
      <path d="M60 116 L60 76 L210 76 L210 116 Z" fill="#F7D3BF" />
      <rect x="60" y="110" width="150" height="6" fill="#9A9E9E" />
      <Cut i={0} d="M230 76 L230 116" />
      <Cut i={1} d="M50 76 L220 76" dash />
    </>
  ),
  // Module 7 · Soups and sauces
  coldStart: (
    <>
      <rect x="60" y="40" width="180" height="106" rx="8" fill={C.pot} />
      <rect x="66" y="56" width="168" height="84" rx="6" fill={C.water} opacity=".5" />
      <g fill={C.flesh}>
        <rect x="90" y="104" width="50" height="14" rx="7" transform="rotate(-12 115 111)" />
        <rect x="150" y="110" width="56" height="14" rx="7" transform="rotate(10 178 117)" />
        <rect x="120" y="86" width="46" height="13" rx="6" />
      </g>
      <g fill={C.ice}><rect x="86" y="62" width="14" height="14" rx="3" /><rect x="196" y="66" width="14" height="14" rx="3" /></g>
      <Cut i={0} d="M250 56 L250 92" />
      <Cut i={1} d="M242 84 L250 92 L258 84" />
    </>
  ),
  skim: (
    <>
      <rect x="60" y="60" width="180" height="86" rx="8" fill={C.pot} />
      <rect x="66" y="70" width="168" height="70" rx="6" fill={C.bread} opacity=".6" />
      <path d="M90 72 Q110 64 130 72 Q150 66 170 72" fill="none" stroke="#B9B2A6" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="200" cy="66" rx="22" ry="8" fill={C.steel} />
      <rect x="216" y="20" width="8" height="48" rx="3" fill={C.steel} transform="rotate(20 220 44)" />
      <Cut i={0} d="M96 60 Q140 44 184 58" />
    </>
  ),
  blend: (
    <>
      <rect x="60" y="70" width="180" height="76" rx="8" fill={C.pot} />
      <rect x="66" y="80" width="168" height="60" rx="6" fill={C.carrot} />
      <rect x="140" y="10" width="20" height="100" rx="6" fill={C.handle} />
      <rect x="134" y="104" width="32" height="14" rx="4" fill={C.steel} />
      <Cut i={0} d="M110 118 A40 14 0 1 0 190 118" />
      <Cut i={1} d="M184 110 L190 118 L180 122" />
    </>
  ),
  deglaze: (
    <>
      <rect x="40" y="110" width="190" height="16" rx="4" fill={C.potDark} />
      <rect x="230" y="112" width="60" height="7" rx="3" fill={C.handle} />
      <ellipse cx="135" cy="108" rx="80" ry="6" fill={C.crust} />
      <path d="M70 30 L110 30 L104 60 L76 60 Z" fill={C.ice} opacity=".7" transform="rotate(30 90 45)" />
      <Cut i={0} d="M108 64 Q118 84 120 102" />
      <rect x="150" y="60" width="8" height="46" rx="3" fill={C.wood} transform="rotate(-25 154 83)" />
      <Cut i={1} d="M150 104 L200 104" />
    </>
  ),
  coatSpoon: (
    <>
      <ellipse cx="120" cy="80" rx="64" ry="40" fill={C.crust} />
      <ellipse cx="120" cy="80" rx="54" ry="32" fill="#A0582F" />
      <rect x="184" y="74" width="100" height="12" rx="6" fill={C.steel} />
      <path d="M84 64 L156 98" stroke={C.steel} strokeWidth="8" strokeLinecap="round" />
      <Cut i={0} d="M84 64 L156 98" />
    </>
  ),
  roux: (
    <>
      <rect x="60" y="80" width="180" height="66" rx="8" fill={C.pot} />
      <ellipse cx="150" cy="96" rx="80" ry="10" fill="#F2DDA4" />
      <rect x="196" y="20" width="8" height="70" rx="3" fill={C.wood} transform="rotate(20 200 55)" />
      <Cut i={0} d="M100 96 Q150 84 200 96" />
    </>
  ),
  whiskMilk: (
    <>
      <rect x="60" y="80" width="180" height="66" rx="8" fill={C.pot} />
      <ellipse cx="150" cy="96" rx="80" ry="10" fill={C.paper} />
      <path d="M60 30 L100 30 L96 58 L64 58 Z" fill={C.ice} transform="rotate(25 80 44)" />
      <g stroke={C.steel} strokeWidth="2.5" fill="none">
        <path d="M186 28 L186 70 Q196 92 206 70 L206 28" />
        <path d="M192 28 L192 70 Q196 84 200 70 L200 28" />
      </g>
      <Cut i={0} d="M96 60 Q104 74 108 88" />
      <Cut i={1} d="M170 100 A26 8 0 1 0 222 100" />
    </>
  ),
  jarRatio: (
    <>
      <rect x="110" y="30" width="80" height="120" rx="10" fill={C.ice} opacity=".35" />
      <rect x="114" y="34" width="72" height="10" rx="3" fill={C.handle} />
      <rect x="114" y="120" width="72" height="26" rx="6" fill="#C9B07A" />
      <rect x="114" y="46" width="72" height="74" fill={C.yolk} opacity=".75" />
      <Cut i={0} d="M204 120 L204 146" />
      <Cut i={1} d="M220 46 L220 146" />
    </>
  ),
  emulsion: (
    <>
      <path d="M50 80 A100 60 0 0 0 250 80 Z" fill={C.pot} />
      <ellipse cx="150" cy="80" rx="100" ry="12" fill="#F8E3A0" />
      <path d="M200 10 L230 10 L224 40 L206 40 Z" fill={C.yolk} opacity=".8" transform="rotate(-20 215 25)" />
      <g fill={C.yolk}><ellipse cx="196" cy="54" rx="2.5" ry="4" /><ellipse cx="190" cy="68" rx="2.5" ry="4" /></g>
      <g stroke={C.steel} strokeWidth="2.5" fill="none">
        <path d="M110 10 L120 56 Q134 76 138 52 L128 8" />
      </g>
      <Cut i={0} d="M96 84 A40 8 0 1 0 176 84" />
    </>
  ),
  // Module 8 · Rice, pasta, potatoes
  rinseRice: (
    <>
      <path d="M80 60 A70 50 0 0 0 220 60 Z" fill="none" stroke={C.pot} strokeWidth="4" strokeDasharray="5 4" />
      <rect x="218" y="56" width="70" height="7" rx="3" fill={C.handle} />
      <ellipse cx="150" cy="72" rx="56" ry="14" fill={C.paper} />
      <Cut i={0} d="M130 10 L130 50" />
      <Cut i={1} d="M150 6 L150 50" />
      <Cut i={2} d="M170 10 L170 50" />
      <path d="M110 150 L120 118 L180 118 L190 150 Z" fill={C.ice} opacity=".5" />
    </>
  ),
  lidOn: (
    <>
      <rect x="70" y="70" width="160" height="76" rx="8" fill={C.pot} />
      <rect x="64" y="60" width="172" height="12" rx="6" fill={C.potDark} />
      <rect x="138" y="48" width="24" height="12" rx="4" fill={C.handle} />
      <Cut i={0} d="M40 40 L260 40" dash />
      <Cut i={1} d="M90 150 L210 150" />
    </>
  ),
  alDente: (
    <>
      <ellipse cx="150" cy="80" rx="80" ry="56" fill="#F2D58C" />
      <ellipse cx="150" cy="80" rx="54" ry="34" fill={C.bg} />
      <Cut i={0} d="M118 80 A32 10 0 1 0 182 80 A32 10 0 1 0 118 80" />
    </>
  ),
  pastaWater: (
    <>
      <rect x="40" y="60" width="150" height="86" rx="8" fill={C.pot} />
      <rect x="46" y="70" width="138" height="70" rx="6" fill="#D8DCC8" opacity=".7" />
      <path d="M210 90 L262 90 L256 146 L216 146 Z" fill={C.pot} />
      <rect x="214" y="98" width="44" height="44" rx="4" fill="#D8DCC8" opacity=".7" />
      <Cut i={0} d="M150 66 Q190 30 230 84" />
      <Cut i={1} d="M220 78 L230 86 L234 74" />
    </>
  ),
  potatoKnife: (
    <>
      <Board y={128} />
      <ellipse cx="140" cy="100" rx="70" ry="30" fill={C.bread} />
      <path d="M150 20 L164 20 L160 104 L154 104 Z" fill={C.steel} />
      <rect x="148" y="6" width="18" height="16" rx="4" fill={C.handle} />
      <Cut i={0} d="M176 30 L176 92" />
      <Cut i={1} d="M184 38 L176 30 L168 38" />
    </>
  ),
  steamDry: (
    <>
      <rect x="60" y="70" width="180" height="76" rx="8" fill={C.pot} />
      <g fill={C.bread}>
        <circle cx="110" cy="96" r="18" /><circle cx="150" cy="90" r="20" /><circle cx="192" cy="96" r="18" />
      </g>
      <Cut i={0} d="M110 62 Q100 48 110 32" />
      <Cut i={1} d="M150 62 Q140 46 150 28" />
      <Cut i={2} d="M190 62 Q180 48 190 32" />
    </>
  ),
  roughEdges: (
    <>
      <path d="M60 60 A90 64 0 0 0 240 60 Z" fill="none" stroke={C.pot} strokeWidth="5" strokeDasharray="6 4" />
      <g fill={C.bread} stroke="#FFF3D6" strokeWidth="3" strokeDasharray="2 3">
        <rect x="100" y="70" width="34" height="30" rx="8" />
        <rect x="144" y="64" width="34" height="30" rx="8" />
        <rect x="126" y="96" width="34" height="30" rx="8" />
      </g>
      <Cut i={0} d="M40 40 Q60 20 80 40" />
      <Cut i={1} d="M220 40 Q240 20 260 40" />
    </>
  ),
  riceToast: (
    <>
      <rect x="60" y="86" width="180" height="60" rx="8" fill={C.pot} />
      <g fill={C.paper}>
        <ellipse cx="110" cy="96" rx="10" ry="4" /><ellipse cx="140" cy="98" rx="10" ry="4" /><ellipse cx="170" cy="94" rx="10" ry="4" /><ellipse cx="196" cy="98" rx="10" ry="4" />
      </g>
      <ellipse cx="150" cy="40" rx="50" ry="20" fill={C.paper} opacity=".55" />
      <ellipse cx="150" cy="40" rx="26" ry="10" fill={C.paper} />
      <Cut i={0} d="M100 40 A50 20 0 1 0 200 40 A50 20 0 1 0 100 40" />
    </>
  ),
  ladleStock: (
    <>
      <rect x="40" y="80" width="150" height="66" rx="8" fill={C.pot} />
      <ellipse cx="115" cy="94" rx="70" ry="10" fill="#F2E2B4" />
      <rect x="206" y="90" width="80" height="56" rx="8" fill={C.pot} />
      <rect x="212" y="98" width="68" height="40" rx="6" fill={C.bread} opacity=".6" />
      <ellipse cx="170" cy="58" rx="16" ry="8" fill={C.steel} />
      <rect x="184" y="24" width="6" height="40" rx="3" fill={C.steel} transform="rotate(30 187 44)" />
      <Cut i={0} d="M240 86 Q210 40 176 50" />
      <Cut i={1} d="M150 72 L150 86" />
    </>
  ),
  // Module 3 · Cold station
  saladBath: (
    <>
      <path d="M50 70 A100 70 0 0 0 250 70 Z" fill={C.pot} />
      <ellipse cx="150" cy="70" rx="100" ry="12" fill={C.water} opacity=".7" />
      <g fill={C.leaf}>
        <ellipse cx="120" cy="64" rx="22" ry="9" transform="rotate(-15 120 64)" />
        <ellipse cx="166" cy="62" rx="24" ry="9" transform="rotate(12 166 62)" />
      </g>
      <g fill={C.ice}>
        <rect x="92" y="72" width="12" height="12" rx="2" transform="rotate(15 98 78)" />
        <rect x="196" y="72" width="12" height="12" rx="2" transform="rotate(-10 202 78)" />
      </g>
      <Cut i={0} d="M130 40 L130 18" />
      <Cut i={1} d="M170 40 L170 18" />
      <Cut i={2} d="M110 140 L190 140" dash />
    </>
  ),
  spinner: (
    <>
      <path d="M80 60 L220 60 L208 146 L92 146 Z" fill={C.pot} />
      <path d="M90 66 L210 66 L200 138 L100 138 Z" fill="none" stroke={C.steel} strokeWidth="2" strokeDasharray="4 4" />
      <ellipse cx="150" cy="96" rx="40" ry="16" fill={C.leaf} />
      <rect x="72" y="50" width="156" height="12" rx="6" fill={C.potDark} />
      <rect x="146" y="30" width="8" height="22" rx="3" fill={C.handle} />
      <Cut i={0} d="M110 30 A40 10 0 1 0 190 30" />
      <Cut i={1} d="M184 22 L190 30 L180 34" />
    </>
  ),
  dressingJars: (
    <>
      {[60, 150, 240].map((x, i) => (
        <g key={x}>
          <rect x={x - 26} y="50" width="52" height="96" rx="8" fill={C.ice} opacity=".35" />
          <rect x={x - 24} y="40" width="48" height="12" rx="3" fill={C.handle} />
          <rect x={x - 22} y={[96, 110, 84][i]} width="44" height={[46, 32, 58][i]} rx="5" fill={[C.yolk, '#F8E3A0', C.paper][i]} opacity=".8" />
        </g>
      ))}
      <Cut i={0} d="M44 96 L76 96" />
      <Cut i={1} d="M134 110 L166 110" />
      <Cut i={2} d="M224 84 L256 84" />
    </>
  ),
  saladLayers: (
    <>
      <path d="M50 64 A100 74 0 0 0 250 64 Z" fill={C.pot} />
      <ellipse cx="150" cy="64" rx="100" ry="12" fill={C.leafDark} />
      <g fill={C.leaf}>
        <ellipse cx="110" cy="58" rx="22" ry="8" /><ellipse cx="190" cy="58" rx="22" ry="8" />
      </g>
      <g fill={C.warn}><circle cx="140" cy="52" r="7" /><circle cx="168" cy="54" r="7" /></g>
      <g fill={C.bread}><rect x="120" y="40" width="10" height="10" rx="2" /><rect x="176" y="38" width="10" height="10" rx="2" /></g>
      <Cut i={0} d="M150 10 Q150 24 150 34" />
      <Cut i={1} d="M70 64 Q150 100 230 64" />
    </>
  ),
  coldStation: (
    <>
      <rect x="30" y="96" width="240" height="50" rx="8" fill={C.ice} opacity=".6" />
      {[50, 110, 170, 230].map((x, i) => (
        <g key={x}>
          <rect x={x} y="70" width="48" height="50" rx="6" fill={C.fridge} />
          <rect x={x + 6} y="76" width="36" height="20" rx="4" fill={[C.leaf, C.warn, C.yolk, C.paper][i]} />
        </g>
      ))}
      <Cut i={0} d="M40 56 L260 56" />
      <Cut i={1} d="M40 150 L260 150" dash />
    </>
  ),
  // Module 7 · Meat prep
  thawPlate: (
    <>
      <rect x="40" y="20" width="220" height="130" rx="10" fill={C.fridge} opacity=".25" />
      <ellipse cx="150" cy="112" rx="80" ry="16" fill={C.paper} />
      <ellipse cx="150" cy="104" rx="50" ry="16" fill={C.meat} />
      <ellipse cx="150" cy="102" rx="18" ry="6" fill={C.ice} />
      <Cut i={0} d="M70 40 L90 40 M80 30 L80 50 M73 33 L87 47 M87 33 L73 47" />
      <Cut i={1} d="M150 102 m-30 0 a30 10 0 1 0 60 0 a30 10 0 1 0 -60 0" />
    </>
  ),
  thawBath: (
    <>
      <path d="M50 50 A100 74 0 0 0 250 50 Z" fill={C.pot} />
      <ellipse cx="150" cy="50" rx="100" ry="12" fill={C.water} opacity=".8" />
      <rect x="110" y="62" width="80" height="40" rx="8" fill={C.ice} opacity=".6" />
      <ellipse cx="150" cy="82" rx="30" ry="12" fill={C.meat} />
      <Cut i={0} d="M60 20 Q80 6 100 20" />
      <Cut i={1} d="M200 20 Q220 6 240 20" />
    </>
  ),
  silverSkin: (
    <>
      <Board y={128} />
      <path d="M40 112 Q60 80 150 80 Q250 80 262 112 Z" fill={C.meat} />
      <path d="M90 86 Q150 78 220 86" stroke={C.paper} strokeWidth="5" fill="none" opacity=".8" />
      <path d="M200 72 L270 60 L272 66 L204 80 Z" fill={C.steel} />
      <rect x="268" y="52" width="26" height="14" rx="4" fill={C.handle} transform="rotate(-10 280 60)" />
      <Cut i={0} d="M90 86 Q150 76 200 80" />
      <Cut i={1} d="M70 70 L96 82" />
    </>
  ),
  butterfly: (
    <>
      <Board y={128} />
      <path d="M50 110 Q60 70 150 64 Q240 70 250 110 Z" fill={C.flesh} />
      <path d="M260 88 L120 88" stroke={C.steel} strokeWidth="6" strokeLinecap="round" />
      <rect x="258" y="80" width="30" height="14" rx="4" fill={C.handle} />
      <Cut i={0} d="M60 88 L240 88" dash />
      <Cut i={1} d="M30 64 L30 110" />
    </>
  ),
  portionScale: (
    <>
      <rect x="80" y="110" width="140" height="36" rx="8" fill={C.steelEdge} />
      <rect x="126" y="120" width="48" height="16" rx="3" fill={C.bg} />
      <rect x="70" y="102" width="160" height="8" rx="4" fill={C.steel} />
      <ellipse cx="150" cy="92" rx="44" ry="14" fill={C.flesh} />
      <Cut i={0} d="M134 128 L166 128" />
      <Cut i={1} d="M150 40 L150 70" />
      <Cut i={2} d="M140 60 L150 72 L160 60" />
    </>
  ),
  pinBones: (
    <>
      <Board y={128} />
      <path d="M30 110 Q50 70 160 66 Q250 70 270 104 L270 118 L30 118 Z" fill={C.carrot} opacity=".85" />
      <g stroke={C.paper} strokeWidth="2">
        <path d="M100 80 L94 74" /><path d="M130 76 L124 70" /><path d="M160 74 L154 68" /><path d="M190 76 L184 70" />
      </g>
      <g stroke={C.steel} strokeWidth="3" strokeLinecap="round">
        <path d="M168 66 L200 22" /><path d="M162 62 L188 18" />
      </g>
      <Cut i={0} d="M210 70 L80 70" dash />
      <Cut i={1} d="M150 54 L120 36" />
    </>
  ),
  skinFish: (
    <>
      <Board y={128} />
      <path d="M40 116 L250 116" stroke={C.steelEdge} strokeWidth="5" strokeLinecap="round" />
      <path d="M70 112 Q90 80 170 80 Q240 84 250 112 Z" fill={C.carrot} opacity=".85" />
      <path d="M30 104 L130 112 L130 116 L30 110 Z" fill={C.steel} />
      <rect x="4" y="96" width="30" height="14" rx="4" fill={C.handle} />
      <Cut i={0} d="M262 104 L282 104 M262 104 L268 98 M262 104 L268 110" />
      <Cut i={1} d="M282 120 L262 120 M282 120 L276 114 M282 120 L276 126" />
    </>
  ),
  // Module 8 · Soups
  roastBones: (
    <>
      <rect x="40" y="96" width="220" height="40" rx="6" fill={C.potDark} />
      <g fill={C.crust}>
        <rect x="70" y="80" width="50" height="22" rx="11" /><rect x="130" y="76" width="44" height="26" rx="13" /><rect x="184" y="82" width="46" height="20" rx="10" />
      </g>
      <g fill={C.ring}><circle cx="74" cy="91" r="7" /><circle cx="226" cy="92" r="6" /></g>
      <Cut i={0} d="M80 60 Q90 46 80 32" />
      <Cut i={1} d="M150 56 Q160 42 150 28" />
      <Cut i={2} d="M220 60 Q230 46 220 32" />
    </>
  ),
  fishRinse: (
    <>
      <path d="M50 70 A100 70 0 0 0 250 70 Z" fill={C.pot} />
      <ellipse cx="150" cy="70" rx="100" ry="12" fill={C.water} opacity=".7" />
      <path d="M100 74 L170 74 L196 62 L196 86 L170 74" fill={C.steel} />
      <g stroke={C.steelEdge} strokeWidth="2"><path d="M110 74 L110 66" /><path d="M126 74 L126 64" /><path d="M142 74 L142 64" /><path d="M158 74 L158 66" /></g>
      <Cut i={0} d="M150 10 L150 44" />
      <Cut i={1} d="M134 12 L134 40" />
      <Cut i={2} d="M166 12 L166 40" />
    </>
  ),
  sweatVeg: (
    <>
      <rect x="50" y="96" width="200" height="40" rx="8" fill={C.pot} />
      <rect x="250" y="108" width="40" height="10" rx="5" fill={C.handle} />
      <g fill={C.flesh}>
        <rect x="80" y="86" width="14" height="14" rx="3" /><rect x="110" y="84" width="14" height="14" rx="3" /><rect x="180" y="86" width="14" height="14" rx="3" />
      </g>
      <g fill={C.carrot}><rect x="140" y="86" width="14" height="14" rx="3" /><rect x="206" y="84" width="14" height="14" rx="3" /></g>
      <g fill={C.leaf}><rect x="160" y="80" width="14" height="14" rx="3" /></g>
      <Cut i={0} d="M70 140 L230 140" dash />
      <Cut i={1} d="M110 60 Q150 40 190 60" />
    </>
  ),
  charOnion: (
    <>
      <rect x="50" y="110" width="200" height="22" rx="8" fill={C.steelEdge} />
      <rect x="250" y="114" width="40" height="10" rx="5" fill={C.handle} />
      <path d="M100 108 A50 50 0 0 1 200 108 Z" fill={C.skin} />
      <path d="M112 108 A38 38 0 0 1 188 108" fill="none" stroke={C.skinShade} strokeWidth="3" />
      <rect x="100" y="104" width="100" height="6" rx="3" fill={C.crust} />
      <Cut i={0} d="M90 140 L210 140" />
    </>
  ),
  clothStrain: (
    <>
      <rect x="70" y="96" width="160" height="56" rx="8" fill={C.pot} />
      <path d="M60 60 Q150 120 240 60 Z" fill={C.paper} opacity=".85" />
      <path d="M60 60 L240 60" stroke={C.steelEdge} strokeWidth="4" strokeLinecap="round" />
      <Cut i={0} d="M150 12 L150 50" />
      <Cut i={1} d="M150 98 L150 120" dash />
    </>
  ),
  temperLiaison: (
    <>
      <path d="M150 80 A60 50 0 0 0 270 80 Z" fill={C.pot} />
      <ellipse cx="210" cy="80" rx="60" ry="9" fill="#F8E3A0" />
      <rect x="30" y="90" width="90" height="56" rx="8" fill={C.pot} />
      <ellipse cx="75" cy="98" rx="40" ry="8" fill="#F2E2B4" />
      <ellipse cx="120" cy="40" rx="18" ry="9" fill={C.steel} />
      <rect x="60" y="28" width="50" height="6" rx="3" fill={C.steel} transform="rotate(-20 85 31)" />
      <Cut i={0} d="M134 46 Q160 54 176 72" />
      <Cut i={1} d="M186 92 A24 6 0 1 0 234 92" />
    </>
  ),
  // Module 9 · Mother sauces
  cheeseIn: (
    <>
      <rect x="70" y="80" width="160" height="66" rx="8" fill={C.pot} />
      <ellipse cx="150" cy="88" rx="74" ry="10" fill="#F2E2B4" />
      <g fill={C.yolk}>
        <rect x="120" y="30" width="4" height="12" rx="2" transform="rotate(20 122 36)" /><rect x="140" y="20" width="4" height="12" rx="2" transform="rotate(-15 142 26)" />
        <rect x="160" y="34" width="4" height="12" rx="2" transform="rotate(30 162 40)" /><rect x="176" y="22" width="4" height="12" rx="2" transform="rotate(-25 178 28)" />
      </g>
      <Cut i={0} d="M150 50 L150 76" />
      <Cut i={1} d="M140 66 L150 76 L160 66" />
    </>
  ),
  brownRoux: (
    <>
      <rect x="50" y="100" width="200" height="36" rx="8" fill={C.pot} />
      <rect x="250" y="110" width="40" height="10" rx="5" fill={C.handle} />
      <ellipse cx="150" cy="104" rx="90" ry="9" fill="#8A5A34" />
      <rect x="130" y="40" width="8" height="66" rx="3" fill={C.woodTop} transform="rotate(20 134 73)" />
      <g>
        <circle cx="60" cy="40" r="10" fill={C.flesh} /><circle cx="90" cy="40" r="10" fill={C.bread} /><circle cx="120" cy="40" r="10" fill="#8A5A34" />
      </g>
      <Cut i={0} d="M70 40 L80 40 M100 40 L110 40" />
      <Cut i={1} d="M108 120 A40 6 0 1 0 188 120" />
    </>
  ),
  tomatoSimmer: (
    <>
      <rect x="60" y="80" width="180" height="66" rx="8" fill={C.pot} />
      <ellipse cx="150" cy="88" rx="84" ry="10" fill={C.warn} />
      <ellipse cx="150" cy="88" rx="62" ry="6" fill="#C9452F" />
      <Cut i={0} d="M70 88 A80 10 0 0 0 230 88" />
      <Cut i={1} d="M110 60 Q100 46 110 32" />
      <Cut i={2} d="M190 60 Q180 46 190 32" />
    </>
  ),
  bainMarie: (
    <>
      <rect x="80" y="96" width="140" height="54" rx="8" fill={C.potDark} />
      <path d="M70 60 A80 50 0 0 0 230 60 Z" fill={C.steel} />
      <ellipse cx="150" cy="60" rx="80" ry="9" fill={C.yolk} />
      <ellipse cx="150" cy="126" rx="62" ry="8" fill={C.water} opacity=".7" />
      <Cut i={0} d="M120 118 Q114 110 120 102" />
      <Cut i={1} d="M180 118 Q174 110 180 102" />
      <Cut i={2} d="M150 104 L150 116" dash />
    </>
  ),
  ribbon: (
    <>
      <path d="M60 80 A90 60 0 0 0 240 80 Z" fill={C.steel} />
      <ellipse cx="150" cy="80" rx="90" ry="10" fill={C.yolk} />
      <g stroke={C.steelEdge} strokeWidth="2.5" fill="none"><path d="M180 10 L170 50 Q160 66 154 50 L166 8" /></g>
      <Cut i={0} d="M162 60 Q150 74 130 78 Q110 80 100 76" />
    </>
  ),
  butterStream: (
    <>
      <path d="M40 90 A80 56 0 0 0 200 90 Z" fill={C.steel} />
      <ellipse cx="120" cy="90" rx="80" ry="9" fill="#F8E3A0" />
      <path d="M220 30 L268 30 L262 60 L226 60 Z" fill={C.pot} transform="rotate(-25 244 45)" />
      <g stroke={C.steelEdge} strokeWidth="2.5" fill="none"><path d="M70 20 L86 66 Q98 84 104 62 L92 18" /></g>
      <Cut i={0} d="M216 62 Q190 66 170 86" />
      <Cut i={1} d="M96 96 A28 6 0 1 0 152 96" />
    </>
  ),
  reduction: (
    <>
      <rect x="70" y="70" width="160" height="76" rx="8" fill={C.pot} />
      <rect x="230" y="84" width="40" height="10" rx="5" fill={C.handle} />
      <rect x="76" y="124" width="148" height="16" rx="4" fill="#E8D6A8" />
      <Cut i={0} d="M80 84 L220 84" dash />
      <Cut i={1} d="M80 104 L220 104" dash />
      <Cut i={2} d="M150 50 L150 120" />
      <Cut i={3} d="M140 110 L150 120 L160 110" />
    </>
  ),
  butterCubes: (
    <>
      <rect x="60" y="96" width="180" height="50" rx="8" fill={C.pot} />
      <rect x="240" y="108" width="40" height="10" rx="5" fill={C.handle} />
      <ellipse cx="150" cy="102" rx="84" ry="9" fill="#F8E3A0" />
      <g fill={C.yolk}>
        <rect x="120" y="30" width="18" height="18" rx="3" /><rect x="150" y="12" width="18" height="18" rx="3" /><rect x="176" y="34" width="18" height="18" rx="3" />
      </g>
      <Cut i={0} d="M130 56 L134 86" />
      <Cut i={1} d="M110 110 A40 6 0 1 0 190 110" />
    </>
  ),
  // Module 11 · Pulses and grains
  soakBeans: (
    <>
      <path d="M50 60 A100 80 0 0 0 250 60 Z" fill={C.pot} />
      <ellipse cx="150" cy="60" rx="100" ry="12" fill={C.water} opacity=".7" />
      <g fill={C.paper}>
        <ellipse cx="110" cy="100" rx="9" ry="6" /><ellipse cx="130" cy="108" rx="9" ry="6" /><ellipse cx="150" cy="102" rx="9" ry="6" />
        <ellipse cx="170" cy="110" rx="9" ry="6" /><ellipse cx="190" cy="100" rx="9" ry="6" /><ellipse cx="140" cy="118" rx="9" ry="6" /><ellipse cx="162" cy="122" rx="9" ry="6" />
      </g>
      <Cut i={0} d="M262 120 L262 66" />
      <Cut i={1} d="M254 74 L262 66 L270 74" />
    </>
  ),
  layerDish: (
    <>
      <rect x="50" y="50" width="200" height="96" rx="12" fill="#B4643C" />
      <rect x="60" y="112" width="180" height="24" fill={C.paper} />
      <rect x="60" y="96" width="180" height="16" fill={C.warn} opacity=".8" />
      <rect x="60" y="76" width="180" height="20" fill={C.paper} />
      <rect x="60" y="60" width="180" height="16" fill={C.warn} opacity=".8" />
      <Cut i={0} d="M268 136 L268 60" />
      <Cut i={1} d="M262 136 L274 136 M262 112 L274 112 M262 96 L274 96 M262 76 L274 76" />
    </>
  ),
  pinchTest: (
    <>
      <path d="M60 130 Q70 70 130 70 L150 84 L120 96 Q100 110 100 130 Z" fill={C.skin} />
      <path d="M240 130 Q230 70 170 70 L150 84 L180 96 Q200 110 200 130 Z" fill={C.skinShade} />
      <ellipse cx="150" cy="84" rx="16" ry="7" fill="#E8C98E" />
      <Cut i={0} d="M110 50 L136 74" />
      <Cut i={1} d="M190 50 L164 74" />
    </>
  ),
  forkFluff: (
    <>
      <rect x="60" y="80" width="180" height="66" rx="8" fill={C.pot} />
      <ellipse cx="150" cy="88" rx="84" ry="10" fill="#D9B26A" />
      <g fill="#E8C98E"><circle cx="110" cy="86" r="3" /><circle cx="130" cy="82" r="3" /><circle cx="170" cy="84" r="3" /><circle cx="196" cy="88" r="3" /></g>
      <g stroke={C.steel} strokeWidth="3" strokeLinecap="round">
        <path d="M150 20 L150 50" /><path d="M140 50 L140 76" /><path d="M150 50 L150 76" /><path d="M160 50 L160 76" /><path d="M140 50 L160 50" />
      </g>
      <Cut i={0} d="M110 60 Q150 40 190 60" />
    </>
  ),
  // Module 12 · Braising
  braiseLevel: (
    <>
      <rect x="60" y="66" width="180" height="80" rx="10" fill={C.potDark} />
      <rect x="66" y="104" width="168" height="36" rx="6" fill="#8A4A2C" opacity=".85" />
      <g fill={C.crust}><rect x="84" y="86" width="40" height="34" rx="10" /><rect x="132" y="82" width="40" height="38" rx="10" /><rect x="180" y="88" width="38" height="32" rx="10" /></g>
      <rect x="54" y="52" width="192" height="12" rx="6" fill={C.pot} />
      <Cut i={0} d="M44 104 L256 104" dash />
      <Cut i={1} d="M110 40 Q150 22 190 40" />
    </>
  ),
  forkTender: (
    <>
      <Board y={128} />
      <rect x="90" y="88" width="120" height="40" rx="16" fill={C.crust} />
      <g stroke="#5A2A16" strokeWidth="2"><path d="M110 96 L112 122" /><path d="M130 94 L132 124" /><path d="M170 94 L168 124" /></g>
      <g stroke={C.steel} strokeWidth="3" strokeLinecap="round">
        <path d="M150 14 L150 50" /><path d="M140 50 L140 100" /><path d="M150 50 L150 100" /><path d="M160 50 L160 100" /><path d="M140 50 L160 50" />
      </g>
      <Cut i={0} d="M176 60 L176 100" />
      <Cut i={1} d="M170 92 L176 100 L182 92" />
    </>
  ),
  leafRib: (
    <>
      <Board y={128} />
      <path d="M60 120 Q60 50 150 40 Q240 50 240 120 Z" fill="#C8D69A" />
      <path d="M150 120 L150 50" stroke="#A9BC72" strokeWidth="10" strokeLinecap="round" />
      <path d="M190 58 L134 104 L140 110 L196 64 Z" fill={C.steel} />
      <Cut i={0} d="M150 112 L150 60" />
    </>
  ),
  rollSarma: (
    <>
      <Board y={128} />
      <path d="M40 124 L190 124 Q200 90 160 84 L40 84 Z" fill="#C8D69A" />
      <ellipse cx="80" cy="102" rx="26" ry="12" fill={C.meat} />
      <ellipse cx="214" cy="104" rx="30" ry="22" fill="#B8C982" />
      <path d="M196 96 Q214 86 232 100" stroke="#9AAE64" strokeWidth="3" fill="none" />
      <Cut i={0} d="M110 70 Q150 50 190 70" />
      <Cut i={1} d="M180 62 L190 70 L178 76" />
    </>
  ),
  sarmaPot: (
    <>
      <rect x="50" y="56" width="200" height="90" rx="10" fill={C.potDark} />
      <g fill="#B8C982">
        <ellipse cx="90" cy="120" rx="22" ry="14" /><ellipse cx="136" cy="120" rx="22" ry="14" /><ellipse cx="182" cy="120" rx="22" ry="14" /><ellipse cx="216" cy="120" rx="14" ry="14" />
        <ellipse cx="112" cy="96" rx="22" ry="14" /><ellipse cx="158" cy="96" rx="22" ry="14" /><ellipse cx="202" cy="96" rx="20" ry="14" />
      </g>
      <ellipse cx="150" cy="76" rx="84" ry="8" fill={C.paper} />
      <Cut i={0} d="M150 20 L150 62" />
      <Cut i={1} d="M140 52 L150 62 L160 52" />
    </>
  ),
  // Module 13 · Oven roasting
  dryBrine: (
    <>
      <rect x="50" y="12" width="200" height="140" rx="10" fill={C.fridge} opacity=".25" />
      <rect x="70" y="120" width="160" height="6" rx="3" fill={C.steelEdge} />
      <ellipse cx="150" cy="96" rx="60" ry="26" fill={C.flesh} />
      <g fill={C.paper}><circle cx="120" cy="80" r="2" /><circle cx="140" cy="74" r="2" /><circle cx="162" cy="76" r="2" /><circle cx="182" cy="84" r="2" /><circle cx="130" cy="90" r="2" /><circle cx="170" cy="92" r="2" /></g>
      <Cut i={0} d="M80 40 L100 40 M90 30 L90 50 M83 33 L97 47 M97 33 L83 47" />
      <Cut i={1} d="M200 40 Q220 30 240 40" />
    </>
  ),
  trussChicken: (
    <>
      <Board y={136} />
      <g>
        <ellipse cx="150" cy="96" rx="70" ry="40" fill={C.bread} />
        <ellipse cx="96" cy="112" rx="26" ry="16" fill="#D9A95E" transform="rotate(-20 96 112)" />
        <ellipse cx="204" cy="112" rx="26" ry="16" fill="#D9A95E" transform="rotate(20 204 112)" />
      </g>
      <Cut i={0} d="M108 124 Q150 140 192 124" />
      <Cut i={1} d="M140 132 Q150 146 160 132" />
    </>
  ),
  chickenProbe: (
    <>
      <rect x="40" y="128" width="220" height="10" rx="4" fill={C.potDark} />
      <g>
        <ellipse cx="150" cy="96" rx="70" ry="40" fill={C.bread} />
        <ellipse cx="96" cy="112" rx="26" ry="16" fill="#D9A95E" transform="rotate(-20 96 112)" />
        <ellipse cx="204" cy="112" rx="26" ry="16" fill="#D9A95E" transform="rotate(20 204 112)" />
      </g>
      <rect x="212" y="40" width="5" height="70" rx="2" fill={C.steel} transform="rotate(-30 214 75)" />
      <rect x="226" y="26" width="26" height="18" rx="4" fill={C.handle} transform="rotate(-30 239 35)" />
      <Cut i={0} d="M196 112 m-10 0 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0" />
    </>
  ),
  carveLeg: (
    <>
      <Board y={136} />
      <ellipse cx="140" cy="96" rx="70" ry="40" fill={C.bread} />
      <ellipse cx="226" cy="112" rx="28" ry="16" fill="#D9A95E" transform="rotate(30 226 112)" />
      <circle cx="200" cy="102" r="6" fill={C.paper} />
      <Cut i={0} d="M196 76 Q206 96 196 120" />
      <Cut i={1} d="M220 82 L240 70" />
    </>
  ),
  carveBreast: (
    <>
      <Board y={136} />
      <ellipse cx="150" cy="96" rx="70" ry="40" fill={C.bread} />
      <path d="M150 56 L150 130" stroke={C.ring} strokeWidth="3" />
      <path d="M140 20 L156 20 L152 64 L146 64 Z" fill={C.steel} />
      <Cut i={0} d="M156 64 L156 100 Q160 126 196 128" />
    </>
  ),
  tiedRoast: (
    <>
      <Board y={128} />
      <rect x="50" y="78" width="200" height="50" rx="24" fill={C.meat} />
      <g stroke={C.paper} strokeWidth="3">
        <path d="M80 78 L80 128" /><path d="M110 78 L110 128" /><path d="M140 78 L140 128" /><path d="M170 78 L170 128" /><path d="M200 78 L200 128" /><path d="M230 82 L230 124" />
      </g>
      <Cut i={0} d="M80 62 L110 62" />
      <Cut i={1} d="M80 56 L80 68 M110 56 L110 68" />
    </>
  ),
  vegGroups: (
    <>
      {[60, 150, 240].map((x, i) => (
        <g key={x}>
          <path d={`M${x - 40} 96 A40 30 0 0 0 ${x + 40} 96 Z`} fill={C.pot} />
          <g fill={[C.carrot, C.warn, C.veg][i]}>
            <rect x={x - 22} y="84" width="14" height="14" rx="3" /><rect x={x - 4} y="80" width="14" height="14" rx="3" /><rect x={x + 10} y="86" width="14" height="14" rx="3" />
          </g>
        </g>
      ))}
      <Cut i={0} d="M30 140 L90 140" />
      <Cut i={1} d="M120 140 L160 140" />
      <Cut i={2} d="M220 140 L240 140" />
    </>
  ),
  fatPour: (
    <>
      <g transform="rotate(-12 150 100)">
        <rect x="50" y="80" width="200" height="40" rx="6" fill={C.potDark} />
        <rect x="56" y="100" width="188" height="14" rx="3" fill="#7A3B22" />
        <rect x="56" y="92" width="188" height="8" rx="3" fill="#F2D58C" opacity=".85" />
      </g>
      <Cut i={0} d="M58 116 Q40 130 44 150" />
      <Cut i={1} d="M240 70 L240 96" dash />
    </>
  ),
  // Module 14 · Grill
  chimney: (
    <>
      <rect x="110" y="40" width="80" height="100" rx="6" fill={C.steelEdge} />
      <g fill={C.bg} opacity=".6"><circle cx="126" cy="128" r="4" /><circle cx="150" cy="128" r="4" /><circle cx="174" cy="128" r="4" /></g>
      <rect x="190" y="70" width="40" height="10" rx="5" fill={C.handle} />
      <g fill="#2A2A2A"><circle cx="128" cy="44" r="8" /><circle cx="150" cy="40" r="8" /><circle cx="172" cy="44" r="8" /></g>
      <Cut i={0} d="M130 30 Q122 18 132 6" />
      <Cut i={1} d="M150 28 Q142 16 152 4" />
      <Cut i={2} d="M170 30 Q162 18 172 6" />
    </>
  ),
  twoZone: (
    <>
      <path d="M30 80 A120 64 0 0 0 270 80 Z" fill={C.potDark} />
      <g fill="#D9D2C8"><circle cx="70" cy="96" r="9" /><circle cx="92" cy="104" r="9" /><circle cx="80" cy="116" r="9" /><circle cx="110" cy="96" r="9" /><circle cx="104" cy="114" r="9" /><circle cx="126" cy="106" r="9" /></g>
      <g fill={C.warn} opacity=".7"><circle cx="80" cy="104" r="4" /><circle cx="110" cy="108" r="4" /></g>
      <g stroke={C.steel} strokeWidth="3"><path d="M40 80 L260 80" /><path d="M60 70 L60 90" /><path d="M100 70 L100 90" /><path d="M140 70 L140 90" /><path d="M180 70 L180 90" /><path d="M220 70 L220 90" /></g>
      <Cut i={0} d="M70 54 Q60 40 70 26" />
      <Cut i={1} d="M110 54 Q100 40 110 26" />
      <Cut i={2} d="M160 60 L250 60" dash />
    </>
  ),
  handTest: (
    <>
      <path d="M40 120 A110 40 0 0 0 260 120 Z" fill={C.potDark} />
      <g stroke={C.steel} strokeWidth="3"><path d="M50 120 L250 120" /></g>
      <path d="M110 60 Q110 44 126 44 L196 44 Q206 44 206 54 Q206 64 196 64 L126 64 Q110 64 110 60 Z" fill={C.skin} />
      <Cut i={0} d="M230 64 L230 118" />
      <Cut i={1} d="M224 64 L236 64 M224 118 L236 118" />
    </>
  ),
  grillMarks: (
    <>
      <rect x="40" y="96" width="220" height="40" rx="8" fill="#2E2E2E" />
      <g stroke="#555" strokeWidth="4"><path d="M60 96 L60 136" /><path d="M90 96 L90 136" /><path d="M120 96 L120 136" /><path d="M150 96 L150 136" /><path d="M180 96 L180 136" /><path d="M210 96 L210 136" /><path d="M240 96 L240 136" /></g>
      <rect x="90" y="60" width="120" height="44" rx="12" fill={C.meat} />
      <g stroke={C.crust} strokeWidth="4" strokeLinecap="round"><path d="M104 66 L136 98" /><path d="M134 66 L166 98" /><path d="M164 66 L196 98" /></g>
      <Cut i={0} d="M220 40 A30 30 0 0 1 250 70" />
      <Cut i={1} d="M244 62 L250 70 L256 60" />
    </>
  ),
  kneadMince: (
    <>
      <path d="M50 70 A100 70 0 0 0 250 70 Z" fill={C.pot} />
      <ellipse cx="150" cy="80" rx="70" ry="22" fill={C.meat} />
      <g stroke="#E8A79F" strokeWidth="2" fill="none"><path d="M110 76 Q130 70 150 80 Q170 90 190 80" /></g>
      <Cut i={0} d="M150 60 Q150 30 180 24" />
      <Cut i={1} d="M150 60 Q150 34 120 26" />
    </>
  ),
  pattyDimple: (
    <>
      <Board y={128} />
      <g fill={C.meat}>
        <rect x="40" y="96" width="70" height="20" rx="10" /><rect x="40" y="70" width="70" height="20" rx="10" />
      </g>
      <ellipse cx="200" cy="108" rx="64" ry="18" fill={C.meat} />
      <ellipse cx="200" cy="106" rx="20" ry="6" fill="#A84E44" />
      <Cut i={0} d="M200 60 L200 96" />
      <Cut i={1} d="M192 88 L200 96 L208 88" />
    </>
  ),
  skewers: (
    <>
      <Board y={136} />
      {[66, 106].map((y) => (
        <g key={y}>
          <rect x="30" y={y - 2} width="240" height="4" rx="2" fill={C.woodTop} />
          <rect x="56" y={y - 14} width="28" height="28" rx="6" fill={C.bread} />
          <rect x="88" y={y - 12} width="10" height="24" rx="3" fill={C.warn} />
          <rect x="102" y={y - 14} width="28" height="28" rx="6" fill={C.bread} />
          <rect x="134" y={y - 12} width="10" height="24" rx="3" fill="#9C4D8F" />
          <rect x="148" y={y - 14} width="28" height="28" rx="6" fill={C.bread} />
          <rect x="180" y={y - 12} width="10" height="24" rx="3" fill={C.veg} />
          <rect x="194" y={y - 14} width="28" height="28" rx="6" fill={C.bread} />
        </g>
      ))}
      <Cut i={0} d="M84 40 L88 40 M98 40 L102 40" />
      <Cut i={1} d="M86 34 L86 46 M100 34 L100 46" />
    </>
  ),
  blisterPepper: (
    <>
      <path d="M40 120 A110 40 0 0 0 260 120 Z" fill={C.potDark} />
      <g stroke={C.steel} strokeWidth="3"><path d="M50 116 L250 116" /></g>
      <path d="M90 104 Q90 76 150 76 Q220 76 214 104 Z" fill={C.warn} />
      <g fill="#1E1E1E"><ellipse cx="120" cy="88" rx="12" ry="6" /><ellipse cx="160" cy="84" rx="14" ry="6" /><ellipse cx="196" cy="94" rx="10" ry="5" /></g>
      <rect x="80" y="86" width="12" height="6" rx="3" fill={C.leafDark} />
      <Cut i={0} d="M150 40 A30 12 0 1 1 149 40" />
    </>
  ),
  peelPepper: (
    <>
      <Board y={128} />
      <path d="M70 120 Q70 90 150 90 Q240 90 230 120 Z" fill={C.warn} />
      <path d="M190 92 Q220 70 250 60 L256 70 Q226 86 206 100 Z" fill="#3A2A22" />
      <Cut i={0} d="M200 96 Q230 76 252 64" />
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
