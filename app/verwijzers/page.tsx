import Link from 'next/link';
import Aanmeldkaart from '@/components/Aanmeldkaart';
import JsonLd from '@/components/JsonLd';
import { PaginaKop, Slot } from '@/components/Blokken';
import { KopFoto } from '@/components/Beelden';
import { aanmelden, doelgroep, financiering, paginas } from '@/lib/gegevens';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('verwijzers');

const stappen = [
  { titel: 'Eerste contact', tekst: 'Neem telefonisch of per e-mail contact op. We bespreken kort de vraag en de situatie.' },
  { titel: 'Informatie delen', tekst: 'Als aanvullende informatie nodig is, spreken we af hoe die veilig kan worden aangeleverd. Stuur geen cliëntgegevens via een gewoon contactformulier.' },
  { titel: 'Kennismaking en intake', tekst: 'We bespreken samen met de jongere en betrokkenen of de woonplek, begeleiding en ondersteuningsvraag bij elkaar passen.' },
  { titel: 'Vervolgafspraken', tekst: 'Als er een passende match is en de financiering is geregeld, maken we afspraken over het vervolg en een mogelijke start.' },
];

export default function Verwijzers() {
  const p = paginas.verwijzers;
  return (
    <>
      <PaginaKop
        h1={p.h1}
        zin={`Informatie voor verwijzers en samenwerkingspartners over kleinschalig wonen in Arnhem voor ${doelgroep.tekst}.`}
        naast={<div className="verwijzers-kaart"><Aanmeldkaart groot /></div>}
      />
      <section className="band band--vlak" aria-labelledby="aanmelden-route">
        <div className="raster">
          <div className="home-sectie-kop">
            <p className="home-overline">Aanmelden</p>
            <h2 id="aanmelden-route">Van eerste contact tot een passende plek.</h2>
            <p>Een plaatsing begint met afstemmen. We kijken niet alleen naar beschikbaarheid, maar vooral of de woonvorm en begeleiding aansluiten bij de jongere.</p>
          </div>
          <div className="verwijzers-stappen">
            {stappen.map((s, i) => <article key={s.titel}><span>0{i + 1}</span><div><h3>{s.titel}</h3><p>{s.tekst}</p></div></article>)}
          </div>
        </div>
      </section>
      <section className="band band--navy" aria-labelledby="verwijzers-doelgroep">
        <div className="raster verwijzers-info">
          <div><p className="home-overline home-overline--licht">Doelgroep</p><h2 id="verwijzers-doelgroep">Voor wie is Potens Cura?</h2><p>{doelgroep.waarom}</p><p>We kijken naar de jongere als persoon: diens mogelijkheden, ondersteuningsvraag, motivatie, veiligheid en de mate waarin onze woonvorm aansluit.</p><p><Link className="pijl-link" href="/in-en-exclusiecriteria">Bekijk de inclusie- en exclusiecriteria</Link></p></div>
          <div><p className="home-overline home-overline--licht">Financiering</p><h2>Afstemming per jongere</h2><p>{financiering.antwoord} {financiering.gemeente}</p><p>{aanmelden.beschikbaarheid}</p></div>
        </div>
      </section>
      <section className="band band--vlak">
        <div className="raster verwijzers-contact">
          <div><h2>Overleggen of aanmelden?</h2><p>Bel of mail ons. We denken graag mee over de vraag en de mogelijkheden.</p></div>
          <div><a className="knop" href="tel:+31643534242">Bel 06 43 53 42 42</a><Link className="knop knop--rand" href="/contact">Contactgegevens</Link></div>
        </div>
      </section>
      <Slot />
      <JsonLd data={kruimelsLd('Voor verwijzers', p.pad)} />
    </>
  );
}
