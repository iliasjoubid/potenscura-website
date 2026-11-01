import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { PaginaKop, Slot, Werkwijze } from '@/components/Blokken';
import { Bedstee, BronRegel } from '@/components/Beelden';
import { Pijl } from '@/components/Iconen';
import { BEDSTEE } from '@/lib/beeld';
import { doelgroep, organisatie, paginas, partijen } from '@/lib/gegevens';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('over');

export default function OverOns() {
  const p = paginas.over;
  return (
    <>
      <PaginaKop
        h1={p.h1}
        zin={`Potens Cura biedt kleinschalig wonen in Arnhem voor ${doelgroep.tekst}. Een eigen plek, persoonlijke aandacht en werken aan perspectief.`}
        naast={
          <figure className="held__beeld held__beeld--bedstee held__beeld--half">
            <Bedstee voorrang half />
            <span className="horizon" aria-hidden="true" />
            <figcaption className="held__bron"><BronRegel bron={BEDSTEE} /></figcaption>
          </figure>
        }
      />

      <section className="band band--vlak" aria-label="Over Potens Cura">
        <div className="raster">
          <div className="over-intro">
            <p className="home-overline">{organisatie.motto}</p>
            <h2>In verbinding naar zelfredzaamheid.</h2>
            <p>Een eigen woonplek is meer dan een kamer. Het is een basis van waaruit een jongere kan werken aan vertrouwen, dagelijkse vaardigheden en een volgende stap. We bieden ruimte om te oefenen, fouten te maken en opnieuw te proberen.</p>
          </div>
          <div className="over-missie">
            <article><span>01 · Missie</span><h3>Een plek om verder te komen</h3><p>Potens Cura biedt jongeren een kleinschalige woonplek met persoonlijke begeleiding. Vanuit vertrouwen werken we samen aan ontwikkeling, zelfredzaamheid en perspectief.</p></article>
            <article><span>02 · Visie</span><h3>Iedere jongere een eigen richting</h3><p>Wij geloven dat jongeren kunnen groeien wanneer zij zich gezien en serieus genomen voelen. Een eigen plek, duidelijke afspraken en mensen die naast je staan, kunnen ruimte geven om stap voor stap je eigen richting te vinden.</p></article>
          </div>
        </div>
      </section>

      <Werkwijze />

      <section className="band band--vlak" aria-label="Kwaliteit en klachten">
        <div className="raster over-kwaliteit">
          <section>
            <p className="home-overline">Vakmanschap</p>
            <h2>Kwaliteit en professionele begeleiding</h2>
            <p>{partijen.skj.tekst}</p>
            <p>Onze werkwijze is gericht op een betrouwbare relatie, duidelijke doelen en begeleiding die aansluit bij de jongere. We werken met de presentiebenadering, systeemgericht en cultuursensitief.</p>
            <p>Meer informatie over het register vind je op <a href="https://skjeugd.nl">skjeugd.nl</a>.</p>
          </section>
          <section>
            <p className="home-overline">Rechten en ondersteuning</p>
            <h2>Vertrouwenspersoon en klachten</h2>
            <p>Jongeren en hun ouders kunnen gratis en onafhankelijk ondersteuning vragen bij Jeugdstem of Adviespunt Zorgbelang. Potens Cura is aangesloten bij {partijen.klachten.naam} voor de onafhankelijke behandeling van klachten.</p>
            <Link className="pijl-link" href="/klachten">Lees hoe je een klacht indient <Pijl /></Link>
          </section>
        </div>
      </section>
      <Slot grond="vlak" />
      <JsonLd data={kruimelsLd('Over ons', p.pad)} />
    </>
  );
}
