import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { PaginaKop, Slot, Werkwijze } from '@/components/Blokken';
import { PandVierkant } from '@/components/Beelden';
import { LezerKeuze, LezerKnoppen, LezerTekst } from '@/components/Lezer';
import { Pijl } from '@/components/Iconen';
import { begeleiding, doelgroep, financiering, openbaar, paginas } from '@/lib/gegevens';
import { datum } from '@/lib/site';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('wonen');

export default function Wonen() {
  const p = paginas.wonen;
  const { verwijzing } = openbaar;
  return (
    <LezerKeuze>
      <PaginaKop
        h1={p.h1}
        zin={`Een kleinschalige woonplek voor ${doelgroep.tekst}. Je hebt een eigen studio met keuken en krijgt ${begeleiding.naam}.`}
        naast={
          <figure className="kader-pand">
            <PandVierkant sizes="(min-width: 1100px) 600px, (min-width: 600px) 70vw, calc(100vw - 40px)" voorrang />
            <figcaption>De woonlocatie in Arnhem</figcaption>
          </figure>
        }
      >
        <LezerKnoppen />
      </PaginaKop>

      <section className="band band--vlak" aria-label="Wonen, begeleiding, netwerk en financiering">
        <div className="raster"><div className="vakken">
          <section className="vakken__vak vakken__vak--vijf" id="studio">
            <p className="home-overline">Jouw plek</p>
            <h2>Een eigen studio</h2>
            <LezerTekst
              jongere="Je woont in je eigen studio met een eigen keuken. Er zijn vier studio’s. De badkamer en toiletten deel je met de andere jongeren."
              ouder="Je kind heeft een eigen studio met een eigen keuken. Er zijn vier studio’s. De badkamer en toiletten worden gedeeld met de andere jongeren."
            />
            <dl className="paar">
              <div><dt>Eigen</dt><dd>Studio en keuken</dd></div>
              <div><dt>Gedeeld</dt><dd>Badkamer en toiletten</dd></div>
            </dl>
          </section>
          <section className="vakken__vak vakken__vak--zeven vakken__vak--navy" id="begeleiding">
            <p className="home-overline home-overline--licht">Begeleiding</p>
            <h2>Persoonlijk en dichtbij</h2>
            <p>Er is {begeleiding.naam}, zeven dagen per week. De begeleiding sluit aan bij jouw doelen en wat je op dat moment nodig hebt.</p>
            <p>We werken aan dagelijkse vaardigheden, eigen regie en een toekomst die bij jou past. Dat doen we samen met jou en, als dat passend is, met de mensen om je heen.</p>
            <Link className="pijl-link" href="/over-ons">Lees over onze werkwijze <Pijl /></Link>
          </section>
          <section className="vakken__vak vakken__vak--vier" id="thuis">
            <p className="home-overline">Samen om je heen</p>
            <h2>Familie en netwerk</h2>
            <LezerTekst
              jongere="De mensen die belangrijk voor je zijn, kunnen onderdeel zijn van je begeleiding. We bespreken samen wie je bij je doelen wilt betrekken. Je achtergrond, geloof en taal verdienen aandacht."
              ouder="Ouders, familie en andere belangrijke mensen kunnen onderdeel zijn van het netwerk. We bespreken met de jongere wie betrokken wordt en op welke manier."
            />
          </section>
          <section className="vakken__vak vakken__vak--acht" id="betalen">
            <p className="home-overline">Financiering</p>
            <h2>Hoe wordt de zorg betaald?</h2>
            <p className="feitzin">{financiering.antwoord}</p>
            <p>{financiering.gemeente}</p>
            <p>{verwijzing.tekst}</p>
            <p className="vakken__bron">Bron over de verwijzing: <a href={verwijzing.link}>{verwijzing.bron}</a>, nagelezen op {datum(verwijzing.nagelezen)}.</p>
          </section>
        </div></div>
      </section>
      <Werkwijze kop="Wat je van onze begeleiding mag verwachten" />
      <section className="band band--vlak">
        <div className="raster wonen-contact">
          <div><h2>Wil je weten of deze woonplek past?</h2><p>Neem contact op voor een eerste kennismaking. We bespreken de situatie en kijken samen of de woonvorm aansluit.</p></div>
          <Link className="knop" href="/contact">Neem contact op</Link>
        </div>
      </section>
      <Slot />
      <JsonLd data={kruimelsLd('Wonen', p.pad)} />
    </LezerKeuze>
  );
}
