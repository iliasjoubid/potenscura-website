'use client';
import { useCallback, useRef, useState } from 'react';
import { haltes, haltesLabels } from '@/lib/gegevens';
import { Voorbeeld } from './Iconen';


const n = haltes.length;
const diepte = haltes.map((_, i) => Math.round((0.18 + 0.7 * Math.pow((n - 1 - i) / (n - 1), 1.3)) * 1e4) / 1e4);
const HY = 0;
const hoogte = (f: number) => HY + f * (1000 - HY);
const VLOER = Array.from({ length: 31 }, (_, i) => 500 + (i - 15) * 200);
const ASPECTEN = ['wonen', 'begeleiding', 'jij', 'ouders'] as const;

export default function Weg() {
  const [actief, zetActief] = useState(0);
  const [gewezen, zetGewezen] = useState(-1);
  const tekening = useRef<HTMLDivElement>(null);
  const knoppen = useRef<(HTMLButtonElement | null)[]>([]);
  const sleept = useRef(false);
  const start = useRef<{ x: number; y: number; opWeg: boolean } | null>(null);

  const zet = useCallback((i: number, focus = false) => {
    const j = Math.max(0, Math.min(n - 1, i));
    zetActief(j);
    if (focus) knoppen.current[j]?.focus();
  }, []);

  const dichtst = (clientY: number) => {
    const r = tekening.current!.getBoundingClientRect();
    const y = ((clientY - r.top) / r.height) * 1000;
    let beste = 0;
    for (let i = 1; i < n; i++) if (Math.abs(hoogte(diepte[i]) - y) < Math.abs(hoogte(diepte[beste]) - y)) beste = i;
    return beste;
  };

  const toetsen = (e: React.KeyboardEvent) => {
    const nieuw = ({ ArrowRight: actief + 1, ArrowUp: actief + 1, ArrowLeft: actief - 1, ArrowDown: actief - 1, Home: 0, End: n - 1 } as Record<string, number>)[e.key];
    if (nieuw === undefined) return;
    e.preventDefault();
    zet(nieuw, true);
  };

  return (
    <div
      className="weg"
      onPointerDown={(e) => { if (e.pointerType !== 'mouse') start.current = { x: e.clientX, y: e.clientY, opWeg: (e.target as Element).closest('svg') !== null }; }}
      onPointerCancel={() => { start.current = null; }}
      onPointerUp={(e) => {
        const s = start.current;
        if (!s) return;
        start.current = null;
        const dx = e.clientX - s.x, dy = e.clientY - s.y;
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) zet(actief + (dx < 0 ? 1 : -1));
        else if (s.opWeg && Math.abs(dx) < 10 && Math.abs(dy) < 10) zet(dichtst(e.clientY));
      }}
    >
      <span className="weg__horizon horizon--volg" aria-hidden="true" />
      <div className="weg__tekening" ref={tekening}>
        <svg
          className="weg__svg" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true" focusable="false"
          onPointerDown={(e) => {
            if (e.pointerType !== 'mouse' || e.button !== 0) return;
            sleept.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            zet(dichtst(e.clientY));
          }}
          onPointerMove={(e) => {
            if (e.pointerType !== 'mouse') return;
            const i = dichtst(e.clientY);
            if (sleept.current && i !== actief) zet(i);
            zetGewezen(i);
          }}
          onPointerUp={() => { sleept.current = false; }}
          onPointerLeave={() => zetGewezen(-1)}
        >
          <defs>
            <linearGradient id="weg-vervaag" gradientUnits="userSpaceOnUse" x1="0" y1={HY} x2="0" y2="1000">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="0.45" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <rect className="weg__gelopen" x="0" y="0" width="1000" height="1000" style={{ transform: `scaleY(${((1000 - hoogte(diepte[actief])) / 1000).toFixed(4)})` }} />
          <g className="weg__vloer" stroke="url(#weg-vervaag)">
            {VLOER.map((x) => <line key={x} x1="500" y1={HY} x2={x} y2="1000" />)}
          </g>
          {haltes.map((h, i) => (
            <line key={h.sleutel} className={`weg__dwars${i === actief ? ' is-actief' : i < actief ? ' is-voorbij' : ''}`} x1="0" y1={hoogte(diepte[i])} x2="1000" y2={hoogte(diepte[i])} />
          ))}
        </svg>
        <div className="weg__haltes" role="tablist" aria-label="Haltes van aankomst tot eigen benen" data-regels="meer" onKeyDown={toetsen}>
          {haltes.map((h, i) => (
            <button
              key={h.sleutel}
              ref={(el) => { knoppen.current[i] = el; }}
              className={`weg__halte${gewezen === i ? ' is-gewezen' : ''}`}
              role="tab" type="button" id={`halte-${h.sleutel}`} aria-controls={`paneel-${h.sleutel}`}
              aria-selected={i === actief} tabIndex={i === actief ? 0 : -1}
              style={{ top: `${hoogte(diepte[i]) / 10}%`, fontSize: `${(0.875 + (0.5 * (diepte[i] - 0.18)) / 0.7).toFixed(3)}em` }}
              onClick={() => zet(i)}
            >
              {h.naam}
            </button>
          ))}
        </div>
      </div>
      <div className="weg__panelen">
        {haltes.map((h, i) => (
          <div key={h.sleutel} className="weg__paneel" role="tabpanel" id={`paneel-${h.sleutel}`} aria-labelledby={`halte-${h.sleutel}`} tabIndex={0} data-actief={i === actief}>
            <h3 className="weg__naam">{h.naam}</h3>
            <dl className="weg__aspecten">
              {ASPECTEN.map((k) => (
                <div key={k}><dt>{haltesLabels[k]}</dt><dd>{h[k]}</dd></div>
              ))}
            </dl>
          </div>
        ))}
        <Voorbeeld className="weg__voorbeeld" />
      </div>
    </div>
  );
}
