'use client';
import { useRef, useState } from 'react';
import { vragen } from '@/lib/gegevens';

export default function VragenKeuze({ sleutels }: { sleutels: string[] }) {
  const lijst = sleutels.map((s) => vragen.find((v) => v.sleutel === s)!).filter(Boolean);
  const [actief, zetActief] = useState(0);
  const knoppen = useRef<(HTMLButtonElement | null)[]>([]);
  const n = lijst.length;

  const toetsen = (e: React.KeyboardEvent) => {
    const nieuw = ({ ArrowDown: (actief + 1) % n, ArrowUp: (actief - 1 + n) % n, Home: 0, End: n - 1 } as Record<string, number>)[e.key];
    if (nieuw === undefined) return;
    e.preventDefault();
    zetActief(nieuw);
    knoppen.current[nieuw]?.focus();
  };

  return (
    <div className="raster vragen">
      <h2 id="vragen-kop">Vragen</h2>
      <div className="vragen__lijst" role="tablist" aria-orientation="vertical" aria-labelledby="vragen-kop" data-regels="meer" onKeyDown={toetsen}>
        {lijst.map((v, i) => (
          <button
            key={v.sleutel}
            ref={(el) => { knoppen.current[i] = el; }}
            className="vragen__vraag" role="tab" type="button" id={`vraag-${v.sleutel}`} aria-controls={`antwoord-${v.sleutel}`}
            aria-selected={i === actief} tabIndex={i === actief ? 0 : -1}
            onClick={() => zetActief(i)}
          >
            {v.vraag}
          </button>
        ))}
      </div>
      <div className="vragen__antwoord">
        {lijst.map((v, i) => (
          <div key={v.sleutel} className="vragen__paneel" role="tabpanel" id={`antwoord-${v.sleutel}`} aria-labelledby={`vraag-${v.sleutel}`} tabIndex={0} data-actief={i === actief}>
            <h3 className="vragen__kop">{v.vraag}</h3>
            <p className="feitzin">{v.feit}</p>
            <p className="uitleg">{v.uitleg}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
