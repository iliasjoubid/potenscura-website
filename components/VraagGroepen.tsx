'use client';
import { useEffect, useRef, useState } from 'react';

export type Vraaggroep = {
  lezer: string;
  kop: string;
  tab: string;
  lijst: { sleutel: string; vraag: string; feit: string; uitleg: string }[];
  breedtes: number[];
};

export default function VraagGroepen({ groepen }: { groepen: Vraaggroep[] }) {
  const [actief, zetActief] = useState(0);
  const knoppen = useRef<(HTMLButtonElement | null)[]>([]);
  const n = groepen.length;

  useEffect(() => {
    const open = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const i = groepen.findIndex((g) => g.lijst.some((v) => v.sleutel === id));
      if (i < 0) return;
      zetActief(i);
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    };
    open();
    window.addEventListener('hashchange', open);
    return () => window.removeEventListener('hashchange', open);
  }, [groepen]);

  const toetsen = (e: React.KeyboardEvent) => {
    const nieuw = ({ ArrowRight: (actief + 1) % n, ArrowLeft: (actief - 1 + n) % n, Home: 0, End: n - 1 } as Record<string, number>)[e.key];
    if (nieuw === undefined) return;
    e.preventDefault();
    zetActief(nieuw);
    knoppen.current[nieuw]?.focus();
  };

  return (
    <div className="raster vragen-groepen">
      <div className="woorden" role="tablist" aria-label="Vragen van" onKeyDown={toetsen}>
        {groepen.map((g, i) => (
          <button
            key={g.lezer}
            ref={(el) => { knoppen.current[i] = el; }}
            className="woord" role="tab" type="button" id={`tab-${g.lezer}`} aria-controls={`groep-${g.lezer}-paneel`}
            aria-selected={i === actief} tabIndex={i === actief ? 0 : -1} data-tekst={g.tab}
            onClick={() => zetActief(i)}
          >
            <span>{g.tab}</span>
          </button>
        ))}
      </div>
      {groepen.map((g, i) => {
        const oneven = g.lijst.length % 2 === 1;
        return (
          <section
            key={g.lezer} className="vraaggroep" id={`groep-${g.lezer}-paneel`} role="tabpanel"
            aria-labelledby={`groep-${g.lezer}`} data-actief={i === actief}
          >
            <h2 id={`groep-${g.lezer}`}>{g.kop}</h2>
            <div className="vakken">
              {g.lijst.map((v, j) => (
                <div
                  key={v.sleutel}
                  id={v.sleutel}
                  className={`vakken__vak vraaggroep__vraag${oneven && j === g.lijst.length - 1 ? ' vraaggroep__vraag--rest' : ''}`}
                  style={{ '--breed': g.breedtes[j] } as React.CSSProperties}
                >
                  <h3>{v.vraag}</h3>
                  <p className="feitzin">{v.feit}</p>
                  <p className="uitleg">{v.uitleg}</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
