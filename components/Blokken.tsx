import Link from 'next/link';
import { begeleiding, doelgroep, intake, methodieken, werkwijzen } from '@/lib/gegevens';
import { email, telefoon } from '@/lib/site';
import { Pijl, Voorbeeld } from './Iconen';
import { Pand } from './Beelden';


export function Huis() {
  return (
    <section className="huis" aria-labelledby="huis-kop">
      <div className="raster">
        <div className="huis__raster">
          <figure className="huis__foto">
            <Pand sizes="(min-width: 1100px) 440px, (min-width: 600px) 50vw, calc(100vw - 40px)" vierkantOpTelefoon />
            <figcaption>Sfeerbeeld ter illustratie; geen foto van de woonlocatie</figcaption>
          </figure>
          <div className="huis__vak huis__studio">
            <h2 id="huis-kop">Je eigen studio</h2>
            <dl className="huis__spec">
              <div><dt>Studio&apos;s</dt><dd>Vier, elk met een eigen keuken</dd></div>
              <div><dt>Gedeeld</dt><dd>Badkamer en toiletten</dd></div>
              <div><dt>Wonen</dt><dd>Eigen plek met 24/7 begeleiding op locatie</dd></div>
            </dl>
            <Link className="pijl-link" href="/wonen">Zo woon je bij Potens Cura <Pijl /></Link>
          </div>
          <div className="huis__vak huis__vak--navy">
            <h3 className="huis__groot">24 uur per dag</h3>
            <p>{begeleiding.zin}</p>
            <Link className="pijl-link" href="/wonen#dag">Zo ziet een dag eruit <Pijl /></Link>
          </div>
          <div className="huis__vak huis__vak--goud">
            <h3 className="huis__groot">{doelgroep.leeftijdVan} tot {doelgroep.leeftijdTot} jaar</h3>
            <p>Voor jongeren die een stabiele woonomgeving, nabijheid en persoonlijke begeleiding nodig hebben.</p>
            <p>{doelgroep.waarom}</p>
          </div>
          <div className="huis__vak huis__werkwijze-kop">
            <h3>Zo werken we</h3>
            <p>{intake.zin}</p>
          </div>
          <WerkwijzeLijst className="huis__werkwijze" kort />
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
        <WerkwijzeLijst />
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
          <div>
            <dt>E-mail</dt><dd>{email.tekst}</dd>
            {(telefoon.voorbeeld || email.voorbeeld) && <dd className="slot__label"><Voorbeeld /></dd>}
          </div>
        </dl>
        <a className="knop knop--goud" href={email.link}>Mail ons</a>
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
