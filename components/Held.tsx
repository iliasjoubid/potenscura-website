import Link from 'next/link';
import { RIJNKADE } from '@/lib/beeld';
import { doelgroep } from '@/lib/gegevens';
import { Rijnkade, BronRegel } from './Beelden';

export default function Held() {
  return (
    <section className="held" aria-labelledby="kernzin">
      <figure className="held__beeld">
        <Rijnkade voorrang />
        <span className="horizon" aria-hidden="true" />
        <figcaption className="held__bron"><BronRegel bron={RIJNKADE} /></figcaption>
      </figure>
      <div className="held__tekst">
        <p className="held__label">Kleinschalig wonen in Arnhem</p>
        <h1 id="kernzin" className="kernzin">Een eigen plek. Ruimte om te groeien.</h1>
        <p className="held__zin">Potens Cura biedt vier eigen studio’s aan jongeren van {doelgroep.leeftijdVan} tot {doelgroep.leeftijdTot} jaar die niet thuis kunnen wonen. Met persoonlijke begeleiding werken we samen aan vertrouwen, ontwikkeling en zelfstandigheid.</p>
        <div className="held__acties">
          <Link className="knop knop--goud held__knop" href="/wonen">Ontdek de woonplek</Link>
          <Link className="pijl-link held__meer" href="/verwijzers">Voor verwijzers <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
