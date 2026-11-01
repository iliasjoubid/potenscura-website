'use client';
import { useEffect, useRef, useState } from 'react';
import { LezerTekst } from './Lezer';
import { Voorbeeld } from './Iconen';
import { Wisselfoto } from './Beelden';
import { useLaterLaden } from '@/lib/laterLaden';
import type { Foto } from '@/lib/beeld';


export type Dagdeel = { deel: string; van: number; jongere: string; ouder: string };

const GROND = ['papier', 'papier', 'vlak', 'navy'] as const;

export default function EenDag({ delen, kop, intro, naast, fotos }: { delen: Dagdeel[]; kop: string; intro: string; naast?: boolean; fotos?: Foto[] }) {
  const [actief, zetActief] = useState(0);
  const [alle, laadAlle] = useLaterLaden();
  const gekozen = useRef(false);
  const knoppen = useRef<(HTMLButtonElement | null)[]>([]);
  const n = delen.length;

  useEffect(() => {
    if (gekozen.current) return;
    const nu = new Date();
    const uur = nu.getHours() + nu.getMinutes() / 60;
    const opBalk = uur < 6 ? uur + 24 : uur;
    const i = delen.findIndex((d, j) => opBalk >= d.van && opBalk < (j + 1 < n ? delen[j + 1].van : 30));
    if (i >= 0) zetActief(i);
  }, [delen, n]);

  const kies = (i: number, focus = false) => {
    gekozen.current = true;
    zetActief(i);
    if (focus) knoppen.current[i]?.focus();
  };
  const toetsen = (e: React.KeyboardEvent) => {
    const nieuw = ({ ArrowRight: (actief + 1) % n, ArrowLeft: (actief - 1 + n) % n, Home: 0, End: n - 1 } as Record<string, number>)[e.key];
    if (nieuw === undefined) return;
    e.preventDefault();
    kies(nieuw, true);
  };

  return (
    <div className={`vakken__vak een-dag${naast ? ' een-dag--naast' : ''}${fotos ? ' een-dag--foto' : ''}`} id="dag" data-grond={GROND[actief] ?? 'papier'}>
      {fotos && <Wisselfoto fotos={fotos} actief={actief} alle={alle} sizes="(min-width: 1100px) 26vw, (min-width: 600px) 50vw, calc(100vw - 40px)" className="een-dag__foto" />}
      <div className="een-dag__kop">
        <h2>{kop}</h2>
        <p>{intro}</p>
      </div>
      <div className="etmaal">
        <div className="etmaal__balk" role="tablist" aria-label="Een dag van 24 uur" onKeyDown={toetsen} onPointerEnter={laadAlle} onFocus={laadAlle} onTouchStart={laadAlle}>
          {delen.map((d, i) => (
            <button
              key={d.deel}
              ref={(el) => { knoppen.current[i] = el; }}
              className="etmaal__deel" role="tab" type="button" id={`dag-${i}`} aria-controls={`dag-paneel-${i}`}
              aria-selected={i === actief} tabIndex={i === actief ? 0 : -1}
              onClick={() => kies(i)}
            >
              {d.deel}
            </button>
          ))}
        </div>
        <div className="etmaal__panelen">
          {delen.map((d, i) => (
            <div key={d.deel} className="etmaal__paneel" role="tabpanel" id={`dag-paneel-${i}`} aria-labelledby={`dag-${i}`} tabIndex={0} data-actief={i === actief}>
              <h3 className="etmaal__naam">{d.deel}</h3>
              <LezerTekst className="etmaal__tekst" jongere={d.jongere} ouder={d.ouder} />
            </div>
          ))}
        </div>
        <Voorbeeld className="etmaal__voorbeeld" />
      </div>
    </div>
  );
}
