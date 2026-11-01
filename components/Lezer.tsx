'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Soort = 'jongere' | 'ouder';
const LezerContext = createContext<{ lezer: Soort; zet: (l: Soort) => void }>({ lezer: 'jongere', zet: () => {} });

export function LezerKeuze({ children }: { children: React.ReactNode }) {
  const [lezer, zetLezer] = useState<Soort>('jongere');
  useEffect(() => {
    if (new URLSearchParams(location.search).get('lezer') === 'ouder') zetLezer('ouder');
  }, []);
  const zet = (l: Soort) => {
    zetLezer(l);
    const u = new URL(location.href);
    if (l === 'ouder') u.searchParams.set('lezer', 'ouder');
    else u.searchParams.delete('lezer');
    history.replaceState(history.state, '', u);
  };
  return <LezerContext.Provider value={{ lezer, zet }}>{children}</LezerContext.Provider>;
}

export function LezerKnoppen() {
  const { lezer, zet } = useContext(LezerContext);
  return (
    <div className="lezer">
      <span className="lezer__vraag" id="lezer-vraag">Lees als</span>
      <div className="woorden" role="group" aria-labelledby="lezer-vraag">
        {([['jongere', 'Jongere'], ['ouder', 'Ouder']] as const).map(([l, naam]) => (
          <button key={l} type="button" className="woord" aria-pressed={lezer === l} data-tekst={naam} onClick={() => zet(l)}>
            <span>{naam}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function LezerTekst({ jongere, ouder, className }: { jongere: React.ReactNode; ouder: React.ReactNode; className?: string }) {
  const { lezer } = useContext(LezerContext);
  return (
    <>
      <p className={className} data-lezer-tekst="jongere" hidden={lezer !== 'jongere'}><span className="lezer-label">Voor jongeren</span>{jongere}</p>
      <p className={className} data-lezer-tekst="ouder" hidden={lezer !== 'ouder'}><span className="lezer-label">Voor ouders</span>{ouder}</p>
    </>
  );
}
