import Link from 'next/link';
import { begeleiding, doelgroep, intake, methodieken, werkwijzen } from '@/lib/gegevens';
import { email, telefoon } from '@/lib/site';
import { Pijl, Voorbeeld } from './Iconen';
import { Pand } from './Beelden';


export function Huis() {
  return (
    <section className="huis" id="studio" aria-labelledby="huis-kop">
      <div className="raster huis__binnen">
        <figure className="huis__foto">
          <Pand sizes="(min-width: 1100px) 430px, (min-width: 600px) 40vw, calc(100vw - 40px)" vierkantOpTelefoon />
          <figcaption className="foto-bron">Het pand van Potens Cura in Arnhem.</figcaption>
        </figure>
        <div className="huis__tekst">
          <h2 id="huis-kop">Je eigen studio in Arnhem</h2>
          <p className="groot-tekst">Vier studio&apos;s, elk met een eigen keuken. Je woont (semi)zelfstandig, niet in een groep.</p>
          <dl className="doorsnede">
            <div><dt>Van jou</dt><dd><span>Studio</span><span>Keuken</span></dd></div>
            <div><dt>Gedeeld</dt><dd><span>Badkamer</span><span>Toiletten</span></dd></div>
          </dl>
          <p className="huis__onder">Begeleiding is er {begeleiding.waarde}. Voor {doelgroep.tekst} {doelgroep.situatie}, {doelgroep.problematiek}.</p>
          <Link className="pijl-link" href="/wonen">Meer over wonen <Pijl /></Link>
        </div>
      </div>
    </section>
  );
}

export function WerkwijzeLijst({ className = '', kort = false }: { className?: string; kort?: boolean }) {
  return (
    <dl className={`werkwijze__lijst ${className}`.trim()}>
      {werkwijzen.map((w) => (
        <div key={w.sleutel}>
          <dt><span className="werkwijze__naam" data-tekst={w.naam}><span>{w.naam}</span></span></dt>
          <dd>{kort ? w.kort : <><span className="werkwijze__lang">{w.uitleg}</span><span className="werkwijze__kort">{w.kort}</span></>}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Werkwijze({ kop = 'Zo werken we' }: { kop?: string }) {
  return (
    <section className="band band--navy" id="werkwijze" aria-labelledby="werkwijze-kop">
      <div className="raster werkwijze">
        <div className="werkwijze__kop">
          <h2 id="werkwijze-kop">{kop}</h2>
          <p>{begeleiding.zin}</p>
          <p>{intake.zin}</p>
          <p className="werkwijze__methoden">{methodieken.zin}</p>
        </div>
        <div className="werkwijze__rechts">
          <WerkwijzeLijst />
          <Voorbeeld className="werkwijze__label" tekst="Uitleg: voorstel" />
        </div>
      </div>
    </section>
  );
}

export function Slot({ grond = 'navy' }: { grond?: 'navy' | 'vlak' }) {
  return (
    <section className={`slot band--${grond}`} aria-labelledby="slot-kop">
      <div className="raster slot__binnen">
        <div className="slot__tekst">
          <h2 id="slot-kop">Bel of mail ons</h2>
          <p>Voor een aanmelding, een vraag of een sollicitatie.</p>
        </div>
        <dl className="slot__contact">
          <div><dt>Telefoon</dt><dd><a href={telefoon.link}>{telefoon.tekst}</a></dd></div>
          <div><dt>E-mail</dt><dd><a href={email.link}>{email.tekst}</a></dd></div>
          {(telefoon.voorbeeld || email.voorbeeld) && <div className="slot__label"><Voorbeeld /></div>}
        </dl>
      </div>
    </section>
  );
}

export function PaginaKop({ h1, zin, children, naast, className = '' }: { h1: string; zin: string; children?: React.ReactNode; naast?: React.ReactNode; className?: string }) {
  return (
    <section className={`pagina-kop${naast ? ' pagina-kop--naast' : ''} ${className}`.trim()} aria-labelledby="pagina-h1">
      <div className="raster pagina-kop__binnen">
        <div className="pagina-kop__tekst">
          <h1 id="pagina-h1">{h1.replace(/Potens Cura/g, 'Potens Cura')}</h1>
          <div className="pagina-kop__zin">
            <p>{zin}</p>
            {children}
          </div>
        </div>
        {naast && <div className="pagina-kop__naast">{naast}</div>}
      </div>
    </section>
  );
}
