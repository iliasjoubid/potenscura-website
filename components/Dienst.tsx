'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { diensten } from '@/lib/gegevens';
import type { Foto } from '@/lib/beeld';
import { Voorbeeld } from './Iconen';
import { Wisselfoto } from './Beelden';
import { useLaterLaden } from '@/lib/laterLaden';

export default function Dienst({ solliciteer = '/werken-bij#solliciteren', fotos, p = false, rand = false, voorrang = false, sizes = '(min-width: 1100px) 45vw, calc(100vw - 40px)', kop }: { solliciteer?: string; fotos?: Foto[]; p?: boolean; rand?: boolean; voorrang?: boolean; sizes?: string; kop?: string }) {
  const [actief, zetActief] = useState(0);
  const [alle, laadAlle] = useLaterLaden();
  const knoppen = useRef<(HTMLButtonElement | null)[]>([]);
  const n = diensten.length;

  const toetsen = (e: React.KeyboardEvent) => {
    const nieuw = ({ ArrowRight: (actief + 1) % n, ArrowLeft: (actief - 1 + n) % n, Home: 0, End: n - 1 } as Record<string, number>)[e.key];
    if (nieuw === undefined) return;
    e.preventDefault();
    zetActief(nieuw);
    knoppen.current[nieuw]?.focus();
  };

  return (
    <div className="dienst">
      {fotos && <Wisselfoto fotos={fotos} actief={actief} sizes={sizes} p={p} voorrang={voorrang} alle={alle} className={`dienst__foto${rand ? ' wisselfoto--rand' : ''}`} />}
      {kop && <h2 className="kop-klein dienst__kop">{kop}</h2>}
      <div className="woorden dienst__tabs" role="tablist" aria-label="Wat je doet op elk moment" onKeyDown={toetsen} onPointerEnter={laadAlle} onFocus={laadAlle} onTouchStart={laadAlle}>
        {diensten.map((d, i) => (
          <button
            key={d.sleutel}
            ref={(el) => { knoppen.current[i] = el; }}
            className="woord" role="tab" type="button" id={`dienst-${d.sleutel}`} aria-controls={`dienst-paneel-${d.sleutel}`}
            aria-selected={i === actief} tabIndex={i === actief ? 0 : -1} data-tekst={d.naam}
            onClick={() => zetActief(i)}
          >
            <span>{d.naam}</span>
          </button>
        ))}
      </div>
      <div className="dienst__panelen">
        {diensten.map((d, i) => (
          <div key={d.sleutel} className="dienst__paneel" role="tabpanel" id={`dienst-paneel-${d.sleutel}`} aria-labelledby={`dienst-${d.sleutel}`} tabIndex={0} data-actief={i === actief}>
            <h3 className="dienst__naam">{d.kop}</h3>
            <p>{d.watJeDoet}</p>
          </div>
        ))}
      </div>
      <div className="dienst__voet">
        <Voorbeeld />
        <Link className="knop" href={solliciteer}>Solliciteren</Link>
      </div>
    </div>
  );
}
