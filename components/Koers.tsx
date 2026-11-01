'use client';
import { useEffect, useRef, useState } from 'react';
import { koers } from '@/lib/gegevens';

export default function Koers() {
  const [actief, zetActief] = useState(0);
  const knoppen = useRef<(HTMLButtonElement | null)[]>([]);
  const n = koers.length;

  useEffect(() => {
    const open = () => {
      const i = koers.findIndex((k) => k.sleutel === window.location.hash.slice(1));
      if (i >= 0) zetActief(i);
    };
    open();
    window.addEventListener('hashchange', open);
    return () => window.removeEventListener('hashchange', open);
  }, []);

  const toetsen = (e: React.KeyboardEvent) => {
    const nieuw = ({ ArrowRight: (actief + 1) % n, ArrowLeft: (actief - 1 + n) % n, Home: 0, End: n - 1 } as Record<string, number>)[e.key];
    if (nieuw === undefined) return;
    e.preventDefault();
    zetActief(nieuw);
    knoppen.current[nieuw]?.focus();
  };

  return (
    <div className="koers">
      <h2 className="koers__kop" id="koers-kop">Missie, visie en doel</h2>
      <div className="woorden koers__woorden" role="tablist" aria-labelledby="koers-kop" onKeyDown={toetsen}>
        {koers.map((k, i) => (
          <button
            key={k.sleutel}
            ref={(el) => { knoppen.current[i] = el; }}
            className="woord" role="tab" type="button" id={`koers-${k.sleutel}`} aria-controls={k.sleutel}
            aria-selected={i === actief} tabIndex={i === actief ? 0 : -1} data-tekst={k.naam}
            onClick={() => zetActief(i)}
          >
            <span>{k.naam}</span>
          </button>
        ))}
      </div>
      <div className="koers__panelen">
        {koers.map((k, i) => (
          <div key={k.sleutel} className="koers__paneel" role="tabpanel" id={k.sleutel} aria-labelledby={`koers-${k.sleutel}`} tabIndex={0} data-actief={i === actief}>
            <h3 className="koers__naam">{k.naam}</h3>
            <p className="koers__tekst">{k.tekst}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
