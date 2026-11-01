import Link from 'next/link';
import EenDag from '@/components/Etmaal';
import JsonLd from '@/components/JsonLd';
import { PaginaKop, Slot } from '@/components/Blokken';
import { PandVierkant } from '@/components/Beelden';
import { DAGFOTOS } from '@/lib/beeld';
import { LezerKeuze, LezerKnoppen, LezerTekst } from '@/components/Lezer';
import { Pijl } from '@/components/Iconen';
import { begeleiding, doelgroep, financiering, openbaar, paginas } from '@/lib/gegevens';
import { datum } from '@/lib/site';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('wonen');

const dag = [
  { deel: 'Ochtend', van: 6, jongere: 'Je staat op en gaat naar school, werk of dagbesteding.', ouder: 'Je kind staat op en gaat naar school, werk of dagbesteding.' },
  { deel: 'Middag', van: 12, jongere: 'Tijd voor afspraken, boodschappen en je eigen doelen.', ouder: 'Tijd voor afspraken, boodschappen en de doelen van je kind.' },
  { deel: 'Avond', van: 18, jongere: 'Je kookt in je eigen keuken. Er is een begeleider om mee te praten.', ouder: 'Je kind kookt in de eigen keuken. Er is een begeleider om mee te praten.' },
  { deel: 'Nacht', van: 24, jongere: 'Ook \'s nachts is er begeleiding. Lig je wakker of is er iets, dan is er iemand.', ouder: 'Ook \'s nachts is er begeleiding, als je kind wakker ligt of als er iets is.' },
];

export default function Wonen() {
  const p = paginas.wonen;
  const { verwijzing } = openbaar;
  return (
    <LezerKeuze>
      <PaginaKop
        h1={p.h1}
        zin={`Een eigen studio met een eigen keuken, en ${begeleiding.naam}. Voor ${doelgroep.tekst} ${doelgroep.situatie}.`}
        naast={
          <figure className="kader-pand">
            <PandVierkant sizes="(min-width: 1100px) 600px, (min-width: 600px) 70vw, calc(100vw - 40px)" voorrang />
            <figcaption>Het pand in Arnhem</figcaption>
          </figure>
        }
      >
        <LezerKnoppen />
      </PaginaKop>

      <section className="band band--vlak" aria-label="De studio, wie betaalt, familie en netwerk en een dag">
        <div className="raster"><div className="vakken">
          <div className="vakken__vak vakken__vak--vijf" id="studio">
            <h2>De studio</h2>
            <LezerTekst
              jongere="Je woont in een eigen studio met een eigen keuken. Er zijn vier studio's. Badkamer en toiletten deel je met de andere jongeren."
              ouder="Je kind woont in een eigen studio met een eigen keuken. Er zijn vier studio's. Badkamer en toiletten zijn gedeeld met de andere jongeren."
            />
            <dl className="paar">
              <div><dt>Eigen</dt><dd>Deur, keuken en spullen</dd></div>
              <div><dt>Gedeeld</dt><dd>Badkamer en toiletten</dd></div>
            </dl>
          </div>
          <div className="vakken__vak vakken__vak--zeven vakken__vak--navy vakken__vak--betalen" id="betalen">
            <h2>Wie betaalt</h2>
            <p className="feitzin">{financiering.antwoord}</p>
            <p>{financiering.gemeente}</p>
            <p>{verwijzing.tekst}</p>
            <p className="vakken__bron">Bron over de verwijzing: <a href={verwijzing.link}>{verwijzing.bron}</a>, nagelezen op {datum(verwijzing.nagelezen)}.</p>
          </div>
          <div className="vakken__vak vakken__vak--vier" id="thuis">
            <h2>Familie en netwerk</h2>
            <LezerTekst
              jongere="Je familie en de mensen om je heen horen erbij. Samen met jou en met hen stellen we de doelen op voor je perspectiefplan. Je achtergrond, geloof en taal tellen mee."
              ouder="Als ouder hoor je bij het netwerk van je kind. Samen met je kind en dat netwerk stellen we de doelen op voor het perspectiefplan. Jullie achtergrond, geloof en taal tellen mee."
            />
            <Link className="pijl-link" href="/#route">Van aankomst tot eigen benen <Pijl /></Link>
          </div>
          <EenDag delen={dag} kop="Een dag" intro={`Er is ${begeleiding.naam}, zeven dagen per week. Kies een deel van de dag.`} naast fotos={DAGFOTOS} />
        </div></div>
      </section>

      <Slot />
      <JsonLd data={kruimelsLd('Wonen', p.pad)} />
    </LezerKeuze>
  );
}
