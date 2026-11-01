'use client';
import { useEffect, useState } from 'react';
import { email, telefoon } from '@/lib/site';

export type Veld = {
  naam: string;
  label: string;
  soort?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  opties?: string[];
  verplicht?: boolean;
  autocomplete?: string;
  hint?: string;
};

type Stand = '' | 'bezig' | 'verstuurd' | 'mislukt';

export default function Formulier({ id, velden, knop, letOp, breed }: { id: string; velden: Veld[]; knop: string; letOp?: string; breed?: boolean }) {
  const [klaar, zetKlaar] = useState(false);
  const [stand, zetStand] = useState<Stand>('');
  useEffect(() => zetKlaar(true), []);

  return (
    <form
      className={breed ? 'formulier formulier--breed' : 'formulier'} id={id} method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.reportValidity()) return;
        zetStand('bezig');
        const data = new FormData(form);
        try {
          const antwoord = await fetch('/api/bericht', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              formulier: id,
              website: data.get('website') || '',
              velden: velden.map((v) => ({ naam: v.naam, label: v.label, waarde: String(data.get(v.naam) || '') })),
            }),
          });
          if (!antwoord.ok) throw new Error(String(antwoord.status));
          form.reset();
          zetStand('verstuurd');
        } catch {
          zetStand('mislukt');
        }
      }}
    >
      {letOp && <p className="formulier__let-op">{letOp}</p>}
      <div className="formulier__val" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Laat dit veld leeg</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {velden.map((v) => {
        const vid = `${id}-${v.naam}`;
        const hint = v.hint ? `${vid}-hint` : undefined;
        const gedeeld = { id: vid, name: v.naam, required: v.verplicht, autoComplete: v.autocomplete, 'aria-describedby': hint };
        return (
          <div
            key={v.naam} className={v.soort === 'textarea' ? 'formulier__lang' : undefined}
            style={v.soort === 'textarea' ? ({ '--rijen': velden.filter((w) => w.soort !== 'textarea').length } as React.CSSProperties) : undefined}
          >
            <label htmlFor={vid}>{v.label}{!v.verplicht && <span className="formulier__vrij"> (niet verplicht)</span>}</label>
            {v.hint && <p className="formulier__hint" id={hint}>{v.hint}</p>}
            {v.soort === 'textarea' ? (
              <textarea {...gedeeld} rows={5} />
            ) : v.soort === 'select' ? (
              <select {...gedeeld} defaultValue="">
                <option value="" disabled>Kies</option>
                {v.opties!.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : (
              <input {...gedeeld} type={v.soort || 'text'} />
            )}
          </div>
        );
      })}
      <button className="knop" type="submit" disabled={!klaar || stand === 'bezig'}>{stand === 'bezig' ? 'Bezig met versturen' : knop}</button>
      {stand === 'verstuurd' && (
        <p className="formulier__uitslag" role="status">Dank je, je bericht is verstuurd naar Potens Cura.</p>
      )}
      {stand === 'mislukt' && (
        <p className="formulier__uitslag" role="alert">
          Versturen lukt nu niet. Mail je bericht naar {email.tekst} of bel {telefoon.tekst}.
        </p>
      )}
    </form>
  );
}
