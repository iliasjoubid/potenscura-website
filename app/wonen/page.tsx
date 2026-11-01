import Link from 'next/link';
import EenDag from '@/components/Etmaal';
import JsonLd from '@/components/JsonLd';
import { Slot } from '@/components/Blokken';
import { DAGFOTOS } from '@/lib/beeld';
import { LezerKeuze, LezerKnoppen, LezerTekst } from '@/components/Lezer';
import { Pijl } from '@/components/Iconen';
import { begeleiding, doelgroep, financiering, openbaar, paginas } from '@/lib/gegevens';
import { datum } from '@/lib/site';
import { meta } from '@/lib/meta';
import { kruimelsLd } from '@/lib/structured';

export const metadata = meta('wonen');

const dag = [
  { deel: 'Ochtend', van: 6, jongere: 'Je staat op en gaat naar school, werk of je dagbesteding.', ouder: 'Je kind staat op en gaat naar school, werk of de dagbesteding.' },
  { deel: 'Middag', van: 12, jongere: 'Tijd voor afspraken, boodschappen en je eigen doelen.', ouder: 'Tijd voor afspraken, boodschappen en de doelen van je kind.' },
  { deel: 'Avond', van: 18, jongere: 'Je kookt in je eigen keuken. Er is een begeleider om mee te praten.', ouder: 'Je kind kookt in de eigen keuken. Er is een begeleider om mee te praten.' },
  { deel: 'Nacht', van: 24, jongere: 'Ook \'s nachts is er begeleiding.', ouder: 'Ook \'s nachts is er begeleiding.' },
];

export default function Wonen() {
  const p = paginas.wonen;
  const { verwijzing } = openbaar;
  return (
    <LezerKeuze>
      <EenDag delen={dag} strook fotos={DAGFOTOS} kop="Een dag van 24 uur" intro={`Er is ${begeleiding.naam}, zeven dagen per week. Kies een deel van de dag.`}>
        <h1 id="pagina-h1" className="dag-strook__titel">{p.h1}</h1>
        <div className="dag-strook__zin">
          <p>{`Een eigen studio met een eigen keuken, en ${begeleiding.naam}. Voor ${doelgroep.tekst} ${doelgroep.situatie}.`}</p>
          <LezerKnoppen />
        </div>
      </EenDag>

      <section className="band band--vlak" aria-label="De studio, wie betaalt, familie en netwerk">
        <div className="raster"><div className="vakken">
          <div className="vakken__vak vakken__vak--zes" id="studio">
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
          <div className="vakken__vak vakken__vak--zes" id="thuis">
            <h2>Familie en netwerk</h2>
            <LezerTekst
              jongere="Je familie en de mensen om je heen horen erbij. Samen met jou en met hen stellen we de doelen op voor je perspectiefplan."
              ouder="Als ouder hoor je bij het netwerk van je kind. Samen met je kind en dat netwerk stellen we de doelen op voor het perspectiefplan."
            />
            <Link className="pijl-link" href="/#route">Van aankomst tot eigen benen <Pijl /></Link>
          </div>
          <div className="vakken__vak vakken__vak--breed vakken__vak--navy" id="betalen">
            <div>
              <h2>Wie betaalt de zorg?</h2>
              <p className="groot-tekst">{financiering.antwoord}</p>
            </div>
            <div>
              <p>{financiering.gemeente}</p>
              <p>{verwijzing.tekst}</p>
              <p className="vakken__bron">Bron over de verwijzing: <a href={verwijzing.link}>{verwijzing.bron}</a>, nagelezen op {datum(verwijzing.nagelezen)}.</p>
            </div>
          </div>
        </div></div>
      </section>

      <Slot />
      <JsonLd data={kruimelsLd('Wonen', p.pad)} />
    </LezerKeuze>
  );
}
